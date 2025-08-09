import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const backgrounds = [
  'Testing', 'Support Roles', 'Software Developer', 'ETL Tester', 'Data Analyst',
  'Business Analyst', 'Network Engineer', 'System Admin', 'Other'
];

const gapYearOptions = [
  'No career Gap', 'Fresher - No break', 'Fresher - 1 year Gap', 'Fresher - 2 years Gap',
  'Fresher - 3+ years Gap', 'Experienced - 1 year Gap', 'Experienced - 2 years Gap',
  'Experienced - 3 years Gap', 'Experienced - 4 years Gap', 'Experienced - 5 years Gap', 'Experienced - 6+ years Gap'
];

const experienceOptions = [
  'Fresher', '1 year', '2 years', '3 years', '4 years', '5 years', '8 years', '10+ years'
];

const noticePeriodOptions = ['Immediate', '15 days', '30 days', '45 days', '90 days'];
const salaryOptions = [
  'Fresher', '2L - 3.5L', '3.5L - 5L', '5L - 7.5L', '7.5L - 10L',
  '10L - 12L', '12L - 15L', '15L - 18L', '20L+'
];

function ProfilePage() {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState(() => JSON.parse(localStorage.getItem('vyraUserProfile')) || {});
  const [isEditing, setIsEditing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

      const handleSave = async () => {
      const updatedProfile = {
        ...profileData,
        lastUpdated: new Date().toLocaleString(),
      };

      setProfileData(updatedProfile);
      setLastUpdated(updatedProfile.lastUpdated);
      localStorage.setItem('vyraUserProfile', JSON.stringify(updatedProfile));
      setIsEditing(false);

      // Prepare URL-encoded form data
      const profileToSend = {
        ...updatedProfile,
        uid: user?.uid || '',
      };

      const formBody = new URLSearchParams(profileToSend).toString();

      try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbxj0vjj14q0ysB6pK8xrjt370gGeAe4TQpFaVQBZriWftKGv7JY2KELiagltBPXVYR3/exec", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody,
        });

        const result = await response.text();
        console.log("✅ Profile sent to Google Sheet:", result);
      } catch (error) {
        console.error("❌ Failed to send profile to Google Sheet:", error);
      }

      // 🎉 Show confetti if profile is fully completed
      if (completionPercent === 100 && typeof window.confetti === 'function') {
        window.confetti({ particleCount: 100, spread: 160 });
      }
    };


  useEffect(() => {
    if (profileData.lastUpdated) setLastUpdated(profileData.lastUpdated);
  }, [profileData]);

const completionFields = [
  'firstName', 'lastName', 'gender', 'company', 'background', 'location', 'experience', 'phone',
  'email', 'noticePeriod', 'currentCTC', 'expectedCTC', 'employmentType', 'joiningDate', 'exitDate',
  'responsibilities', 'skillsUsed', 'careerGap', 'gapYears', 'linkedin'
];

// Custom logic to consider exitDate complete if currentlyWorking is true
const completedFields = completionFields.filter((key) => {
  if (key === 'exitDate') {
    return profileData.currentlyWorking || (profileData.exitDate && profileData.exitDate.trim() !== '');
  }
  return profileData[key] && profileData[key].toString().trim() !== '';
}).length;

const completionPercent = Math.floor((completedFields / completionFields.length) * 100);

// Optional: Log which fields are still incomplete
const missingFields = completionFields.filter((key) => {
  if (key === 'exitDate') {
    return !(profileData.currentlyWorking || (profileData.exitDate && profileData.exitDate.trim() !== ''));
  }
  return !(profileData[key] && profileData[key].toString().trim() !== '');
});

console.log("🔍 Missing fields for profile completion:", missingFields);

