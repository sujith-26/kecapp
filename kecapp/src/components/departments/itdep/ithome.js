import IT from "./it";
import { useState, useEffect } from "react";

const ITHome = () => {
  const [showPEOs, setShowPEOs] = useState(false);
  const [showPOs, setShowPOs] = useState(false);
  const [showPSOs, setShowPSOs] = useState(false);
  const [hodDetails, setHodDetails] = useState(null); // Store HOD details
  const [programmeDetails, setProgrammeDetails] = useState([]);
  const [visionDetails, setVisionDetails] = useState([]); // Store vision details
  const [missionDetails, setMissionDetails] = useState([]); // Store mission details
  const [peoDetails, setPEOsDetails] = useState([]); // Store PEOs details
  const [poDetails, setPOsDetails] = useState([]); // Store POs details
  const [psoDetails, setPSOsDetails] = useState([]); // Store PSOs details
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  // Fetch HOD details from the server
  useEffect(() => {
    const fetchHodDetails = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/hod');
        console.log("Response Status:", response.status); // Log response status
        if (!response.ok) {
          throw new Error('Failed to fetch HOD details');
        }
        const data = await response.json();
        console.log("Fetched HOD Details:", data); // Log the fetched data
        setHodDetails(data); // Set fetched HOD details in state
        setLoading(false); // Set loading to false once the data is fetched
      } catch (error) {
        console.error("Error fetching HOD details:", error); // Log error
        setError(error.message); // Set error message
        setLoading(false); // Set loading to false
      }
    };

    fetchHodDetails();
  }, []);

  // Fetch programme details from the server
  useEffect(() => {
    const fetchProgrammeDetails = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/programmes");
        if (!response.ok) {
          throw new Error("Failed to fetch programme details");
        }
        const data = await response.json();
        setProgrammeDetails(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProgrammeDetails();
  }, []);

  // Fetch vision details from the server
  useEffect(() => {
    const fetchVisionDetails = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/visions");
        if (!response.ok) {
          throw new Error("Failed to fetch vision details");
        }
        const data = await response.json();
        setVisionDetails(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchVisionDetails();
  }, []);

  // Fetch mission details from the server
  useEffect(() => {
    const fetchMissionDetails = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/missions");
        if (!response.ok) {
          throw new Error("Failed to fetch mission details");
        }
        const data = await response.json();
        setMissionDetails(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMissionDetails();
  }, []);

  // Fetch PEOs details from the server
  useEffect(() => {
    const fetchPEOsDetails = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/peos");
        if (!response.ok) {
          throw new Error("Failed to fetch PEOs details");
        }
        const data = await response.json();
        setPEOsDetails(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPEOsDetails();
  }, []);

  // Fetch POs details from the server
  useEffect(() => {
    const fetchPOsDetails = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/pos");
        if (!response.ok) {
          throw new Error("Failed to fetch POs details");
        }
        const data = await response.json();
        setPOsDetails(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPOsDetails();
  }, []);

  // Fetch PSOs details from the server
  useEffect(() => {
    const fetchPSOsDetails = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/psos");
        if (!response.ok) {
          throw new Error("Failed to fetch PSOs details");
        }
        const data = await response.json();
        setPSOsDetails(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPSOsDetails();
  }, []);

  return (
    <div>
      <IT />

      {/* Head of the Department Section */}
      <section className="bg-blue-100 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Head of the Department</h2>
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
      {/* Conditionally render HOD image and details if data is available */}
      {hodDetails && hodDetails.image ? (
        <img
          src={`data:image/jpeg;base64,${hodDetails.image}`}  
          alt="HOD"
          className="w-32 h-32 rounded-full object-cover"
        />
      ) : (
        <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}

      <div className="text-center md:text-left">
        {/* Display fetched HOD details */}
        {loading ? (
          <p className="text-gray-600">Loading HOD details...</p>
        ) : error ? (
          <p className="text-red-600">Error: {error}</p> 
        ) : hodDetails ? (
          <>
            <h3 className="text-2xl font-semibold text-gray-900">{hodDetails.name}</h3>
            <p className="text-gray-600">{hodDetails.position}</p>
            <p className="text-gray-600">Email: {hodDetails.email}</p>
            <p className="text-gray-600">Phone: {hodDetails.phone}</p>
          </>
        ) : (
          <p className="text-gray-600">HOD details not available.</p>
        )}
      </div>
    </div>
  </div>
</section>


      {/* Programme Offered Section */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Programme Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmeDetails.map((programme) => (
              <div key={programme._id} className="bg-[#01013f] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-white mb-4">{programme.name}</h3>
                <p className="text-white">{programme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-blue-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#01013f] mb-4">Vision</h3>
              {loading ? (
                <p className="text-gray-600">Loading vision...</p>
              ) : error ? (
                <p className="text-red-600">Error: {error}</p>
              ) : visionDetails.length > 0 ? (
                <ul className="list-decimal list-inside text-gray-600 text-lg">
                  {visionDetails.map((vision, index) => (
                    <li key={index}>{vision.vision}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No vision available.</p>
              )}
            </div>

            {/* Mission Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#01013f] mb-4">Mission</h3>
              {loading ? (
                <p className="text-gray-600">Loading mission...</p>
              ) : error ? (
                <p className="text-red-600">Error: {error}</p>
              ) : missionDetails.length > 0 ? (
                <ul className="list-disc list-inside text-gray-600 text-lg">
                  {missionDetails.map((mission, index) => (
                    <li key={index}>{mission.mission}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No mission available.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PEOs, POs, and PSOs Section */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Program Educational Objectives (PEOs), Program Outcomes (POs), and Program Specific Outcomes (PSOs)</h2>

          {/* PEOs Section */}
          <div className="mb-8">
            <button
              onClick={() => setShowPEOs(!showPEOs)}
              className="w-full text-center bg-[#01013f] text-white p-4 rounded-lg focus:outline-none"
            >
              <h3 className="text-xl font-semibold">Program Educational Objectives (PEOs)</h3>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                showPEOs ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="bg-blue-200 p-6 rounded-b-lg text-lg">
                <ul className="list-disc list-inside text-gray-900 text-lg">
                  {peoDetails.map((peo, index) => (
                    <div>
                    <li key={index}>{peo.peo}</li><br></br>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* POs Section */}
          <div className="mb-8">
            <button
              onClick={() => setShowPOs(!showPOs)}
              className="w-full text-center bg-[#01013f] text-white p-4 rounded-lg focus:outline-none"
            >
              <h3 className="text-xl font-semibold">Program Outcomes (POs)</h3>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                showPOs ? "block" : "hidden"
              }`}
            >
              <div className="bg-blue-200 p-6 rounded-b-lg text-lg">
                <ul className="list-disc list-inside text-gray-900 text-lg">
                  {poDetails.map((po, index) => (
                    <div>
                    <li key={index}>{po.po}</li><br></br>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* PSOs Section */}
          <div className="mb-8">
            <button
              onClick={() => setShowPSOs(!showPSOs)}
              className="w-full text-center bg-[#01013f] text-white p-4 rounded-lg focus:outline-none"
            >
              <h3 className="text-xl font-semibold">Program Specific Outcomes (PSOs)</h3>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                showPSOs ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="bg-blue-200 p-6 rounded-b-lg text-lg">
                <ul className="list-disc list-inside text-gray-900 text=lg">
                  {psoDetails.map((pso, index) => (
                    <div>
                    <li key={index}>{pso.pso}</li><br></br>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITHome;