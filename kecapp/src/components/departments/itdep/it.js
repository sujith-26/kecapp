import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const IT = () => {



  return (
    <div>
      {/* Image Section with Overlay */}
      <section className="relative h-screen">
        <img
          src="https://timess3spore.s3.amazonaws.com/ndata/media/Counsellor/CollegeImage/2023/04/23/1682252094.png"
          alt="IT Department"
          className="w-full h-full object-cover"
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
            >
              Information Technology
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="bg-[#01013f] text-white py-3 overflow-hidden">
        <marquee behavior="scroll" direction="left" scrollamount="8" className="text-lg font-semibold">
          📢 Welcome to the Information Technology Department | Stay Updated with the Latest News | Upcoming Events & Webinars |
          Academic Achievements | Industry Collaborations | Innovation & Research Opportunities 🚀
        </marquee>
      </div>

      {/* Secondary Navbar */}
      <nav className="bg-gray-800 text-white py-2 shadow-lg">
        <ul className="flex flex-wrap justify-left space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 px-4">
          <li>
            <Link to="/departments/itdep/ithome" className="hover:bg-gray-700 px-3 py-2 rounded-md transition duration-300 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/departments/itdep/ithigh" className="hover:bg-gray-700 px-3 py-2 rounded-md transition duration-300 cursor-pointer">
              Highlights
            </Link>
          </li>
          <li>
          <Link to="/departments/itdep/facility_lib" className="hover:bg-gray-700 px-3 py-2 rounded-md transition duration-300 cursor-pointer">
              Facilities
            </Link>
          </li>
          <li>
            <Link to="/departments/itdep/itfac" className="hover:bg-gray-700 px-3 py-2 rounded-md transition duration-300 cursor-pointer">
              Faculty
            </Link>
          </li>
          <li>
            <Link to="/departments/itdep/itpat" className="hover:bg-gray-700 px-3 py-2 rounded-md transition duration-300 cursor-pointer">
              Patents
            </Link>
          </li>
          <li>
            <Link to="https://rnd.kongu.edu/academic/it.php" className="hover:bg-gray-700 px-3 py-2 rounded-md transition duration-300 cursor-pointer">
              R&D (Academic)
            </Link>
          </li>
          <li>
            <Link to="https://rnd.kongu.edu/activities/it/index.php" className="hover:bg-gray-700 px-3 py-2 rounded-md transition duration-300 cursor-pointer">
              R&D (Activities)
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default IT;
