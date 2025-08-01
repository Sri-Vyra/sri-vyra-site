import { motion } from 'framer-motion';

const courseData = [
  {
    title: 'Data Engineering Elite',
    description: 'Designed for freshers and serious career builders — intense and immersive.',
  },
  {
    title: 'Premium Career Switch',
    description: 'Perfect for working professionals stuck in the wrong role — switch to Data Engineering.',
  },
  {
    title: 'Career Gap to Comeback',
    description: 'Reignite your career after a break with confidence, structure, and mentorship.',
  },
];

function Courses() {
  return (
    <section className="bg-white py-20 px-4 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Our Signature Programs
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {courseData.map((course, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            data-aos="fade-up"
            className="bg-blue-50 rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
              Know More
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
