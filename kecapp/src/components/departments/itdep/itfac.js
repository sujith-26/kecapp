import React, { useState } from "react";
import {
  FaEnvelope,
  FaBook,
  FaChalkboardTeacher,
  FaClock,
  FaGraduationCap,
  FaSearch,
  FaFilter,
  FaUsers,
} from "react-icons/fa";
import IT from "./it";

// Faculty data
const facultyMembers = [
    {
        id: 1,
        name: "Dr. S. Anandamurugan",
        role: "Professor & Head",
        department: "Information Technology",
        email: "anand.it@example.com",
        specialization: "Computer Networks & Security",
        education: "Ph.D in Computer Science",
        experience: "15+ years",
        imageUrl: "/placeholder.svg?height=400&width=400",
        researchAreas: ["Network Security", "Cloud Computing", "IoT"],
      },
      {
        id: 2,
        name: "Dr. S. Varadhaganapathy",
        role: "Associate Professor",
        department: "Information Technology",
        email: "varadha.it@example.com",
        specialization: "Data Science & Analytics",
        education: "Ph.D in Information Technology",
        experience: "12+ years",
        imageUrl: "/placeholder.svg?height=400&width=400",
        researchAreas: ["Machine Learning", "Big Data", "Data Mining"],
      },
      {
        id: 3,
        name: "Dr. J. Premalatha",
        role: "Associate Professor",
        department: "Information Technology",
        email: "prema.it@example.com",
        specialization: "Artificial Intelligence",
        education: "Ph.D in Computer Science",
        experience: "10+ years",
        imageUrl: "/placeholder.svg?height=400&width=400",
        researchAreas: ["AI", "Neural Networks", "Deep Learning"],
      },
      {
        id: 4,
        name: "Dr. G. K. Kamalam",
        role: "Associate Professor",
        department: "Information Technology",
        email: "kamalam.it@example.com",
        specialization: "Software Engineering",
        education: "Ph.D in Information Technology",
        experience: "11+ years",
        imageUrl: "/placeholder.svg?height=400&width=400",
        researchAreas: ["Software Testing", "Agile Methods", "DevOps"],
      },
      {
        id: 5,
        name: "Dr. T. Abirami",
        role: "Assistant Professor",
        department: "Information Technology",
        email: "abirami.it@example.com",
        specialization: "Web Technologies",
        education: "Ph.D in Computer Science",
        experience: "8+ years",
        imageUrl: "/placeholder.svg?height=400&width=400",
        researchAreas: ["Web Security", "Full Stack Development", "UI/UX"],
      },
      {
        id: 6,
        name: "Dr. R. Shanthakumari",
        role: "Assistant Professor",
        department: "Information Technology",
        email: "shantha.it@example.com",
        specialization: "Database Management Systems",
        education: "Ph.D in Information Technology",
        experience: "9+ years",
        imageUrl: "/placeholder.svg?height=400&width=400",
        researchAreas: ["Data Warehousing", "NoSQL Databases", "Data Modeling"],
      },
      {
        id: 7,
        name: "Dr. E. M. Roopa Devi",
        role: "Assistant Professor",
        department: "Information Technology",
        email: "roopa.it@example.com",
        specialization: "Image Processing",
        education: "Ph.D in Computer Science",
        experience: "7+ years",
        imageUrl: "/placeholder.svg?height=400&width=400",
        researchAreas: ["Computer Vision", "Pattern Recognition", "Digital Image Analysis"],
      },
      {
        id: 8,
        name: "D. Vijay Anand",
        role: "Assistant Professor",
        department: "Information Technology",
        email: "vijay.it@example.com",
        specialization: "Mobile Computing",
        education: "M.Tech in Information Technology",
        experience: "6+ years",
        imageUrl: "/placeholder.svg?height=400&width=400",
        researchAreas: ["Mobile App Development", "Wireless Networks", "IoT"],
      },
      {
        id: 9,
        name: "S. Vinothkumar",
        role: "Assistant Professor",
        department: "Information Technology",
        email: "vinoth.it@example.com",
        specialization: "Cryptography",
        education: "M.Tech in Computer Science",
        experience: "5+ years",
        imageUrl: "/placeholder.svg?height=400&width=400",
        researchAreas: ["Information Security", "Blockchain", "Cyber Security"],
      },
      {
        id: 10,
        name: "A. P. Ponselvakumar",
        role: "Assistant Professor",
        department: "Information Technology",
        email: "ponselva.it@example.com",
        specialization: "Cloud Computing",
        education: "M.Tech in Information Technology",
        experience: "4+ years",
        imageUrl: "/placeholder.svg?height=400&width=400",
        researchAreas: ["Distributed Systems", "Virtualization", "Cloud Security"],
      },
      {
        id: 11,
        name: "A. Jeevanantham",
        role: "Assistant Professor",
        department: "Information Technology",
        email: "jeeva.it@example.com",
        specialization: "Natural Language Processing",
        education: "M.Tech in Computer Science",
        experience: "3+ years",
        imageUrl: "/placeholder.svg?height=400&width=400",
        researchAreas: ["Text Mining", "Sentiment Analysis", "Machine Translation"],
      },
      {
        id: 12,
        name: "V. Devisurya",
        role: "Assistant Professor",
        department: "Information Technology",
        email: "devisurya.it@example.com",
        specialization: "Internet of Things",
        education: "M.Tech in Information Technology",
        experience: "3+ years",
        imageUrl: "/placeholder.svg?height=400&width=400",
        researchAreas: ["Smart Systems", "Embedded Systems", "IoT Security"],
      },
      {
        id: 13,
        name: "R. Aarthi",
        role: "Assistant Professor",
        department: "Information Technology",
        email: "aarthi.it@example.com",
        specialization: "Human-Computer Interaction",
        education: "M.Tech in Computer Science",
        experience: "2+ years",
        imageUrl: "/placeholder.svg?height=400&width=400",
        researchAreas: ["User Experience Design", "Accessibility", "Interaction Design"],
      },
      {
        id: 14,
        name: "K. Sruthi",
        role: "Assistant Professor",
        department: "Information Technology",
        email: "sruthi.it@example.com",
        specialization: "Data Analytics",
        education: "M.Tech in Information Technology",
        experience: "3+ years",
        imageUrl: "/placeholder.svg?height=400&width=400",
        researchAreas: ["Data Visualization", "Statistical Analysis", "Business Intelligence"],
      },
      {
        id: 15,
        name: "S. Kavithra",
        role: "Assistant Professor",
        department: "Information Technology",
        email: "kavithra.it@example.com",
        specialization: "Software Engineering",
        education: "M.Tech in Computer Science",
        experience: "4+ years",
        imageUrl: "/placeholder.svg?height=400&width=400",
        researchAreas: ["Software Architecture", "Quality Assurance", "Project Management"],
      },
      {
        id: 16,
        name: "R. Sandhiya",
        role: "Assistant Professor",
        department: "Information Technology",
        email: "sandhiya.it@example.com",
        specialization: "Web Development",
        education: "M.Tech in Information Technology",
        experience: "3+ years",
        imageUrl: "/placeholder.svg?height=400&width=400",
        researchAreas: ["Frontend Development", "Web Security", "Progressive Web Apps"],
      },
      {
        id: 17,
        name: "V. P. Gayathri",
        role: "Assistant Professor",
        department: "Information Technology",
        email: "gayathri.it@example.com",
        specialization: "Mobile Computing",
        education: "M.Tech in Computer Science",
        experience: "2+ years",
        imageUrl: "/placeholder.svg?height=400&width=400",
        researchAreas: ["Mobile App Development", "Cross-platform Development", "UI/UX Design"],
      },
      {
        id: 18,
        name: "P. Vanitha",
        role: "Assistant Professor",
        department: "Information Technology",
        email: "vanitha.it@example.com",
        specialization: "Database Systems",
        education: "M.Tech in Information Technology",
        experience: "3+ years",
        imageUrl: "/placeholder.svg?height=400&width=400",
        researchAreas: ["Database Design", "Query Optimization", "Data Security"],
      },
      {
        id: 19,
        name: "A. Deenu Mol",
        role: "Assistant Professor",
        department: "Information Technology",
        email: "deenu.it@example.com",
        specialization: "Computer Networks",
        education: "M.Tech in Computer Science",
        experience: "2+ years",
        imageUrl: "/placeholder.svg?height=400&width=400",
        researchAreas: ["Network Security", "Protocol Design", "Wireless Networks"],
      },
      {
        id: 20,
        name: "Dr. S. Subashini",
        role: "Associate Professor",
        department: "Information Technology",
        email: "subashini.it@example.com",
        specialization: "Cloud Computing",
        education: "Ph.D in Information Technology",
        experience: "8+ years",
        imageUrl: "/placeholder.svg?height=400&width=400",
        researchAreas: ["Cloud Security", "Distributed Systems", "Virtualization"],
      },
      {
        id: 21,
        name: "T. Vaishnavi",
        role: "Assistant Professor",
        department: "Information Technology",
        email: "vaishnavi.it@example.com",
        specialization: "Machine Learning",
        education: "M.Tech in Computer Science",
        experience: "2+ years",
        imageUrl: "/placeholder.svg?height=400&width=400",
        researchAreas: ["Deep Learning", "Neural Networks", "Pattern Recognition"],
      },
      {
        id: 22,
        name: "S. Krishnaveni",
        role: "Assistant Professor",
        department: "Information Technology",
        email: "krishnaveni.it@example.com",
        specialization: "Information Security",
        education: "M.Tech in Information Technology",
        experience: "3+ years",
        imageUrl: "/placeholder.svg?height=400&width=400",
        researchAreas: ["Cryptography", "Network Security", "Cyber Security"],
      },
      {
        id: 23,
        name: "Dr. C. Chellappan",
        role: "Professor",
        department: "Information Technology",
        email: "chellappan.it@example.com",
        specialization: "Artificial Intelligence",
        education: "Ph.D in Computer Science",
        experience: "20+ years",
        imageUrl: "/placeholder.svg?height=400&width=400",
        researchAreas: ["AI", "Machine Learning", "Expert Systems"],
      },
  // Add other faculty members here (as provided in your original code)
];

