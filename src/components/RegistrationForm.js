import React, { useState } from 'react';

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Sri Vyra Registration</h2>
      {submitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center">
          ✅ Registration successful! We'll contact you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full p-3 border rounded" />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full p-3 border rounded" />
          <input type="text" name="background" placeholder="Previous Background" value={formData.background} onChange={handleChange} className="w-full p-3 border rounded" />
          <input type="text" name="experience" placeholder="Years of Experience" value={formData.experience} onChange={handleChange} className="w-full p-3 border rounded" />
          <input type="text" name="careerGap" placeholder="Career Gap (Yes/No)" value={formData.careerGap} onChange={handleChange} className="w-full p-3 border rounded" />
          <input type="text" name="gapYears" placeholder="No. of Gap Years" value={formData.gapYears} onChange={handleChange} className="w-full p-3 border rounded" />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded" />
          <input type="text" name="course" placeholder="Type of Course" value={formData.course} onChange={handleChange} required className="w-full p-3 border rounded" />
          <input type="text" name="slotAmount" placeholder="Slot Amount" value={formData.slotAmount} onChange={handleChange} className="w-full p-3 border rounded" />
          <input type="text" name="slotConfirmed" placeholder="Slot Confirmed (Yes/No)" value={formData.slotConfirmed} onChange={handleChange} className="w-full p-3 border rounded" />
          <input type="text" name="term1Amount" placeholder="Term 1 Amount" value={formData.term1Amount} onChange={handleChange} className="w-full p-3 border rounded" />
          <input type="text" name="term2Amount" placeholder="Term 2 Amount" value={formData.term2Amount} onChange={handleChange} className="w-full p-3 border rounded" />
          <input type="text" name="referredBy" placeholder="Referred By Name" value={formData.referredBy} onChange={handleChange} className="w-full p-3 border rounded" />
          <input type="tel" name="referralPhone" placeholder="Referral Phone Number" value={formData.referralPhone} onChange={handleChange} className="w-full p-3 border rounded" />

          <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition">
            Submit Registration
          </button>
        </form>
      )}
    </div>
  );
}

export default RegistrationForm;
