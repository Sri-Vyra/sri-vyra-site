import { motion } from 'framer-motion';

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-sm bg-white fixed top-0 left-0 right-0 z-50">
      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-blue-600"
      >
        Sri Vyra
      </motion.h1>

      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li><a href="#">Home</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Mentorship</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <motion.button
        whileHover={{ scale: 1.05 }}
        className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold shadow hover:bg-blue-700 transition-all"
      >
        Apply Now
      </motion.button>
    </nav>
  );
}

export default Navbar;
