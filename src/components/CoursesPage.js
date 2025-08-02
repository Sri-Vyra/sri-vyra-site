import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const tracks = [
  {
    title: 'Elite Track',
    id: 'elite',
    price: '₹5,999',
    duration: '4 Months',
    jobSupport: '8 Months',
    referral: '₹500',
    features: [
      'Python, SQL, Hadoop, Spark',
      'Cloud: AWS, Azure, GCP',
      'Resume & Job Profile Setup',
      '5 Company-Based Mock Interviews',
      'Interview Kits & Q&A Sessions'
    ],
    highlight: false
  },
  {
    title: 'Premium Track',
    id: 'premium',
    price: '₹9,999',
    duration: '4 Months',
    jobSupport: '8 Months',
    referral: '₹1,000',
    features: [
      'Everything in Elite Track',
      'Advanced Mock Interviews',
      'Live Doubt Sessions',
      'Profile Shortlisting Support',
      'Resume Forwarding to Companies'
    ],
    highlight: true
  },
  {
    title: 'Mentorship Track',
    id: 'mentorship',
    price: '₹12,999',
    duration: '4 Months',
    jobSupport: '8 Months',
    referral: '₹2,000',
    features: [
      'Everything in Premium Track',
      '1-on-1 Personal Mentorship',
      'Exclusive Project Guidance',
      'Referral Drives',
      'On-call Interview Preparation'
    ],
    highlight: false
  }
];

function CoursesPage() {
  return (
    <section className="bg-white text-gray-800 px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Explore Our Tracks</h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">Choose a track that fits your journey – and take the leap into your data career.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tracks.map((track, index) => (
          <motion.div
            key={index}
            className={`border rounded-2xl p-6 shadow-md hover:shadow-lg transition ${
              track.highlight ? 'border-blue-600' : 'border-gray-200'
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-bold mb-2">{track.title}</h3>
            <p className="text-2xl font-semibold text-blue-600 mb-4">{track.price}</p>
            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              {track.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
            <Link
              to={`/courses/${track.id}`}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition text-sm"
            >
              View Details
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Comparison Table */}
        <div className="overflow-x-auto mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Track Comparison</h2>
        <table className="min-w-full border border-gray-300 text-sm md:text-base text-left">
            <thead>
            <tr className="bg-gray-100">
                <th className="p-3 border">Feature</th>
                <th className="p-3 border text-blue-600 font-bold">Elite</th>
                <th className="p-3 border text-blue-600 font-bold">Premium</th>
                <th className="p-3 border text-blue-600 font-bold">Mentorship</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="p-3 border">Actual Price</td>
                <td className="p-3 border">₹7,999</td>
                <td className="p-3 border">₹11,999</td>
                <td className="p-3 border">₹19,999</td>
            </tr>
            <tr>
                <td className="p-3 border">Discounted Price</td>
                <td className="p-3 border">₹5,999</td>
                <td className="p-3 border">₹9,999</td>
                <td className="p-3 border">₹12,999</td>
            </tr>
            <tr>
                <td className="p-3 border">Duration</td>
                <td className="p-3 border">4 Months</td>
                <td className="p-3 border">4 Months</td>
                <td className="p-3 border">4 Months</td>
            </tr>
            <tr>
                <td className="p-3 border">Job Support</td>
                <td className="p-3 border">8 Months</td>
                <td className="p-3 border">8 Months</td>
                <td className="p-3 border">8 Months</td>
            </tr>
            <tr>
                <td className="p-3 border">Referral Bonus</td>
                <td className="p-3 border">₹500</td>
                <td className="p-3 border">₹1,000</td>
                <td className="p-3 border">₹2,000</td>
            </tr>
            <tr>
                <td className="p-3 border">Mock Interviews</td>
                <td className="p-3 border">5 Full Sets</td>
                <td className="p-3 border">5 Full Sets + Advanced</td>
                <td className="p-3 border">5 Sets + On-call Prep</td>
            </tr>
            <tr>
                <td className="p-3 border">Live Doubt Sessions</td>
                <td className="p-3 border">✓</td>
                <td className="p-3 border">✓</td>
                <td className="p-3 border">✓</td>
            </tr>
            <tr>
                <td className="p-3 border">Resume Forwarding</td>
                <td className="p-3 border">—</td>
                <td className="p-3 border">✓</td>
                <td className="p-3 border">✓</td>
            </tr>
            <tr>
                <td className="p-3 border">1-on-1 Mentorship</td>
                <td className="p-3 border">—</td>
                <td className="p-3 border">—</td>
                <td className="p-3 border">✓</td>
            </tr>
            <tr>
                <td className="p-3 border">Payment Structure</td>
                <td className="p-3 border">
                ₹999 + ₹5,000
                </td>
                <td className="p-3 border">
                ₹999 + ₹4,500 + ₹4,500
                </td>
                <td className="p-3 border">
                ₹999 + ₹6,000 + ₹6,000
                </td>
            </tr>
            </tbody>
        </table>
        </div>

    </section>
  );
}

export default CoursesPage;
