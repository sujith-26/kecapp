import React, { useEffect, useState } from "react";
import IT from "./it";

const FacilityLib = () => {
  const [labs, setLabs] = useState([]);
  const [libDetails, setLibDetails] = useState(null); // State for library details
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null);

  // Fetch labs
  useEffect(() => {
    fetch("http://localhost:4000/getLabs")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch labs");
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) setLabs(data);
        else throw new Error("Invalid data format received");
      })
      .catch((error) => {
        console.error("Error fetching labs:", error);
        setError(error.message);
      });
  }, []);

  // Fetch library details
  useEffect(() => {
    fetch("http://localhost:4000/getLibDetail")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch library details");
        return response.json();
      })
      .then((data) => {
        console.log("Fetched library details:", data); // Log the data
        if (data) setLibDetails(data); // Set library details only if data exists
        else throw new Error("No data received from the server");
      })
      .catch((error) => {
        console.error("Error fetching library details:", error);
        setError(error.message);
      })
      .finally(() => setLoading(false)); // Set loading to false after fetching
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0", "scale-100");
            entry.target.classList.remove("opacity-0", "translate-y-20", "scale-90");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".animate-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Cleanup observer
  }, [labs, libDetails]); // Add libDetails to dependency array

  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-50 min-h-screen">
      <IT />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-16 text-indigo-900 animate-pulse">
          Facilities - Laboratories & Library
        </h1>

        {loading ? (
          <p className="text-center text-gray-700">Loading labs and library details...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : (
          <div className="space-y-20">
            {/* Display Labs */}
            {labs.map((lab) => {
              console.log("Lab Data:", lab); // Log the entire lab object
              console.log("Image Data:", lab.image); // Log the image data

              return (
                <div
                  key={lab._id}
                  className="animate-section opacity-0 translate-y-20 scale-90 transition-all duration-700 ease-out"
                >
                  <div className="border-l-4 border-indigo-600 pl-6 mb-6">
                    <h2 className="text-3xl font-bold text-indigo-900 hover:text-indigo-700 transition-colors duration-300">
                      {lab.labName}
                    </h2>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8 hover:text-gray-900 transition-colors duration-300">
                    {lab.description}
                  </p>
                  <div className="relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    {lab.image ? (
                      <img
                        src={`data:image/jpeg;base64,${lab.image}`} // Use the `image` field
                        alt={lab.labName}
                        className="w-full h-96 object-contain transform hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          console.error("Image failed to load:", e); // Log image loading errors
                          e.target.src = "path/to/fallback-image.jpg"; // Fallback image
                        }}
                      />
                    ) : (
                      <div className="w-full h-96 bg-gray-200 flex items-center justify-center text-gray-500">
                        Image not available
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Display Library Details */}
            {libDetails && (
              <div className="animate-section opacity-0 translate-y-20 scale-90 transition-all duration-700 ease-out">
                <div className="border-l-4 border-indigo-600 pl-6 mb-8">
                  <h2 className="text-3xl font-bold text-indigo-900 hover:text-indigo-700 transition-colors duration-300">
                    Library (Common to CSE & IT)
                  </h2>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* First Column */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors duration-200">
                        <span className="font-semibold text-gray-700 hover:text-indigo-700 transition-colors duration-300">
                          Total Area
                        </span>
                        <span className="text-indigo-700 font-medium hover:text-indigo-900 transition-colors duration-300">
                          {libDetails.totalArea}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors duration-200">
                        <span className="font-semibold text-gray-700 hover:text-indigo-700 transition-colors duration-300">
                          No. of Volumes
                        </span>
                        <span className="text-indigo-700 font-medium hover:text-indigo-900 transition-colors duration-300">
                          {libDetails.noOfVolumes}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors duration-200">
                        <span className="font-semibold text-gray-700 hover:text-indigo-700 transition-colors duration-300">
                          No. of Titles
                        </span>
                        <span className="text-indigo-700 font-medium hover:text-indigo-900 transition-colors duration-300">
                          {libDetails.noOfTitles}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors duration-200">
                        <span className="font-semibold text-gray-700 hover:text-indigo-700 transition-colors duration-300">
                          No. of Report CDs
                        </span>
                        <span className="text-indigo-700 font-medium hover:text-indigo-900 transition-colors duration-300">
                          {libDetails.noOfReportCD}
                        </span>
                      </div>
                    </div>

                    {/* Second Column */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors duration-200">
                        <span className="font-semibold text-gray-700 hover:text-indigo-700 transition-colors duration-300">
                          Value of Books
                        </span>
                        <span className="text-indigo-700 font-medium hover:text-indigo-900 transition-colors duration-300">
                          {libDetails.valueOfBooks}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors duration-200">
                        <span className="font-semibold text-gray-700 hover:text-indigo-700 transition-colors duration-300">
                          No. of Journals
                        </span>
                        <span className="text-indigo-700 font-medium hover:text-indigo-900 transition-colors duration-300">
                          {libDetails.noOfJournals}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors duration-200">
                        <span className="font-semibold text-gray-700 hover:text-indigo-700 transition-colors duration-300">
                          Value of Journals
                        </span>
                        <span className="text-indigo-700 font-medium hover:text-indigo-900 transition-colors duration-300">
                          {libDetails.valueOfJournals}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors duration-200">
                        <span className="font-semibold text-gray-700 hover:text-indigo-700 transition-colors duration-300">
                          Working Hours
                        </span>
                        <span className="text-indigo-700 font-medium hover:text-indigo-900 transition-colors duration-300">
                          {libDetails.workingHours}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Library Image */}
                  <div className="mt-8 relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  {libDetails.image && libDetails.image.data ? (
  <img
    src={`data:image/jpeg;base64,${libDetails.image.data}`} // Access the image data correctly
    alt="Library"
    className="w-full h-64 object-contain transform hover:scale-105 transition-transform duration-500"
    onError={(e) => {
      console.error("Image failed to load:", e);
      e.target.src = "/path/to/fallback-image.jpg"; // Fallback image
    }}
  />
) : (
  <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
    Image not available
  </div>
)}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FacilityLib;