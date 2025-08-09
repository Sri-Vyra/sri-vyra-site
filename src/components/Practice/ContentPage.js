// === src/components/Practice/ContentPage.js ===
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { interviewData } from './interviewQuestionsData';

export default function ContentPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [readTime, setReadTime] = useState(0);

  const topicRefs = useRef({});

  const getTopicRef = (key) => {
    if (!topicRefs.current[key]) {
      topicRefs.current[key] = React.createRef();
    }
    return topicRefs.current[key];
  };

  const scrollToTopic = (topicKey) => {
    getTopicRef(topicKey)?.current?.scrollIntoView({ behavior: 'smooth' });
    setExpandedSections((prev) => ({ ...prev, [topicKey]: true }));
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.trim().length === 0) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const allQnA = [];
    Object.entries(interviewData).forEach(([topic, { title, questions }]) => {
      questions.forEach((q) => {
        allQnA.push({ topic, title, question: q.question });
      });
    });

    const filtered = allQnA.filter((item) =>
      item.question.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filtered);
    setShowSuggestions(true);
  };

  const highlightKeywords = (text, keywords = []) => {
    if (!keywords || !keywords.length) return text;
    let result = text;
    keywords.forEach((word) => {
      const regex = new RegExp(`(${word})`, 'gi');
      result = result.replace(
        regex,
        '<span class="bg-yellow-200 font-semibold">$1</span>'
      );
    });
    return result;
  };

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      if (elapsed >= 60) {
        setReadTime(Math.floor(elapsed / 60));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen px-6 md:px-20 py-12 bg-white text-gray-800 relative">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-1 border border-black rounded-full hover:bg-black hover:text-white transition"
        >
          ← Back
        </button>
        {readTime > 0 && (
          <span className="text-sm text-gray-600">Reading time: {readTime} min</span>
        )}
      </div>

      <h1 className="text-4xl font-bold text-center mb-6">🎯 Common Interview Questions</h1>

      <div className="relative max-w-2xl mx-auto mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search any question..."
          className="w-full px-5 py-3 bg-white/70 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md backdrop-blur-sm"
          onFocus={() => setShowSuggestions(true)}
        />
        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute w-full mt-1 bg-white border border-gray-200 rounded-lg max-h-60 overflow-y-auto z-10 shadow-lg">
            {suggestions.map((s, index) => (
              <li
                key={index}
                onClick={() => {
                  setSearchQuery(s.question);
                  scrollToTopic(s.topic);
                  setShowSuggestions(false);
                }}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              >
                <span className="font-medium text-gray-800">{s.title}</span>: {s.question}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {Object.entries(interviewData).map(([key, { title }]) => (
          <button
            key={key}
            onClick={() => scrollToTopic(key)}
            className="px-4 py-2 border border-gray-400 rounded-full hover:bg-black hover:text-white transition"
          >
            {title}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {Object.entries(interviewData).map(([key, { title, emoji, questions }]) => {
          const filtered = questions.filter(
            (q) =>
              q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              q.answer.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (filtered.length === 0) return null;

          const isOpen = expandedSections[key] ?? true;

          return (
            <section
              key={key}
              ref={getTopicRef(key)}
              className="bg-white/80 p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <div
                className="flex justify-between items-center cursor-pointer mb-4"
                onClick={() =>
                  setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }))
                }
              >
                <h2 className="text-2xl font-bold underline text-center w-full">
                  {emoji} {title}
                </h2>
              </div>

              {isOpen && (
                <div className="space-y-4 animate-fade-in">
                  {filtered.map((qna, i) => (
                    <div
                      key={i}
                      className="p-4 border-l-4 border-blue-400 bg-white/90 shadow-sm rounded group hover:bg-blue-50 hover:shadow-md transition"
                    >
                      <h3 className="font-semibold text-lg mb-1">{qna.question}</h3>
                      <p
                        className="text-gray-700"
                        dangerouslySetInnerHTML={{
                          __html: highlightKeywords(qna.answer, qna.keywords),
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
