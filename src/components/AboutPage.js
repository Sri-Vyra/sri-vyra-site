import React from 'react';
import { Link } from 'react-router-dom';
import cert1 from '../assets/cert1.png';
import cert2 from '../assets/cert2.png';
import cert3 from '../assets/cert3.png';
import cert4 from '../assets/cert4.png';
import cert5 from '../assets/cert5.png';
import cert6 from '../assets/cert6.png';
import mentorPhoto from '../assets/your-photo.jpg';

function AboutPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Sri Vyra</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Where Learning is a Discipline, Not a Shortcut.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-700">
            To build a value-first, learner-centric ecosystem where commitment meets opportunity. We envision Sri Vyra as a trusted academy that nurtures not just coders, but thinkers — individuals with clarity, courage, and character — ready to take on the tech world with responsibility and resilience.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-700">
            To empower learners — from freshers and working professionals to those restarting after a career break — with the technical depth, mindset, and mentorship required to become top-tier data professionals — across roles like Data Engineer, Big Data Engineer, Hadoop Specialist, and Cloud Data Engineers on AWS, Azure, and GCP.
          </p>
        </div>
      </section>

      {/* Why Sri Vyra */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Sri Vyra Exists</h2>
        <div className="max-w-4xl mx-auto text-gray-700 space-y-4">
          <p>
            We believe that true growth happens through disciplined learning, clear direction, and purpose-driven transformation.
            Most online programs focus only on tools — we go deeper, nurturing real-world clarity and career readiness.
          </p>
          <p>
            From mock interviews to hands-on mentorship, Sri Vyra equips you not just to land a job, but to grow into a confident, resilient professional.
          </p>
        </div>
      </section>

      {/* Meet the Mentor */}
      <section className="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img 
            src={mentorPhoto}
            alt="Rupesh Phanindra Sai" 
            className="rounded-full w-60 h-60 object-cover object-top mx-auto shadow-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3">Meet Your Mentor</h2>
          <p className="text-gray-700 mb-2">
            I’m Rupesh Phanindra Sai — a Data Engineering professional passionate about mentoring and building long-term tech careers through clarity, discipline, and purpose.
          </p>
          <p className="text-gray-700 mb-2">
            I’ve worked extensively on big data platforms like Hadoop and Spark, as well as AWS-based data lakes, scalable pipelines, and cloud-native data engineering stacks.
          </p>
          <p className="text-gray-700 mb-2">
            What drives me is not just solving data problems — but guiding others to do it with confidence and clarity.
          </p>
        </div>
      </section>

      {/* Badges Section */}
      <section className="bg-gray-100 py-10 px-6 text-center">
        <h3 className="text-xl font-semibold mb-6">Certifications & Achievements</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <img src={cert1} alt="Certification 1" className="h-20" />
          <img src={cert2} alt="Certification 2" className="h-20" />
          <img src={cert3} alt="Certification 3" className="h-20" />
          <img src={cert4} alt="Certification 3" className="h-20" />
          <img src={cert5} alt="Certification 3" className="h-20" />
          <img src={cert6} alt="Certification 3" className="h-20" />
          {/* Add more badge images as needed */}
        </div>
      </section>

      {/* Why We're Different */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">What Makes Us Different</h2>
        <div className="grid md:grid-cols-2 gap-8 text-left text-gray-700">
          <div>
            <p>✅ Real Company-Based Mock Interviews</p>
            <p>✅ Discipline-Based Learning Framework</p>
            <p>✅ Hands-on Mentorship & Career Direction</p>
          </div>
          <div>
            <p>✅ Resume Building & Job Profile Setup</p>
            <p>✅ Extended Job Support</p>
            <p>✅ Interview Kits, Doubt Sessions & More</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to Start Your Journey?</h2>
        <p className="mb-6">Join a learning path that’s clear, confident, and backed by mentorship.</p>
        <div className="flex justify-center gap-4">
          <Link 
            to="/courses" 
            className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-100"
          >
            View Courses
          </Link>
          <a
            href="https://wa.me/918712395259"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full"
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
