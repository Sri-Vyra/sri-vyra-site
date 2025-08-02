// CourseDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const courseData = {
  elite: {
    title: 'Elite Track',
    price: '₹5,999',
    originalPrice: '₹7,999',
    duration: '4 Months',
    jobSupport: '8 Months',
    referral: '₹500',
    payment: [
      'Slot Booking Fee: ₹999',
      'After 12 hours of sessions: ₹5,000'
    ],
    features: [
      'Python, SQL - Concepts & Programming',
      'Big Data: Hadoop, Sqoop, Hive',
      'Apache Spark: Core, Arch, Programming, AWS Integration',
      'Cloud: AWS, Azure, GCP',
      'Resume & Job Profile Setup',
      '5 Company-Based Mock Interviews',
      'Interview Kits & Q&A Sessions',
      'Mock Interview Pattern: Tech R1 (20m), Tech R2 (60m), Client/HR/MR (optional)',
      'Detailed Feedback & Interview Questions'
    ]
  },
  premium: {
    title: 'Premium Track',
    price: '₹9,999',
    originalPrice: '₹11,999',
    duration: '4 Months',
    jobSupport: '8 Months',
    referral: '₹1,000',
    payment: [
      'Slot Booking Fee: ₹999',
      'After 12 hours: ₹4,500',
      'After 30 hours: ₹4,500'
    ],
    features: [
      'Everything in Elite Track',
      'Live Doubt Sessions',
      'Advanced Mock Interviews',
      'Resume Forwarding & Shortlisting Help',
      'Company-Based Mock Interviews (5 Full Sets)',
      'Detailed Feedback & Q&A',
      'Company-Specific Interview Kits'
    ]
  },
  mentorship: {
    title: 'Mentorship Track',
    price: '₹12,999',
    originalPrice: '₹19,999',
    duration: '4 Months',
    jobSupport: '8 Months',
    referral: '₹2,000',
    payment: [
      'Slot Booking Fee: ₹999',
      'After 12 hours: ₹6,000',
      'After 30 hours: ₹6,000'
    ],
    features: [
      'Everything in Premium Track',
      '1-on-1 Personal Mentorship',
      'Exclusive Project Guidance',
      'Referral Drives',
      'On-call Interview Preparation'
    ]
  }
};

function CourseDetails() {
  const { id } = useParams();
  const course = courseData[id];

  if (!course) {
    return <div className="text-center py-20">Course not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <Link to="/courses" className="text-blue-600 underline text-sm mb-4 inline-block">&larr; Back to Courses</Link>
      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
      <p className="text-xl text-blue-600 font-semibold mb-4">
        {course.price} <span className="text-gray-500 line-through text-sm ml-2">{course.originalPrice}</span>
      </p>
      <p className="text-sm text-gray-700 mb-2"><strong>Duration:</strong> {course.duration}</p>
      <p className="text-sm text-gray-700 mb-4"><strong>Job Support:</strong> {course.jobSupport}</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        {course.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2">Payment Structure:</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          {course.payment.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
      <p className="text-sm text-green-700 font-semibold mb-2">Referral Bonus: {course.referral}</p>
      <a
        href="https://wa.me/918712395259"
        className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition"
        target="_blank" rel="noreferrer"
      >
        Book Slot on WhatsApp
      </a>
    </div>
  );
}

export default CourseDetails;
