// === src/pages/HomePage.js ===
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { collection, query, where, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import mentorPhoto from '../assets/your-photo.jpg';
import pipelineGif from '../assets/pipeline.gif';

const HomePage = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const q = query(
          collection(db, "posts"),
          where("type", "==", "announcement"),
          orderBy("createdAt", "desc"),
          limit(5)
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAnnouncements(data);
      } catch (err) {
        console.error("Error fetching announcements:", err);
      }
    };
    fetchAnnouncements();
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-4 bg-white h-[85vh] pt-16 md:pt-24 lg:pt-28 -mt-20 mb-20">
        
        {/* Optional: Top announcement (kept if needed) */}
        {announcements.length > 0 && (
          <div className="bg-yellow-100 text-center py-2 w-full rounded-full mb-4">
            {announcements[0].text}
          </div>
        )}

        {/* Left: Text Content */}
        <div className="max-w-xl md:w-1/2 flex flex-col justify-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Empowering <span className="text-blue-600">Data Engineers</span> of Tomorrow
          </motion.h1>

          <motion.p
            className="mt-2 text-lg md:text-xl text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Data is the new oil. Learn real skills from real mentors. Build projects. Transform your career with Sri Vyra.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              to="/courses"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition"
            >
              Explore Courses
            </Link>
            <Link
              to="/register"
              className="bg-white border border-gray-300 text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Join Now
            </Link>
          </motion.div>
        </div>

        {/* Right: Pipeline GIF */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={pipelineGif}
            alt="Data Pipeline Animation"
            className="w-full max-w-[800px] h-auto"
          />
        </motion.div>
      </section>
      

      {/* === 3️⃣ Courses Preview === */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Our Courses
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Elite Track",
              img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
              desc: "Comprehensive training from basics to advanced concepts.",
              link: "/courses/elite",
            },
            {
              title: "Premium Track",
              img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
              desc: "Premium-level mentorship with job assistance.",
              link: "/courses/premium",
            },
            {
              title: "Mentorship Track",
              img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
              desc: "Personalized guidance to accelerate your career.",
              link: "/courses/mentorship",
            },
          ].map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.desc}</p>
                <Link
                  to={course.link}
                  className="text-yellow-500 font-semibold hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/courses"
            className="bg-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            View All Courses
          </Link>
        </div>
      </section>

      {/* === 4️⃣ Practice Section === */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Test Your Skills</h2>
          <p className="text-gray-600 mb-8">
            Want to try a Python problem? Or challenge yourself with real interview questions?  
            Start practicing now with our Knowledge Hub.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/practice/python"
              className="bg-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Try Python Problems
            </Link>
            <Link
              to="/practice"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
            >
              Explore Knowledge Hub
            </Link>
          </div>
        </div>
      </section>

      {/* === 5️⃣ Registration Prompt === */}
      <section className="py-16 px-6 md:px-20 bg-yellow-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to start your journey?</h2>
        <p className="text-gray-700 mb-6">
          Secure your seat for the upcoming batch and take the first step towards your dream career.
        </p>
        <Link
          to="/register"
          className="bg-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Register Now
        </Link>
      </section>

      {/* === 6️⃣ About Section === */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text first, image second */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Sri Vyra</h2>
            <p className="text-gray-700 mb-4 content-center">
              Led by mentor Rupesh Phanindra Sai Ande, Sri Vyra has helped 1000+ students
              secure top jobs in the tech industry through expert guidance, practical
              learning, and career support.
            </p>
            <Link
              to="/about"
              className="text-yellow-500 font-semibold hover:underline"
            >
              Know More About Us →
            </Link>
          </div>

          {/* Image pushed right */}
          <div className="flex justify-center md:justify-end pr-12">
            <div className="w-64 h-64 rounded-full shadow-lg overflow-hidden">
              <img
                src={mentorPhoto}
                alt="Mentor"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* === 7️⃣ Contact Section === */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Get in Touch</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-lg">
          <a
            href="https://wa.me/918712395259"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-green-600 hover:underline"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            href="mailto:contact@sri-vyra.com"
            className="flex items-center gap-3 text-blue-600 hover:underline"
          >
            <FaEnvelope /> srivyra@gmail.com
          </a>
          <a
            href="tel:+919876543210"
            className="flex items-center gap-3 text-gray-800 hover:underline"
          >
            <FaPhoneAlt /> +91 87123 95259
          </a>
          <div className="flex items-center gap-3 text-red-600">
            <FaMapMarkerAlt /> Hyderabad, India
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
