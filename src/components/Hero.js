import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen pt-24 bg-gradient-to-b from-blue-50 to-white text-center px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
      >
        Empowering Data Engineers of Tomorrow
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl text-gray-600 max-w-2xl"
      >
        Live mentorship. Real-world projects. Guaranteed transformation.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 shadow"
      >
        Explore Courses
      </motion.button>
    </div>
  );
}

export default Hero;
