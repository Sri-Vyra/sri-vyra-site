import { FaChalkboardTeacher, FaProjectDiagram, FaUserCheck, FaClock } from 'react-icons/fa';

function WhyVyra() {
  const features = [
    {
      icon: <FaChalkboardTeacher className="text-3xl text-blue-600" />,
      title: 'Real Mentors',
      description: 'Every batch is mentored by real industry engineers — no random trainers.',
    },
    {
      icon: <FaProjectDiagram className="text-3xl text-blue-600" />,
      title: 'Project-First Approach',
      description: 'Learn by doing — real projects, real skills, real results.',
    },
    {
      icon: <FaUserCheck className="text-3xl text-blue-600" />,
      title: 'Personal Guidance',
      description: 'Doubt-clearing, resume reviews, mock interviews — we walk with you.',
    },
    {
      icon: <FaClock className="text-3xl text-blue-600" />,
      title: 'Flexible Batches',
      description: 'Weekend, Weekday or Hybrid — choose what fits your life.',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20 px-4 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Why Sri Vyra?
      </h2>
      <div className="grid gap-8 md:grid-cols-4 text-center">
        {features.map((f, i) => (
          <div key={i} data-aos="fade-up" className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-all">
            <div className="mb-4">{f.icon}</div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyVyra;
