import React, { useEffect, useState } from 'react';
import IT from "./it";

const PatentDetails = () => {
  const [patents, setPatents] = useState([]);

  useEffect(() => {
    // Fetch patent details from the API
    fetch('https://server-o4m9.onrender.com/api/patentdetails')
      .then(response => response.json())
      .then(data => {
        // Assuming the API returns an array of patent objects
        setPatents(data);
      })
      .catch(error => {
        console.error('Error fetching patent details:', error);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = elementTop < window.innerHeight && elementBottom >= 0;
        if (isVisible) {
          element.classList.add('opacity-100');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <IT />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-center mb-8 fade-in opacity-0 transition-opacity duration-1000">
          Patent Details
        </h1>
        <div className="overflow-x-auto fade-in opacity-0 transition-opacity duration-1000">
          <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-3 px-6 border-b">S.No</th>
                <th className="py-3 px-6 border-b">Name</th>
                <th className="py-3 px-6 border-b">Title of Invention</th>
                <th className="py-3 px-6 border-b">Patent No/Application No</th>
                <th className="py-3 px-6 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {patents.map((patent, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors text-center">
                  <td className="py-4 px-6 border-b">{index + 1}</td>
                  <td className="py-4 px-6 border-b">{patent.name}</td>
                  <td className="py-4 px-6 border-b">{patent.title}</td>
                  <td className="py-4 px-6 border-b">{patent.patentNo}</td>
                  <td className="py-4 px-6 border-b">
                    <span
                      className={`px-4 py-2 rounded-full text-sm ${
                        patent.status === 'Granted' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                      }`}
                    >
                      {patent.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatentDetails;