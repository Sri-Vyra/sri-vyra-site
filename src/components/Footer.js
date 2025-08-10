import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../assets/logo1.png';
import { Link } from 'react-router-dom';

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;

    const message = `New Inquiry from Sri Vyra Website:\n
Name: ${firstName} ${lastName}
Phone: ${phone}
Email: ${email}`;

    const whatsappURL = `https://wa.me/918712395259?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <footer className="bg-white text-gray-800 px-6 md:px-12 py-16 border-t border-gray-200">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-x-10 gap-y-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Title & Pages */}
        <motion.div
          className="flex flex-col justify-center space-y-6 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <img src={logo} alt="Sri Vyra Logo" className="w-10 h-10 object-contain" />
              <h2 className="text-2xl font-bold">Sri Vyra Tech</h2>
            </div>
            <p className="text-sm text-gray-600 italic">
              Where Learning is a Discipline, Not a Shortcut.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Pages</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>
                <Link to="/" className="hover:text-blue-600 transition">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-blue-600 transition">Courses</Link>
              </li>
              <li>
                <Link to="/practice" className="hover:text-blue-600 transition">Practice</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600 transition">About</Link>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          className="flex flex-col justify-center items-center md:items-start space-y-6 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 text-blue-600" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-start gap-2">
                <FaPhoneAlt className="mt-1 text-blue-600" />
                <span>+91 8712395259</span>
              </div>
              <div className="flex items-start gap-2">
                <FaEnvelope className="mt-1 text-blue-600" />
                <span>srivyra@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <FaEnvelope className="mt-1 text-blue-600" />
                <span>srivyra@outlook.com</span>
              </div>
              <div className="flex items-start gap-2">
                <FaWhatsapp className="mt-1 text-blue-600" />
                <a href="https://wa.me/918712395259" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                  Chat on WhatsApp
                </a>
              </div>
              <div className="flex items-start gap-2">
                <FaInstagram className="mt-1 text-blue-600" />
                <a href="https://instagram.com/srivyra.tech" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                  @srivyra.tech
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          className="flex flex-col justify-center space-y-4 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
          <p className="text-sm text-gray-600">
            At Sri Vyra, our mission is to empower learners — from freshers and working professionals to those restarting after a career break — with the technical depth, mindset, and mentorship required to become top-tier data professionals.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          className="flex flex-col justify-center space-y-4 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
          <p className="text-sm text-gray-600">
            To build a value-first, learner-centric ecosystem where commitment meets opportunity. We envision Sri Runa Vyra as a trusted academy nurturing not just coders, but thinkers — ready to take on the tech world.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-md font-semibold">Contact Us</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: '#2563eb' }}
              transition={{ duration: 0.2 }}
              name="firstName"
              type="text"
              placeholder="First Name *"
              required
              className="w-full border-b border-gray-400 focus:border-blue-500 outline-none py-2 placeholder:text-sm bg-transparent"
            />
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: '#2563eb' }}
              transition={{ duration: 0.2 }}
              name="lastName"
              type="text"
              placeholder="Last Name *"
              required
              className="w-full border-b border-gray-400 focus:border-blue-500 outline-none py-2 placeholder:text-sm bg-transparent"
            />
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: '#2563eb' }}
              transition={{ duration: 0.2 }}
              name="phone"
              type="tel"
              placeholder="Phone Number *"
              required
              className="w-full border-b border-gray-400 focus:border-blue-500 outline-none py-2 placeholder:text-sm bg-transparent"
            />
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: '#2563eb' }}
              transition={{ duration: 0.2 }}
              name="email"
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-400 focus:border-blue-500 outline-none py-2 placeholder:text-sm bg-transparent"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      {/* Bottom Line */}
      <div className="mt-12 border-t pt-4 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Sri Vyra Tech. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
