import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cert1 from '../assets/cert1.png';
import cert2 from '../assets/cert2.png';
import cert3 from '../assets/cert3.png';
import cert4 from '../assets/cert4.png';
import cert5 from '../assets/cert5.png';
import cert6 from '../assets/cert6.png';
import mentorPhoto from '../assets/your-photo.jpg';
import { motion, AnimatePresence } from 'framer-motion';

function AboutPage() {
  const badgeList = [cert1, cert2, cert3, cert4, cert5, cert6];
  const [currentBadge, setCurrentBadge] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentBadge((prev) => (prev + 1) % badgeList.length);
      }, 2000);
      return () => clearInterval(interval);
    });

  const testimonials = [
    {
      name: 'Karthik Reddy',
      quote: 'Sri Vyra gave me the clarity I was missing in my career. The mock interviews and mentorship helped me land a cloud data engineering role.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Sowmya P',
      quote: 'After a break in my career, I regained confidence through structured learning and regular feedback sessions at Sri Vyra.',
      image: 'https://randomuser.me/api/portraits/women/45.jpg'
    },
    {
      name: 'Rahul T',
      quote: 'Every topic is taught in a way that aligns with real company requirements. No fluff, only focused outcomes.',
      image: 'https://randomuser.me/api/portraits/men/41.jpg'
    },
  ];

  const timeline = [
    { phase: 'Phase 1', desc: 'Foundations: Python, SQL, Linux, Git' },
    { phase: 'Phase 2', desc: 'Big Data Stack: Hadoop, Hive, Spark, Kafka' },
    { phase: 'Phase 3', desc: 'Cloud Engineering: AWS, Azure, GCP' },
    { phase: 'Phase 4', desc: 'Job Preparation: Mock Interviews, Resume, Support' },
  ];

  return (
    <div className="bg-white text-gray-900 font-inter">
      <section className="text-center py-20 px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Sri Vyra
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Where Learning is a Discipline, Not a Shortcut.
        </motion.p>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To build a value-first, learner-centric ecosystem where commitment meets opportunity. We envision Sri Vyra as a trusted academy that nurtures not just coders, but thinkers — individuals with clarity, courage, and character — ready to take on the tech world with responsibility and resilience.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To empower learners — from freshers and working professionals to those restarting after a career break — with the technical depth, mindset, and mentorship required to become top-tier data professionals — across roles like Data Engineer, Big Data Engineer, Hadoop Specialist, and Cloud Data Engineers on AWS, Azure, and GCP.
          </p>
        </motion.div>
      </section>

      {/* Why Sri Vyra */}
      <section className="py-20 px-6 text-center">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Sri Vyra Exists
        </motion.h2>
        <motion.div
          className="max-w-4xl mx-auto space-y-6 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p>
            We believe that true growth happens through disciplined learning, clear direction, and purpose-driven transformation. Most online programs focus only on tools — we go deeper, nurturing real-world clarity and career readiness.
          </p>
          <p>
            From mock interviews to hands-on mentorship, Sri Vyra equips you not just to land a job, but to grow into a confident, resilient professional.
          </p>
        </motion.div>
      </section>

      {/* Mentor Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div className="flex justify-center" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <img
            src={mentorPhoto}
            alt="Rupesh Phanindra Sai"
            className="rounded-full w-64 h-64 object-cover object-top shadow-xl"
          />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-4">Meet Your Mentor</h2>
          <p className="text-gray-700 mb-3 leading-relaxed">
            I'm Rupesh Phanindra Sai — a data engineering mentor focused on building long-term tech careers. I've worked hands-on with Hadoop, Spark, AWS, and scalable pipelines across enterprise systems.
          </p>
          <p className="text-gray-700 leading-relaxed">
            My passion lies not just in solving data problems, but mentoring others to approach them with confidence, discipline, and real-world clarity — that's the soul behind Sri Vyra.
          </p>
        </motion.div>
      </section>

      {/* Animated Badge Show One By One */}
      <section className="py-16 flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentBadge}
            src={badgeList[currentBadge]}
            alt={`Badge ${currentBadge}`}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="h-28 w-auto"
          />
        </AnimatePresence>
      </section>

      {/* Student Testimonials - With Slide and Scroll */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <motion.h2 className="text-3xl font-bold mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          What Our Students Say
        </motion.h2>
        <div className="overflow-x-auto">
          <div className="flex gap-6 px-4 py-2 w-max animate-scroll-testimonials hover:pause">
            {testimonials.concat(testimonials).map((t, i) => (
              <motion.div
                key={i}
                className="min-w-[280px] max-w-xs bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <img src={t.image} alt={t.name} className="w-14 h-14 mx-auto rounded-full mb-4" />
                <p className="italic text-gray-700 mb-3">“{t.quote}”</p>
                <p className="font-semibold text-blue-600">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Timeline */}
      <section className="py-20 px-6 text-center">
        <motion.h2 className="text-3xl font-bold mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          Program Timeline
        </motion.h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-left">
          {timeline.map((t, i) => (
            <motion.div
              key={i}
              className="p-5 border-l-4 border-blue-600 bg-white shadow-sm rounded-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{t.phase}</h3>
              <p className="text-gray-600 text-sm">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16 px-6 text-center">
        <motion.h2 className="text-2xl font-bold mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          Ready to Start Your Journey?
        </motion.h2>
        <motion.p className="mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Join a learning path that’s clear, confident, and backed by mentorship.
        </motion.p>
        <motion.div className="flex justify-center gap-4 flex-wrap" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <Link
            to="/courses"
            className="bg-white text-black font-medium py-2 px-6 rounded-full hover:bg-gray-200 transition"
          >
            View Courses
          </Link>
          <a
            href="https://wa.me/918712395259"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full font-medium"
          >
            Chat on WhatsApp
          </a>
        </motion.div>
      </section>

      {/* Custom Scroll Animation */}
      <style>
        {`
          .animate-scroll-testimonials {
            animation: scrollTestimonials 30s linear infinite;
          }
          .animate-scroll-testimonials:hover {
            animation-play-state: paused;
          }
          @keyframes scrollTestimonials {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
}

export default AboutPage;