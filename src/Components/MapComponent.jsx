import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ lat, lon }) => {
  useEffect(() => {
    // Create a Leaflet map instance
    const map = L.map('map', {
      center: [lat, lon],
      zoom: 16,
    });

    // Use OpenStreetMap's tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Add a marker at the specified lat/lon
    L.marker([lat, lon]).addTo(map).bindPopup('Selected Location').openPopup();

    // Cleanup the map when the component unmounts
    return () => {
      map.remove();
    };
  }, [lat, lon]);

  return (
    <div
      id="map"
      style={{ width: '100%', height: '100%', minHeight: '300px' }}
    />
  );
};

export default MapComponent;
