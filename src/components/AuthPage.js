import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import { Eye, EyeOff } from 'lucide-react';
import { db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';

function AuthPage({ isLogin = false }) {
  const navigate = useNavigate();
  const { login, signup } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateFields = () => {
    const newErrors = {};

    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';

    if (!isLogin) {
      if (!firstName) newErrors.firstName = 'First Name is required';
      if (!lastName) newErrors.lastName = 'Last Name is required';
      if (!phone) newErrors.phone = 'Phone Number is required';
      if (!location) newErrors.location = 'Location is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateFields()) return;

  const defaultAccess = {
    python: false,
    sql: false,
    interview: false,
    daily: false,
    common: false,
    pysparkBasic: false,
    pysparkIntermediate: false,
    pysparkAdvanced: false,
    pysparkAWS: false,
    bigdataHadoop: false,
    bigdataSqoop: false,
    bigdataHive: false,
    bigdataConcepts: false,
    pysparkConcepts: false,
    dailyAnnouncements: false,
  };

  try {
    if (isLogin) {
      const userCredential = await login(email, password);
      const user = userCredential.user;

      const userRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        const existingAccess = userData.access || {};
        const updatedAccess = { ...defaultAccess, ...existingAccess };

        const hasMissingFields = Object.keys(defaultAccess).some(
          (key) => updatedAccess[key] !== existingAccess[key]
        );

        if (hasMissingFields) {
          await setDoc(userRef, { access: updatedAccess }, { merge: true });
          console.log('User access fields updated for login');
        }

        localStorage.setItem('vyraUserProfile', JSON.stringify({
          phone: userData.phone || '',
          location: userData.location || '',
          firstName: userData.firstName || '',
          lastName: userData.lastName || '',
        }));

        localStorage.setItem('displayName', user.displayName || '');
        localStorage.setItem('access', JSON.stringify(updatedAccess));
      }

      toast.success('Logged in successfully!');
    } else {
      const userCredential = await signup(email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });

      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email,
        phone,
        location,
        firstName,
        lastName,
        createdAt: new Date(),
        access: defaultAccess,
      });

      localStorage.setItem('vyraUserProfile', JSON.stringify({ phone, location, firstName, lastName }));
      localStorage.setItem('displayName', `${firstName} ${lastName}`);
      localStorage.setItem('access', JSON.stringify(defaultAccess));

      toast.success('Account created successfully!');
    }
      navigate('/');
    } catch (err) {
      toast.error('Invalid credentials. Try again.');
      console.error(err);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-start justify-center px-6 py-2 pb-20 bg-white mt-16">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isLogin ? 'Login to Your Account' : 'Create an Account'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <>
              {/* First Name */}
              <div className="relative">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={`peer w-full border-b-2 ${
                    errors.firstName ? 'border-red-500' : 'border-black'
                  } bg-transparent pt-6 pb-2 placeholder-transparent focus:outline-none focus:border-blue-600 transition duration-300`}
                  placeholder="First Name"
                />
                <label className="absolute left-0 top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
                  First Name <span className="text-red-500">*</span>
                </label>
                {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
              </div>

              {/* Last Name */}
              <div className="relative">
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={`peer w-full border-b-2 ${
                    errors.lastName ? 'border-red-500' : 'border-black'
                  } bg-transparent pt-6 pb-2 placeholder-transparent focus:outline-none focus:border-blue-600 transition duration-300`}
                  placeholder="Last Name"
                />
                <label className="absolute left-0 top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
                  Last Name <span className="text-red-500">*</span>
                </label>
                {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`peer w-full border-b-2 ${
                    errors.phone ? 'border-red-500' : 'border-black'
                  } bg-transparent pt-6 pb-2 placeholder-transparent focus:outline-none focus:border-blue-600 transition duration-300`}
                  placeholder="Phone Number"
                />
                <label className="absolute left-0 top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>

              {/* Location */}
              <div className="relative">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className={`peer w-full border-b-2 ${
                    errors.location ? 'border-red-500' : 'border-black'
                  } bg-transparent pt-6 pb-2 placeholder-transparent focus:outline-none focus:border-blue-600 transition duration-300`}
                  placeholder="Location"
                />
                <label className="absolute left-0 top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
                  Location <span className="text-red-500">*</span>
                </label>
                {errors.location && <p className="text-xs text-red-500 mt-1">{errors.location}</p>}
              </div>
            </>
          )}

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`peer w-full border-b-2 ${
                errors.email ? 'border-red-500' : 'border-black'
              } bg-transparent pt-6 pb-2 placeholder-transparent focus:outline-none focus:border-blue-600 transition duration-300`}
              placeholder="Email"
            />
            <label className="absolute left-0 top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
              Email <span className="text-red-500">*</span>
            </label>
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`peer w-full border-b-2 ${
                errors.password ? 'border-red-500' : 'border-black'
              } bg-transparent pt-6 pb-2 placeholder-transparent focus:outline-none focus:border-blue-600 transition duration-300 pr-10`}
              placeholder="Password"
            />
            <label className="absolute left-0 top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
              Password <span className="text-red-500">*</span>
            </label>
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-6 cursor-pointer text-gray-500 hover:text-gray-800"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition duration-300"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          {isLogin ? (
            <>
              Don’t have an account?{' '}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign up here
              </Link>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login here
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default AuthPage;
