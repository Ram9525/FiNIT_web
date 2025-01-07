import React, { useState } from "react";

const Forms = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  
  const [submissionStatus, setSubmissionStatus] = useState("");

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
   

   
    fetch(import.meta.env.VITE_WEBFORM_ACTION, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_WEBFORM_ACCESS_KEY,
        ...formData,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setSubmissionStatus("Form submitted successfully!"); 
         
          setFormData({
            name: "",
            email: "",
            number: "",
            message: "",
          });
        } else {
          setSubmissionStatus("Error submitting the form. Please try again."); 
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setSubmissionStatus("Error submitting the form. Please try again.");
      });
  };

  return (
    <div className="min-h-screen py-28 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-black p-6">
      {/* Heading */}
      <h2
        style={{ fontFamily: "fh1" }}
        className="text-5xl font-bold text-[#00FFCC] mb-4 text-center"
      >
        Have any query?
      </h2>
      <p className="text-lg text-gray-200 mb-8 text-center max-w-lg">
        Let us know how we can help and we’ll respond shortly!
      </p>

      {/* Form Container */}
      <div className="bg-gray-900 shadow-lg rounded-lg p-8 w-full max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-300 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-800 text-white"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-300 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-800 text-white"
            />
          </div>

          {/* Phone Number Field */}
          <div className="flex flex-col">
            <label htmlFor="number" className="text-gray-300 font-medium mb-1">
              Phone Number
            </label>
            <input
              type="number"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
              className="p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-800 text-white"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-300 font-medium mb-1">
              Message
            </label>
            <input
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-800 text-white"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-medium py-3 rounded-md hover:bg-teal-600 transition duration-300"
          >
            Submit
          </button>
        </form>

        {/* Submission Status Message */}
        {submissionStatus && (
          <p
            className={`mt-4 text-center ${
              submissionStatus.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {submissionStatus}
          </p>
        )}
      </div>
    </div>
  );
};

export default Forms;
