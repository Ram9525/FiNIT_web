import React, { useState, useEffect } from "react";
import MapComponent from "../../Components/MapComponent";

const Map = () => {
  const [placeNames, setPlaceNames] = useState({
    ManitChauraha: "MANIT Main Gate, Bhopal",
    ManitCampus: "MANIT Main Building, Bhopal",
    ManitSBI: "MANIT SBI, Bhopal",
    ManitDepartments: "MANIT Departments, Bhopal",
    ManitSports: "MANIT Sports Complex, Bhopal",
  });
  const [selectedLocation, setSelectedLocation] = useState("");
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [triggerLocationChange, setTriggerLocationChange] = useState(null);

  // Fetch the map address for the given place name
  const fetchMapAddress = async (placeName) => {
    const apiKey = import.meta.env.VITE_LOCATION_IQ_API_KEY;
    const url = `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${encodeURIComponent(placeName)}&format=json`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.length > 0) {
        const { lat, lon, display_name } = data[0];
        console.log("Fetched Location:", display_name);
        setLat(lat);
        setLon(lon);
      } else {
        console.error("Location not found:", placeName);
      }
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  // Handle location change with `useEffect`
  useEffect(() => {
    if (triggerLocationChange) {
      const placeName = placeNames[triggerLocationChange];
      setSelectedLocation(placeName);
      fetchMapAddress(placeName);
      setTriggerLocationChange(null); // Reset trigger after handling
    }
  }, [triggerLocationChange, placeNames]);

  // Handle search and add new location
  const handleSearch = () => {
    if (searchQuery.trim()) {
      const normalizedQuery = searchQuery.trim();
      const existingPlaceNames = Object.values(placeNames).map((name) => name.toLowerCase());

      if (!existingPlaceNames.includes(normalizedQuery.toLowerCase())) {
        setPlaceNames((prev) => ({
          [normalizedQuery]: normalizedQuery,
          ...prev,
        }));
      }
      setTriggerLocationChange(normalizedQuery); // Trigger location change after adding
      setSearchQuery("");
    }
  };

  // Filter places based on the search query
  const filteredPlaceNames = Object.keys(placeNames).filter((key) =>
    placeNames[key].toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col md:h-screen lg:my-24 my-12 px-5">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 text-white py-4 px-6 shadow-lg text-center mb-4">
        <h1 className="text-2xl font-bold">Explore MANIT Campus</h1>
      </header>

      {/* Content */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-gray-800 text-white p-4 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Locations</h2>

          {/* Search Input */}
          <div className="flex flex-col md:flex-row gap-2">
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-700 text-white"
              placeholder="Search locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch} className="p-2 rounded bg-teal-600">
              Search
            </button>
          </div>

          {/* Location List */}
          <ul className="mt-4">
            {filteredPlaceNames.length > 0 ? (
              filteredPlaceNames.map((key) => (
                <li key={key} className="mb-3">
                  <button
                    onClick={() => setTriggerLocationChange(key)}
                    className={`w-full text-left p-2 rounded ${
                      selectedLocation === placeNames[key]
                        ? "bg-indigo-600"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                  >
                    {placeNames[key]}
                  </button>
                </li>
              ))
            ) : (
              <li className="text-gray-400">No matching locations</li>
            )}
          </ul>
        </aside>

        {/* Map Container */}
        <main className="flex-1 flex justify-center items-center h-[300px] md:h-auto mt-5 md:mt-0">
          {lat && lon ? (
            <MapComponent lat={lat} lon={lon} />
          ) : (
            <p className="text-center mt-10">Select a location to view the map</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Map;
