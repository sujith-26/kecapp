import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaBook,
  FaChalkboardTeacher,
  FaClock,
  FaGraduationCap,
  FaSearch,
  FaFilter,
  FaUsers,
  FaUserCircle,
} from "react-icons/fa";
import IT from "./it";

// FacultyCard component
const FacultyCard = ({ faculty, onViewProfile }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
    <div className="relative">
      <img
        src={`data:image/jpeg;base64,${faculty.image}`}
        alt={faculty.name}
        className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/70 to-transparent" />
    </div>
    <div className="p-6 relative">
      <h3 className="text-xl font-bold text-royal-blue mb-2">{faculty.name}</h3>
      <p className="text-golden-yellow font-semibold mb-2">{faculty.position}</p>
      <div className="space-y-3 text-gray-600">
        <div className="flex items-center">
          <FaChalkboardTeacher className="w-5 h-5 mr-2 text-royal-blue" />
          <span>{faculty.specialization}</span>
        </div>
        <div className="flex items-center">
          <FaUserCircle className="w-5 h-5 mr-2 text-royal-blue" />
          <a href={faculty.email} className="hover:text-blue-600 hover:text-lg">Profile</a>
        </div>
      </div>
      
      <button
        onClick={() => onViewProfile(faculty)}
        className="mt-6 w-full bg-royal-blue text-white py-2 rounded-lg hover:bg-royal-blue/90 transition-colors duration-300"
      >
        View Profile
      </button>
    </div>
  </div>
);

// FacultyProfile component
const FacultyProfile = ({ faculty, onClose }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div className="sticky top-0 bg-royal-blue text-white z-10 p-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Faculty Profile</h2>
        <button onClick={onClose} className="text-white hover:text-golden-yellow">
          ✕
        </button>
      </div>
      <div className="p-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <img
              src={`data:image/jpeg;base64,${faculty.image}`}
              alt={faculty.name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-royal-blue mb-2">{faculty.name}</h1>
              <p className="text-xl text-golden-yellow font-semibold">{faculty.position}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-gray-600">
              <div className="flex items-center space-x-3">
                <FaChalkboardTeacher className="w-5 h-5 text-royal-blue" />
                <span>{faculty.specialization}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-royal-blue" />
                <span>{faculty.email}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
);

// FacultyStats component
const FacultyStats = ({ facultyCount, roleStats }) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
    <div className="bg-royal-blue text-gray-800 rounded-lg p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-800 opacity-80">Total Faculty</p>
          <h3 className="text-3xl font-bold">{facultyCount}</h3>
        </div>
        <FaUsers className="text-4xl opacity-50" />
      </div>
    </div>
    {Object.entries(roleStats).map(([role, count]) => (
      <div key={role} className="bg-white border-2 border-royal-blue rounded-lg p-4 shadow-lg">
        <p className="text-sm text-royal-blue">{role}</p>
        <h3 className="text-2xl font-bold text-royal-blue">{count}</h3>
      </div>
    ))}
  </div>
);

// FacultyDirectory component
const Faculty = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [facultyMembers, setFacultyMembers] = useState([]);

  // Fetch faculty data from the backend
  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await fetch("https://server-o4m9.onrender.com/api/faculty");
        const data = await response.json();
        setFacultyMembers(data);
      } catch (error) {
        console.error("Error fetching faculty data:", error);
      }
    };
    fetchFaculty();
  }, []);

  // Calculate role statistics
  const roleStats = facultyMembers.reduce((acc, faculty) => {
    acc[faculty.position] = (acc[faculty.position] || 0) + 1;
    return acc;
  }, {});

  const filteredFaculty = facultyMembers.filter((faculty) => {
    const matchesSearch =
      faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole ? faculty.position === filterRole : true;
    return matchesSearch && matchesRole;
  });

  const roles = [...new Set(facultyMembers.map((f) => f.position))];

  return (
    <div>
      <IT />
      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-royal-blue mb-4">Our Faculty Members</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet our distinguished faculty in the Department of Information Technology
            </p>
          </div>

          {/* Faculty Statistics */}
          <FacultyStats facultyCount={facultyMembers.length} roleStats={roleStats} />

          <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search by name or specialization..."
                className="w-full px-4 py-2 pl-10 border-2 border-royal-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-golden-yellow"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-royal-blue" />
            </div>

            <div className="relative">
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="w-full sm:w-48 px-4 py-2 pl-10 border-2 border-royal-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-golden-yellow appearance-none"
              >
                <option value="">All Roles</option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-royal-blue" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFaculty.map((faculty) => (
              <FacultyCard
                key={faculty._id}
                faculty={faculty}
                onViewProfile={() => setSelectedFaculty(faculty)}
              />
            ))}
          </div>

          {filteredFaculty.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No faculty members found matching your search criteria.
            </div>
          )}

          {selectedFaculty && (
            <FacultyProfile faculty={selectedFaculty} onClose={() => setSelectedFaculty(null)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Faculty;