import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const batchId = '25EL01'; // Will make dynamic later

  const handleSignup = async () => {
    setLoading(true);
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCred.user.uid;

      const batchRef = doc(db, 'batches', batchId);
      const batchSnap = await getDoc(batchRef);
      if (!batchSnap.exists()) throw new Error('Batch not found in Firestore');

      const currentCount = batchSnap.data().studentCounter || 1;
      const studentId = 'A' + String(currentCount).padStart(4, '0');
      const fullCode = `${batchId}-${studentId}`;

      await setDoc(doc(db, 'users', uid), {
        uid,
        name,
        email,
        phone,
        batchId,
        studentId,
        fullCode,
        createdAt: new Date()
      });

      await updateDoc(batchRef, {
        studentCounter: currentCount + 1
      });

      alert(`Signup successful!\nStudent ID: ${fullCode}`);
    } catch (err) {
      console.error(err);
      alert('Signup failed: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-start justify-center px-6 py-16 bg-white mt-12">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Signup</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignup();
          }}
          className="space-y-6"
        >
          {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="peer w-full border-b-2 border-black bg-transparent pt-6 pb-2 placeholder-transparent focus:outline-none focus:border-blue-600 transition duration-300"
              placeholder="Full Name"
            />
            <label className="absolute left-0 top-1 text-sm text-gray-500 transition-all 
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-gray-400 
              peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Full Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="peer w-full border-b-2 border-black bg-transparent pt-6 pb-2 placeholder-transparent focus:outline-none focus:border-blue-600 transition duration-300"
              placeholder="Email"
            />
            <label className="absolute left-0 top-1 text-sm text-gray-500 transition-all 
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-gray-400 
              peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Email
            </label>
          </div>

          {/* Phone */}
          <div className="relative">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="peer w-full border-b-2 border-black bg-transparent pt-6 pb-2 placeholder-transparent focus:outline-none focus:border-blue-600 transition duration-300"
              placeholder="Phone"
            />
            <label className="absolute left-0 top-1 text-sm text-gray-500 transition-all 
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-gray-400 
              peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Phone Number
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="peer w-full border-b-2 border-black bg-transparent pt-6 pb-2 placeholder-transparent focus:outline-none focus:border-blue-600 transition duration-300"
              placeholder="Password"
            />
            <label className="absolute left-0 top-1 text-sm text-gray-500 transition-all 
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-gray-400 
              peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition duration-300 disabled:opacity-50"
          >
            {loading ? 'Signing up...' : 'Signup'}
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
