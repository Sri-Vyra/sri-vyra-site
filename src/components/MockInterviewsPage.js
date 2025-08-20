import React from "react";
import { motion } from "framer-motion";
import { Calendar, Video, FileText, Users } from "lucide-react";

const MockInterviewsPage = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Flexible Scheduling",
      desc: "Book your mock interview slots based on your availability.",
    },
    {
      icon: <Video className="w-8 h-8 text-primary" />,
      title: "Live Online Sessions",
      desc: "Practice with mentors in a real-time, interview-like setup.",
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Detailed Feedback",
      desc: "Get structured feedback to improve technical and soft skills.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Peer Review",
      desc: "Option to practice in small groups for collaborative learning.",
    },
  ];

  return (
    <div className="min-h-screen bg-cream font-body text-navy">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <motion.h1
          className="text-4xl font-display font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Mock Interviews at <span className="text-primary">Sri Vyra</span>
        </motion.h1>
        <p className="text-lg text-navy/80 max-w-2xl mx-auto">
          Prepare for success with realistic interview simulations, expert
          guidance, and actionable feedback.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-16 py-12">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center border border-accent"
          >
            {f.icon}
            <h3 className="mt-4 text-xl font-semibold font-display">
              {f.title}
            </h3>
            <p className="mt-2 text-sm text-navy/70">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white text-center py-16 px-6">
        <h2 className="text-3xl font-display font-bold mb-4">
          Ready to Ace Your Interviews?
        </h2>
        <p className="mb-6 max-w-xl mx-auto">
          Book your slot today and start practicing with experienced mentors who
          know exactly what top companies expect.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-primary font-semibold px-6 py-3 rounded-full shadow-md hover:bg-accent hover:text-navy transition"
        >
          Book a Mock Interview
        </motion.button>
      </section>
    </div>
  );
};

export default MockInterviewsPage;
