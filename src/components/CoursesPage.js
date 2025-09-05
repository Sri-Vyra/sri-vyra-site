import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const tracks = [
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
    jobSupport: '18 Months',
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

const comparisonData = [
  ['Actual Price', '₹11,999', '₹19,999'],
  ['Discounted Price', '₹9,999', '₹12,999'],
  ['Referral Bonus', '₹1,000', '₹2,000'],
  ['Duration', '3 Months', '4 Months'],
  ['Live Doubt Sessions', '✓', '✓'],
  ['Job Support', '8 Months', '18 Months'],
  ['Mock Interviews', '5 Full Sets + Advanced', '5 Sets + On-call Prep'],
  ['Interview Feedback', '✓', '✓'],
  ['Interview Preparation Kit', '✓', '✓'],
  ['Company Specific Interview Kit', '✓', '✓'],
  ['Interview Q&A Sessions', '✓', '✓'],
  ['Resume Forwarding', '✓', '✓'],
  ['1-on-1 Mentorship', '—', '✓'],
  ['Payment Structure', '₹999 + ₹4,500 + ₹4,500', '₹999 + ₹6,000 + ₹6,000']
];

function CoursesPage() {
  const [showFull, setShowFull] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleProtectedClick = (route) => {
    if (!user) {
      navigate('/login');
    } else {
      navigate(route);
    }
  };

  const handleShowMore = () => {
    if (!user) {
      navigate('/login');
    } else {
      setShowFull(true);
    }
  };

  return (
    <section className="bg-white text-gray-800 px-6 md:px-12 py-20">
      {/* Intro Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Explore Our Tracks</h2>
        <p className="text-gray-600 text-lg">
          Choose your journey, build your career. Sri Vyra provides industry-focused training and unmatched job support.
        </p>
      </div>

      {/* Cards Section (center align for 2 cards) */}
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
        {tracks.map((track, index) => (
          <div
            key={index}
            className={`border-2 rounded-2xl p-6 transition-transform transform hover:scale-105 bg-white shadow-md hover:shadow-xl w-full md:w-1/2 ${
              track.highlight ? 'border-blue-600' : 'border-gray-300'
            }`}
          >
            <h3 className="text-xl font-bold mb-2">{track.title}</h3>
            <p className="text-2xl font-semibold text-blue-600 mb-4">{track.price}</p>
            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              {track.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
            <button
              onClick={() => handleProtectedClick(`/courses/${track.id}`)}
              className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-full text-sm transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto mt-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Track Comparison</h2>
        <div className="rounded-xl overflow-hidden border border-black">
          <table className="min-w-full text-sm md:text-base text-center border-collapse">
            <thead>
              <tr className="text-black font-semibold text-base border-b border-black">
                <th className="p-4 border-r border-black">Feature</th>
                <th className="p-4 border-r border-black relative">
                  Premium
                  <span className="absolute -top-0 left-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                    🌟 Most Chosen
                  </span>
                </th>
                <th className="p-4 relative">
                  Mentorship
                  <span className="absolute -top-0 left-2 bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                    🎯 Mentor Exclusive
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {(showFull ? comparisonData : comparisonData.slice(0, 3)).map((row, i) => (
                <tr key={i} className="border-t border-black">
                  <td className="p-4 border-r border-black">{row[0]}</td>
                  <td className="p-4 border-r border-black">{row[1]}</td>
                  <td className="p-4">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {!showFull && (
          <div className="text-center mt-6">
            <button
              onClick={handleShowMore}
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition font-semibold"
            >
              View Full Comparison
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default CoursesPage;
