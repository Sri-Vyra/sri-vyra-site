import { motion } from "framer-motion";
import { Calendar, Video, FileText, Users } from "lucide-react";
import React, { useState, useEffect, useMemo } from "react";

const MockInterviewsPage = () => {
  const features = [
    { icon: <Calendar className="w-8 h-8 text-primary" />, title: "Flexible Scheduling", desc: "Book your mock interview slots based on your availability." },
    { icon: <Video className="w-8 h-8 text-primary" />, title: "Live Online Sessions", desc: "Practice with mentors in a real-time, interview-like setup." },
    { icon: <FileText className="w-8 h-8 text-primary" />, title: "Detailed Feedback", desc: "Get structured feedback to improve technical and soft skills." },
    { icon: <Users className="w-8 h-8 text-primary" />, title: "Peer Review", desc: "Option to practice in small groups for collaborative learning." },
  ];

  const topics = useMemo(() => [
    { name: "Hadoop Interview", dates: ["2025-09-08", "2025-09-09", "2025-09-10"], times: ["19:30", "20:00", "20:30"] },
  ], []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    date: "",
    time: "",
  });

  const [availableDates, setAvailableDates] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [bookedSlots, setBookedSlots] = useState([]);

  // Fetch already booked slots from Google Sheet (as JSON)
  useEffect(() => {
    async function fetchBookedSlots() {
      try {
        const SHEET_JSON_URL = "https://opensheet.elk.sh/YOUR_SHEET_ID/Sheet1"; // replace with your Sheet ID
        const res = await fetch(SHEET_JSON_URL);
        const data = await res.json();
        setBookedSlots(data.map(row => `${row.topic}_${row.date}_${row.time}`));
      } catch (err) {
        console.error("Error fetching booked slots:", err);
      }
    }
    fetchBookedSlots();
  }, []);

  // Update available dates when topic changes
  useEffect(() => {
    const selected = topics.find((t) => t.name === formData.topic);
    setAvailableDates(selected ? selected.dates : []);
    setFormData(prev => ({ ...prev, date: "", time: "" }));
    setAvailableTimes([]);
  }, [formData.topic, topics]);

  // Update available times when date changes
  useEffect(() => {
    const selectedTopic = topics.find((t) => t.name === formData.topic);
    if (selectedTopic && formData.date) {
      setAvailableTimes(selectedTopic.times);
      setFormData(prev => ({ ...prev, time: "" }));
    }
  }, [formData.date, formData.topic, topics]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxP6UKIt3vJ813z_5wUC7gh90fzPvFMcq7rFkf234bDKw_DUDhOYRrVzwdu8JZFCn8U/exec";

    const form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", GOOGLE_SCRIPT_URL);
    form.setAttribute("target", "_blank");

    for (const key in formData) {
      const input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", key);
      input.setAttribute("value", formData[key]);
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    setSubmitted(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      topic: "",
      date: "",
      time: "",
    });

    setBookedSlots(prev => [...prev, `${formData.topic}_${formData.date}_${formData.time}`]);
  };

  // Compute which dates are fully booked
  const getDateStatus = (date) => {
    if (!formData.topic) return false;
    const selectedTopic = topics.find(t => t.name === formData.topic);
    const allTimes = selectedTopic.times;
    const bookedCount = allTimes.filter(t => bookedSlots.includes(`${formData.topic}_${date}_${t}`)).length;
    return bookedCount >= allTimes.length;
  };

  return (
    <div className="min-h-screen bg-cream font-body text-navy">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <motion.h1 className="text-4xl font-display font-bold mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          Mock Interviews at <span className="text-primary">Sri Vyra</span>
        </motion.h1>
        <p className="text-lg text-navy/80 max-w-2xl mx-auto">
          Prepare for success with realistic interview simulations, expert guidance, and actionable feedback.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-16 py-12">
        {features.map((f, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center border border-accent">
            {f.icon}
            <h3 className="mt-4 text-xl font-semibold font-display">{f.title}</h3>
            <p className="mt-2 text-sm text-navy/70">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Booking Section */}
      <section className="max-w-3xl mx-auto mb-16 px-6">
        <h2 className="text-3xl font-display font-bold text-center mb-6">Book Your Mock Interview</h2>

        {submitted && (
          <div className="text-green-800 p-4 text-center mb-6">
            ✅ Slot booked successfully! All the Very Best for your Interview.
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="flex gap-4">
            {['firstName', 'lastName'].map((field) => (
              <div key={field} className="relative flex-1">
                <input
                  required
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={field === 'firstName' ? 'First Name' : 'Last Name'}
                  className="peer w-full border-b-2 border-black bg-transparent pt-6 pb-2 placeholder-transparent focus:outline-none focus:border-blue-600 transition duration-300"
                />
                <label className="absolute left-0 top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
                  {field === 'firstName' ? 'First Name' : 'Last Name'} <span className="text-red-500">*</span>
                </label>
              </div>
            ))}
          </div>

          {/* Email & Phone */}
          {['email', 'phone'].map((field) => (
            <div className="relative" key={field}>
              <input
                required
                type={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={field === 'email' ? 'Email' : 'Phone Number'}
                className="peer w-full border-b-2 border-black bg-transparent pt-6 pb-2 placeholder-transparent focus:outline-none focus:border-blue-600 transition duration-300"
              />
              <label className="absolute left-0 top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
                {field === 'email' ? 'Email' : 'Phone Number'} <span className="text-red-500">*</span>
              </label>
            </div>
          ))}

          {/* Topic Dropdown */}
          <div className="relative">
            <select
              required
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="w-full border-b-2 border-black bg-transparent pt-6 pb-2 focus:outline-none focus:border-blue-600"
            >
              <option value="" disabled>Select Topic</option>
              {topics.map((t) => <option key={t.name} value={t.name}>{t.name}</option>)}
            </select>
          </div>

          {/* Dates as buttons */}
          <div className="flex flex-wrap gap-2">
            {availableDates.map((d) => {
              const disabled = getDateStatus(d);
              return (
                <button
                  key={d}
                  type="button"
                  onClick={() => !disabled && setFormData({ ...formData, date: d, time: "" })}
                  disabled={disabled}
                  className={`px-4 py-2 border-b-2 rounded-full text-sm ${
                    disabled
                      ? "border-gray-300 text-gray-400 cursor-not-allowed"
                      : formData.date === d
                      ? "border-blue-600 text-navy"
                      : "border-black text-navy"
                  } focus:outline-none`}
                >
                  {d}
                </button>
              );
            })}
          </div>

          {/* Times as buttons */}
          <div className="flex flex-wrap gap-2">
            {availableTimes.map((t) => {
              const slotKey = `${formData.topic}_${formData.date}_${t}`;
              const isBooked = bookedSlots.includes(slotKey);
              return (
                <button
                  key={t}
                  type="button"
                  disabled={isBooked}
                  onClick={() => setFormData({ ...formData, time: t })}
                  className={`px-4 py-2 border-b-2 rounded-full text-sm ${
                    isBooked
                      ? "border-gray-300 text-gray-400 cursor-not-allowed"
                      : formData.time === t
                      ? "border-blue-600 text-navy"
                      : "border-black text-navy"
                  } focus:outline-none`}
                >
                  {t}
                </button>
              );
            })}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition duration-300 font-semibold mt-4"
          >
            Book Slot
          </button>
        </form>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white text-center py-16 px-6">
        <h2 className="text-3xl font-display font-bold mb-4">Ready to Ace Your Interviews?</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Book your slot today and start practicing with experienced mentors who know exactly what top companies expect.
        </p>
      </section>
    </div>
  );
};

export default MockInterviewsPage;