// FacultyCard component
const FacultyCard = ({ faculty, onViewProfile }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
    <div className="relative">
      <img
        src={faculty.imageUrl || "/placeholder.svg"}
        alt={faculty.name}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/70 to-transparent" />
    </div>
    <div className="p-6 relative">
      <h3 className="text-xl font-bold text-royal-blue mb-2">{faculty.name}</h3>
      <p className="text-golden-yellow font-semibold mb-2">{faculty.role}</p>
      <div className="space-y-3 text-gray-600">
        <div className="flex items-center">
          <FaChalkboardTeacher className="w-5 h-5 mr-2 text-royal-blue" />
          <span>{faculty.specialization}</span>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="w-5 h-5 mr-2 text-royal-blue" />
          <span>{faculty.email}</span>
        </div>
        <div className="flex items-center">
          <FaBook className="w-5 h-5 mr-2 text-royal-blue" />
          <span>{faculty.publications} Publications</span>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {faculty.researchAreas.map((area, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-golden-yellow text-royal-blue rounded-full text-sm font-medium"
          >
            {area}
          </span>
        ))}
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
              src={faculty.imageUrl || "/placeholder.svg"}
              alt={faculty.name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-royal-blue mb-2">{faculty.name}</h1>
              <p className="text-xl text-golden-yellow font-semibold">{faculty.role}</p>
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
              <div className="flex items-center space-x-3">
                <FaGraduationCap className="w-5 h-5 text-royal-blue" />
                <span>{faculty.education}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaClock className="w-5 h-5 text-royal-blue" />
                <span>{faculty.experience}</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-royal-blue">Research Areas</h3>
              <div className="flex flex-wrap gap-2">
                {faculty.researchAreas.map((area, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-golden-yellow text-royal-blue rounded-full text-sm font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-royal-blue">Publications</h3>
              <div className="flex items-center space-x-3 text-gray-600">
                <FaBook className="w-5 h-5 text-royal-blue" />
                <span>{faculty.publications} Research Publications</span>
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
    <div className="bg-royal-blue text-white rounded-lg p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm opacity-80">Total Faculty</p>
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

  // Calculate role statistics
  const roleStats = facultyMembers.reduce((acc, faculty) => {
    acc[faculty.role] = (acc[faculty.role] || 0) + 1;
    return acc;
  }, {});

  const filteredFaculty = facultyMembers.filter((faculty) => {
    const matchesSearch =
      faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole ? faculty.role === filterRole : true;
    return matchesSearch && matchesRole;
  });

  const roles = [...new Set(facultyMembers.map((f) => f.role))];

  return (
    <div>
        <IT/>
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
              key={faculty.id}
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