import IT from "./it";
import { useState } from "react";

const ITHome = () => {
  const [showPEOs, setShowPEOs] = useState(false);
  const [showPOs, setShowPOs] = useState(false);
  const [showPSOs, setShowPSOs] = useState(false);

  return (
    <div>
      <IT />

      {/* Head of the Department Section */}
      <section className="bg-blue-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Head of the Department</h2>
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
            <img
              src=""
              alt="HOD"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-900">Dr.S.Anandamurugan</h3>
              <p className="text-gray-600">Professor & Head of Department</p>
              <p className="text-gray-600">Email: john.doe@example.com</p>
              <p className="text-gray-600">Phone: +123 456 7890</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Offered Section */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Programme Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#01013f] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white mb-4">Bachelor of Information Technology (B.Tech)</h3>
              <p className="text-white">4 Years Full-Time Programme</p>
            </div>
            <div className="bg-[#01013f] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white mb-4">Master of Information Technology (M.Tech)</h3>
              <p className="text-white">2 Years Full-Time Programme</p>
            </div>
            <div className="bg-[#01013f] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white mb-4">Ph.D.</h3>
              <p className="text-white">Research Programme</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-blue-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#01013f] mb-4">Vision</h3>
              <p className="text-gray-600">
                To be a centre of excellence for development and dissemination of knowledge in Information Technology for the nation and beyond
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#01013f] mb-4">Mission</h3>
              <p className="text-gray-600">
                1. To transform the students into innovative, competent and high quality IT professionals to meet the growing global challenges
              </p>
              <br />
              <p className="text-gray-600">
                2. To impart value-based IT education to the students and enrich their knowledge
              </p>
              <br />
              <p className="text-gray-600">
                3. To endeavour for continuous upgradation of technical expertise of students to cater to the needs of the society
              </p>
              <br />
              <p className="text-gray-600">
                4. To achieve an effective interaction with industry for mutual benefits
              </p>
              <br />
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
                <ul className="list-disc list-inside text-gray-900">
                  <li>PEO1: Excel in industry and higher education by applying fundamental knowledge in engineering principles.</li><br></br>
                  <li>PEO2: Analyze, design and implement Information Technology based solutions to meet the real world problems..</li><br></br>
                  <li>PEO3: Exhibit Soft skills, Professional and Ethical values and thrust for continuous learning for a successful professional career..</li><br></br>
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
                showPOs ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="bg-blue-200 p-6 rounded-b-lg text-lg">
                <ul className="list-disc list-inside text-gray-900">
                  {Array.from({ length: 12 }, (_, i) => (
                    <div>
                    <li key={i}>PO {i + 1}: Description of Program Outcome {i + 1}</li>
                    </div>
                  ))}
                  <br></br>
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
                <ul className="list-disc list-inside text-gray-900">
                  <li>PSO1 Foundations of IT: Comprehend mathematical and computational methodologies to address the problems of various domains.</li><br></br>

                  <li>PSO2 Providing IT solutions: Analyze, design and implement IT enabled solutions to meet industrial needs using appropriate tools and techniques.</li>
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