// Professional headline
const headline = `${profileData.background || 'Role'} at ${profileData.company || 'Company'}, ${profileData.location || ''} ${profileData.phone || ''} ${profileData.email || ''}`;

  return (
    <div className="bg-white min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold uppercase">
          {`${profileData.firstName || ''} ${profileData.lastName || ''}`.trim() || user?.displayName || 'Profile'}
        </h1>
        <p className="text-sm text-gray-500">Last Updated: {lastUpdated}</p>
      </div>

      {/* Completion Bar */}
          <div className="mb-12">
            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${completionPercent === 100 ? 'bg-green-600' : 'bg-blue-600'}`}
                style={{ width: `${completionPercent}%` }}
              ></div>
            </div>

            <div className="text-center mt-2">
              <p className="text-sm text-gray-700 flex justify-center items-center gap-2">
                Profile Completion: {completionPercent}%{' '}
                {completionPercent === 100 && <span className="text-green-600">✅</span>}
              </p>

              {completionPercent === 100 && (
                <p className="text-green-600 font-semibold mt-1 animate-pulse">🎉 Congrats! Your profile is fully complete.</p>
              )}
            </div>
          </div>


      {/* Section 1: Basic Info */}
          <section className="space-y-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[{ label: 'First Name', name: 'firstName' }, { label: 'Last Name', name: 'lastName' }].map(({ label, name }) => (
            <div className="relative" key={name}>
              <input
                type="text"
                name={name}
                value={profileData[name] || ''}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder={label}
                className={`peer w-full border-b-2 bg-transparent pt-6 pb-2 placeholder-transparent focus:outline-none
                  ${isEditing && !profileData[name] ? 'border-red-500' : 'border-black'}
                  ${isEditing ? 'focus:border-blue-600' : 'text-gray-600'}`}
              />
              <label htmlFor={name} className="absolute left-0 top-1 text-sm text-gray-500 transition-all 
                peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
                {label} <span className="text-red-500">*</span>
              </label>
            </div>
          ))}

          {/* Gender */}
          <div className="relative">
            <select
              name="gender"
              value={profileData.gender || ''}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full border-b-2 bg-transparent pt-6 pb-2 focus:outline-none
                ${isEditing && !profileData.gender ? 'border-red-500' : 'border-black'}
                ${isEditing ? 'focus:border-blue-600' : 'text-gray-600'}`}
            >
              <option value="" disabled>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <label className="absolute left-0 top-1 text-sm text-gray-500">
              Gender <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Company */}
          <div className="relative">
            <input
              type="text"
              name="company"
              value={profileData.company || ''}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Current Firm"
              className={`peer w-full border-b-2 bg-transparent pt-6 pb-2 placeholder-transparent focus:outline-none 
                ${isEditing && !profileData.company ? 'border-red-500' : 'border-black'}
                ${isEditing ? 'focus:border-blue-600' : 'text-gray-600'}`}
            />
            <label htmlFor="company" className="absolute left-0 top-1 text-sm text-gray-500 transition-all 
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
              peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
              Current Firm <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Background */}
          <div className="relative">
            <select
              name="background"
              value={profileData.background || ''}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full border-b-2 bg-transparent pt-6 pb-2 focus:outline-none 
                ${isEditing && !profileData.background ? 'border-red-500' : 'border-black'}
                ${isEditing ? 'focus:border-blue-600' : 'text-gray-600'}`}
            >
              <option value="" disabled>Current Role</option>
              {backgrounds.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
            </select>
            <label className="absolute left-0 top-1 text-sm text-gray-500">
              Current Role <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Location */}
          <div className="relative">
            <input
              type="text"
              name="location"
              value={profileData.location || ''}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Working Location"
              className={`peer w-full border-b-2 bg-transparent pt-6 pb-2 placeholder-transparent focus:outline-none 
                ${isEditing && !profileData.location ? 'border-red-500' : 'border-black'}
                ${isEditing ? 'focus:border-blue-600' : 'text-gray-600'}`}
            />
            <label htmlFor="location" className="absolute left-0 top-1 text-sm text-gray-500 transition-all 
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
              peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
              Working Location <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Experience */}
          <div className="relative">
            <select
              name="experience"
              value={profileData.experience || ''}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full border-b-2 bg-transparent pt-6 pb-2 focus:outline-none 
                ${isEditing && !profileData.experience ? 'border-red-500' : 'border-black'}
                ${isEditing ? 'focus:border-blue-600' : 'text-gray-600'}`}
            >
              <option value="" disabled>Total Experience</option>
              {experienceOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
            </select>
            <label className="absolute left-0 top-1 text-sm text-gray-500">
              Total Experience <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Phone */}
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={profileData.phone || ''}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Phone Number"
              className={`peer w-full border-b-2 bg-transparent pt-6 pb-2 placeholder-transparent focus:outline-none 
                ${isEditing && !profileData.phone ? 'border-red-500' : 'border-black'}
                ${isEditing ? 'focus:border-blue-600' : 'text-gray-600'}`}
            />
            <label htmlFor="phone" className="absolute left-0 top-1 text-sm text-gray-500 transition-all 
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
              peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
              Phone Number <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={profileData.email || ''}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Email"
              className={`peer w-full border-b-2 bg-transparent pt-6 pb-2 placeholder-transparent focus:outline-none 
                ${isEditing && !profileData.email ? 'border-red-500' : 'border-black'}
                ${isEditing ? 'focus:border-blue-600' : 'text-gray-600'}`}
            />
            <label htmlFor="email" className="absolute left-0 top-1 text-sm text-gray-500 transition-all 
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
              peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
              Email <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Notice Period */}
          <div className="relative">
            <select
              name="noticePeriod"
              value={profileData.noticePeriod || ''}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full border-b-2 bg-transparent pt-6 pb-2 focus:outline-none 
                ${isEditing && !profileData.noticePeriod ? 'border-red-500' : 'border-black'}
                ${isEditing ? 'focus:border-blue-600' : 'text-gray-600'}`}
            >
              <option value="" disabled>Notice Period</option>
              {noticePeriodOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
            </select>
            <label className="absolute left-0 top-1 text-sm text-gray-500">
              Notice Period <span className="text-red-500">*</span>
            </label>
          </div>

          {/* CTCs */}
          {[{ name: 'currentCTC', label: 'Current CTC' }, { name: 'expectedCTC', label: 'Expected CTC' }].map(({ name, label }) => (
            <div className="relative" key={name}>
              <select
                name={name}
                value={profileData[name] || ''}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full border-b-2 bg-transparent pt-6 pb-2 focus:outline-none 
                  ${isEditing && !profileData[name] ? 'border-red-500' : 'border-black'}
                  ${isEditing ? 'focus:border-blue-600' : 'text-gray-600'}`}
              >
                <option value="" disabled>{label}</option>
                {salaryOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
              </select>
              <label className="absolute left-0 top-1 text-sm text-gray-500">
                {label} <span className="text-red-500">*</span>
              </label>
            </div>
          ))}

          {/* Joining Date */}
          <div className="relative">
            <input
              type="date"
              name="joiningDate"
              value={profileData.joiningDate || ''}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full border-b-2 bg-transparent pt-6 pb-2 focus:outline-none 
                ${isEditing && !profileData.joiningDate ? 'border-red-500' : 'border-black'}
                ${isEditing ? 'focus:border-blue-600' : 'text-gray-600'}`}
            />
            <label htmlFor="joiningDate" className="absolute left-0 top-1 text-sm text-gray-500">
              Joining Date <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Exit Date / Present */}
          <div className="relative">
            {profileData.exitDatePresent ? (
              <input
                type="text"
                name="exitDate"
                value="Present"
                disabled
                className="w-full border-b-2 border-black bg-transparent pt-6 pb-2 text-gray-600"
              />
            ) : (
              <input
                type="date"
                name="exitDate"
                value={profileData.exitDate || ''}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full border-b-2 bg-transparent pt-6 pb-2 focus:outline-none 
                  ${isEditing && !profileData.exitDate ? 'border-red-500' : 'border-black'}
                  ${isEditing ? 'focus:border-blue-600' : 'text-gray-600'}`}
              />
            )}
            {isEditing && (
              <label className="flex items-center mt-2 text-sm">
                <input
                  type="checkbox"
                  name="exitDatePresent"
                  checked={profileData.exitDatePresent || false}
                  onChange={handleChange}
                  className="mr-2"
                />
                Still Working (Present)
              </label>
            )}
            <label htmlFor="exitDate" className="absolute left-0 top-1 text-sm text-gray-500">
              Exit Date <span className="text-red-500">*</span>
            </label>
          </div>
        </div>
      </section>

      {/* Section 2: Headline */}
      <section className="mb-12 space-y-4">
        <h2 className="text-xl font-semibold underline text-center">Professional Headline</h2>
        <p className="text-center text-gray-700 italic text-base font-medium">{headline}</p>
      </section>

      {/* Employment Details Section */}
            <section className="mb-12 space-y-8">
        <h2 className="text-xl font-semibold underline text-center">Employment Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Employment Type */}
          <div className="relative">
            <input
              type="text"
              name="employmentType"
              value={profileData.employmentType || ''}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Employment Type (Full-Time / Part-Time)"
              className={`peer w-full border-b-2 bg-transparent pt-6 pb-2 placeholder-transparent focus:outline-none
                ${isEditing && !profileData.employmentType ? 'border-red-500' : 'border-black'}
                ${isEditing ? 'focus:border-blue-600' : 'text-gray-600'}`}
            />
            <label htmlFor="employmentType" className="absolute left-0 top-1 text-sm text-gray-500 transition-all 
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
              peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
              Employment Type <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Joining Date */}
          <div className="relative">
            <input
              type="date"
              name="joiningDate"
              value={profileData.joiningDate || ''}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full border-b-2 bg-transparent pt-6 pb-2 focus:outline-none
                ${isEditing && !profileData.joiningDate ? 'border-red-500' : 'border-black'}
                ${isEditing ? 'focus:border-blue-600' : 'text-gray-600'}`}
            />
            <label htmlFor="joiningDate" className="absolute left-0 top-1 text-sm text-gray-500">
              Joining Date <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Exit Date or Present */}
          <div className="relative">
            {profileData.currentlyWorking ? (
              <input
                type="text"
                value="Present"
                disabled
                className="w-full border-b-2 border-black bg-transparent pt-6 pb-2 text-gray-600"
              />
            ) : (
              <input
                type="date"
                name="exitDate"
                value={profileData.exitDate || ''}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full border-b-2 bg-transparent pt-6 pb-2 focus:outline-none
                  ${isEditing && !profileData.exitDate ? 'border-red-500' : 'border-black'}
                  ${isEditing ? 'focus:border-blue-600' : 'text-gray-600'}`}
              />
            )}
            <label htmlFor="exitDate" className="absolute left-0 top-1 text-sm text-gray-500">
              Exit Date {profileData.currentlyWorking ? '' : <span className="text-red-500">*</span>}
            </label>
          </div>

          {/* Currently Working Checkbox */}
          {isEditing && (
            <div className="flex items-center space-x-3 mt-4">
              <input
                type="checkbox"
                id="currentlyWorking"
                name="currentlyWorking"
                checked={profileData.currentlyWorking || false}
                onChange={(e) =>
                  setProfileData((prev) => ({
                    ...prev,
                    currentlyWorking: e.target.checked,
                    exitDate: e.target.checked ? '' : prev.exitDate,
                  }))
                }
              />
              <label htmlFor="currentlyWorking" className="text-gray-700 text-sm">
                I am currently working here
              </label>
            </div>
          )}

          {/* Responsibilities */}
          <div className="relative col-span-2">
            <textarea
              name="responsibilities"
              value={profileData.responsibilities || ''}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Key Responsibilities (3 points)"
              className={`w-full border-b-2 bg-transparent pt-6 pb-2 focus:outline-none resize-none min-h-[80px]
                ${isEditing && !profileData.responsibilities ? 'border-red-500' : 'border-black'}
                ${isEditing ? 'focus:border-blue-600' : 'text-gray-600'}`}
            />
            <label htmlFor="responsibilities" className="absolute left-0 top-1 text-sm text-gray-500">
              Key Responsibilities <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Skills Used */}
          <div className="relative col-span-2">
            <textarea
              name="skillsUsed"
              value={profileData.skillsUsed || ''}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Skills Worked in the Role"
              className={`w-full border-b-2 bg-transparent pt-6 pb-2 focus:outline-none resize-none min-h-[80px]
                ${isEditing && !profileData.skillsUsed ? 'border-red-500' : 'border-black'}
                ${isEditing ? 'focus:border-blue-600' : 'text-gray-600'}`}
            />
            <label htmlFor="skillsUsed" className="absolute left-0 top-1 text-sm text-gray-500">
              Skills Used <span className="text-red-500">*</span>
            </label>
          </div>
        </div>
      </section>



      {/* Section 3: Additional Info */}
        <section className="space-y-8 mb-12">
          <h2 className="text-xl font-semibold underline text-center">Additional Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Career Gap */}
            <div className="relative">
              <select
                name="careerGap"
                value={profileData.careerGap || ''}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full border-b-2 bg-transparent pt-6 pb-2 focus:outline-none
                  ${isEditing && !profileData.careerGap ? 'border-red-500' : 'border-black'}
                  ${isEditing ? 'focus:border-blue-600' : 'text-gray-600'}`}
              >
                <option value="" disabled>Career Gap (Yes/No)</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <label htmlFor="careerGap" className="absolute left-0 top-1 text-sm text-gray-500">
                Career Gap <span className="text-red-500">*</span>
              </label>
            </div>

            {/* Gap Years */}
            <div className="relative">
              <select
                name="gapYears"
                value={profileData.gapYears || ''}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full border-b-2 bg-transparent pt-6 pb-2 focus:outline-none
                  ${isEditing && !profileData.gapYears ? 'border-red-500' : 'border-black'}
                  ${isEditing ? 'focus:border-blue-600' : 'text-gray-600'}`}
              >
                <option value="" disabled>Gap Years</option>
                {gapYearOptions.map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
              <label htmlFor="gapYears" className="absolute left-0 top-1 text-sm text-gray-500">
                Gap Years <span className="text-red-500">*</span>
              </label>
            </div>

            {/* LinkedIn URL */}
            <div className="relative">
              <input
                type="text"
                name="linkedin"
                value={profileData.linkedin || ''}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="LinkedIn URL"
                className={`peer w-full border-b-2 bg-transparent pt-6 pb-2 placeholder-transparent focus:outline-none
                  ${isEditing && !profileData.linkedin ? 'border-red-500' : 'border-black'}
                  ${isEditing ? 'focus:border-blue-600' : 'text-gray-600'}`}
              />
              <label
                htmlFor="linkedin"
                className="absolute left-0 top-1 text-sm text-gray-500 transition-all 
                  peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base 
                  peer-placeholder-shown:text-gray-400 peer-focus:top-1 
                  peer-focus:text-sm peer-focus:text-blue-600"
              >
                LinkedIn URL <span className="text-red-500">*</span>
              </label>
            </div>
            
          </div>
        </section>


      {/* Section 4: Admin Contact Info */}
      <section className="mt-16 border-t pt-6 text-center text-sm text-gray-600">
        <p>For any confusion or additional info, please reach out to:</p>
        <p className="font-medium">Rupesh Phanindra Sai Ande</p>
        <p>📞 +91 8712395259</p>
        <p>📧 srivyra@gmail.com | srivyra@outlook.com</p>
      </section>

      {isEditing && (
        <div className="text-center mt-10">
          <button onClick={handleSave} className="px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition duration-300">Save Profile</button>
        </div>
      )}

      {!isEditing && (
        <div className="text-center mt-10">
          <button onClick={() => setIsEditing(true)} className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300">Edit Profile</button>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;