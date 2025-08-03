import React, { useState, useEffect } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    background: '',
    experience: '',
    careerGap: '',
    gapYears: '',
    email: '',
    course: '',
    slotAmount: '',
    slotConfirmed: '',
    term1Amount: '',
    term2Amount: '',
    referredBy: '',
    referralPhone: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyhytQQIziTAUy5ee7wpNMtCw_zn9EwtRoWVnigSH4bvibT-vA5Nzm09RhklJxS02lnfw/exec';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const prices = {
      elite: { slotAmount: '999', term1Amount: '2500', term2Amount: '2500' },
      premium: { slotAmount: '999', term1Amount: '4500', term2Amount: '4500' },
      mentorship: { slotAmount: '999', term1Amount: '6000', term2Amount: '6000' }
    };
    if (formData.course in prices) {
      setFormData(prev => ({
        ...prev,
        ...prices[formData.course]
      }));
    }
  }, [formData.course]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = document.createElement('form');
    form.setAttribute('method', 'POST');
    form.setAttribute('action', scriptURL);
    form.setAttribute('target', '_blank');

    for (const key in formData) {
      const input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', key);
      input.setAttribute('value', formData[key]);
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    setSubmitted(true);
    setFormData({
      name: '',
      phone: '',
      background: '',
      experience: '',
      careerGap: '',
      gapYears: '',
      email: '',
      course: '',
      slotAmount: '',
      slotConfirmed: '',
      term1Amount: '',
      term2Amount: '',
      referredBy: '',
      referralPhone: ''
    });
  };

  return (
    <div className="min-h-[90vh] flex items-start justify-center px-6 py-16 bg-white mt-12">
      <div className="w-full max-w-xl">
        <h2 className="text-3xl font-semibold text-center mb-6">Sri Vyra Registration</h2>

        {submitted ? (
          <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center">
            ✅ Registration successful! We'll contact you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {[ 
              { name: 'name', label: 'Full Name', type: 'text', required: true },
              { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
              { name: 'email', label: 'Email Address', type: 'email', required: true },
              { name: 'background', label: 'Previous Background', type: 'text' },
              { name: 'experience', label: 'Years of Experience', type: 'text' },
              { name: 'gapYears', label: 'No. of Gap Years', type: 'text' },
            ].map(({ name, label, type, required = false }) => (
              <div className="relative" key={name}>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required={required}
                  placeholder={label}
                  className="peer w-full border-b-2 border-black bg-transparent pt-6 pb-2 placeholder-transparent focus:outline-none focus:border-blue-600 transition duration-300"
                />
                <label
                  htmlFor={name}
                  className="absolute left-0 top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  {label}{required && <span className="text-red-500"> *</span>}
                </label>
              </div>
            ))}

            <div className="relative">
              <select
                name="careerGap"
                value={formData.careerGap}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-black bg-transparent pt-6 pb-2 focus:outline-none focus:border-blue-600"
              >
                <option value="" disabled>Career Gap (Yes/No)</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="relative">
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-black bg-transparent pt-6 pb-2 focus:outline-none focus:border-blue-600"
              >
                <option value="" disabled>Type of Course</option>
                <option value="elite">Elite Track</option>
                <option value="premium">Premium Track</option>
                <option value="mentorship">Mentorship Track</option>
              </select>
            </div>

            {[
              { name: 'slotAmount', label: 'Slot Amount' },
              { name: 'term1Amount', label: 'Term 1 Amount' },
              { name: 'term2Amount', label: 'Term 2 Amount' }
            ].map(({ name, label }) => (
              <div className="relative" key={name}>
                <input
                  type="text"
                  name={name}
                  value={formData[name]}
                  readOnly
                  placeholder={label}
                  className="w-full border-b-2 border-black bg-gray-50 pt-6 pb-2 placeholder-transparent focus:outline-none focus:border-blue-600 transition duration-300 cursor-not-allowed"
                />
                <label
                  htmlFor={name}
                  className="absolute left-0 top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  {label}
                </label>
              </div>
            ))}

            <div className="relative">
              <select
                name="slotConfirmed"
                value={formData.slotConfirmed}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-black bg-transparent pt-6 pb-2 focus:outline-none focus:border-blue-600"
              >
                <option value="" disabled>Slot Confirmed (Yes/No)</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {[ 
              { name: 'referredBy', label: 'Referred By Name', type: 'text' },
              { name: 'referralPhone', label: 'Referral Phone Number', type: 'tel' }
            ].map(({ name, label, type }) => (
              <div className="relative" key={name}>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={label}
                  className="peer w-full border-b-2 border-black bg-transparent pt-6 pb-2 placeholder-transparent focus:outline-none focus:border-blue-600 transition duration-300"
                />
                <label
                  htmlFor={name}
                  className="absolute left-0 top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  {label}
                </label>
              </div>
            ))}

            <button
              type="submit"
              className="w-full py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition duration-300 font-semibold"
            >
              Submit Registration
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default RegistrationForm;
