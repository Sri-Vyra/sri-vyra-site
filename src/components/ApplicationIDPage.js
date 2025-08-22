import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../components/AuthContext';
import { db } from '../components/firebase';
import { doc, getDoc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';
import toast from 'react-hot-toast';

function ApplicationIDPage() {
  const { user } = useAuth();
  const [showAppId, setShowAppId] = useState(false);
  const [profile, setProfile] = useState({ firstName: '', lastName: '', email: '', phone: '' });
  const [applicationId, setApplicationId] = useState('');
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  const [verifyId, setVerifyId] = useState('');
  const [verifiedProfile, setVerifiedProfile] = useState(null);
  const [verifying, setVerifying] = useState(false);

  const [activeCard, setActiveCard] = useState(null); // 'myId' | 'verifyId'

  // Refs for smooth accordion effect
  const myIdRef = useRef(null);
  const verifyRef = useRef(null);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }
    const fetchProfile = async () => {
      try {
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const data = userSnap.data();
          setProfile({
            firstName: data.firstName || '',
            lastName: data.lastName || '',
            email: data.email || '',
            phone: data.phone || '',
          });
          if (data.applicationId) {
            setApplicationId(data.applicationId);
            setVerified(true);
          }
        }
      } catch (err) {
        console.error(err);
        toast.error('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [user]);

  const generateUniqueApplicationId = async () => {
    const year = new Date().getFullYear().toString().slice(-2);
    const batchCode = 'A';
    const prefix = `SV${year}${batchCode}-SRV`;

    let uniqueId, exists = true;
    while (exists) {
      const randomNum = Math.floor(Math.random() * 900 + 100);
      uniqueId = `${prefix}${randomNum}`;

      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('applicationId', '==', uniqueId));
      const querySnap = await getDocs(q);
      exists = !querySnap.empty;
    }
    return uniqueId;
  };

  const handleGetApplicationId = async (e) => {
    e.preventDefault();
    if (!user) return toast.error('User not logged in');

    try {
      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists() && userSnap.data().applicationId) {
        setApplicationId(userSnap.data().applicationId);
        setVerified(true);
        toast.success('You already have an Application ID!');
      } else {
        const newId = await generateUniqueApplicationId();
        await setDoc(userRef, { applicationId: newId }, { merge: true });
        setApplicationId(newId);
        setVerified(true);
        toast.success('Application ID generated successfully!');
      }
    } catch (err) {
      console.error(err);
      toast.error('Failed to generate Application ID');
    }
  };

  const handleVerifyApplicationId = async (e) => {
    e.preventDefault();
    if (!verifyId) return toast.error('Please enter an Application ID');

    setVerifying(true);
    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('applicationId', '==', verifyId));
      const querySnap = await getDocs(q);

      if (querySnap.empty) {
        setVerifiedProfile(null);
        toast.error('No user found with this Application ID');
      } else {
        const data = querySnap.docs[0].data();
        setVerifiedProfile({
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          email: data.email || '',
          phone: data.phone || '',
          applicationId: data.applicationId || '',
        });
        toast.success('User found!');
      }
    } catch (err) {
      console.error(err);
      toast.error('Failed to verify Application ID');
    } finally {
      setVerifying(false);
    }
  };

  if (loading) return <p className="text-center mt-12">Loading...</p>;

  const FloatingInput = ({ label, value, readOnly = false }) => (
    <div className="relative">
      <input
        type="text"
        value={value}
        readOnly={readOnly}
        placeholder={label}
        className="peer w-full border-b-2 border-black bg-transparent pt-6 pb-2 placeholder-transparent focus:outline-none focus:border-blue-600 transition duration-300"
      />
      <label className="absolute left-0 top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
        {label}
      </label>
    </div>
  );

  return (
    <div className="min-h-[90vh] flex flex-col items-center px-6 py-12 bg-white space-y-8">

      <h1 className="text-4xl font-bold text-center mb-8">Application ID Portal</h1>

      <div className="w-full max-w-3xl grid md:grid-cols-2 gap-6">

        <div
            className={`bg-white shadow-lg rounded-xl p-6 cursor-pointer transition-all w-full max-w-md mx-auto ${
                activeCard === 'myId' ? 'scale-105 border-2 border-blue-600' : 'hover:scale-105'
            }`}
            onClick={() => setActiveCard(activeCard === 'myId' ? null : 'myId')}
            >
            <h2 className="text-2xl font-semibold mb-2 text-center">Your Application ID</h2>

            <div
                ref={myIdRef}
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                activeCard === 'myId' ? 'max-h-[1000px]' : 'max-h-0'
                }`}
            >
                <form
                onSubmit={(e) => {
                    e.stopPropagation(); // prevent card click
                    handleGetApplicationId(e);
                }}
                className="mt-4 space-y-4"
                onClick={(e) => e.stopPropagation()} // prevent card collapse on input click
                >
                <FloatingInput label="First Name" value={profile.firstName} readOnly />
                <FloatingInput label="Last Name" value={profile.lastName} readOnly />
                <FloatingInput label="Email" value={profile.email} readOnly />
                <FloatingInput label="Phone" value={profile.phone} readOnly />

                <button
                    type="submit"
                    className="w-full py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition duration-300 font-semibold"
                >
                    {verified ? 'View My Application ID' : 'Generate Application ID'}
                </button>

                {verified && (
  <div className="mt-4 p-4 bg-gray-50 rounded-xl flex flex-col items-center space-y-2 w-3/4 mx-auto">
    <p className="font-semibold text-center">Application ID</p>
    <div className="flex items-center justify-center space-x-2">
      <p className="text-xl font-bold text-green-700">
        {showAppId ? applicationId : '••••••••••••'}
      </p>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setShowAppId(!showAppId);
        }}
        className="text-gray-600 hover:text-gray-800"
      >
        {showAppId ? 'Hide' : 'Show'}
      </button>
    </div>
  </div>
)}
                </form>
            </div>
            </div>

            {/* ===== Card: Verify Application ID ===== */}
            <div
            className={`bg-white shadow-lg rounded-xl p-6 cursor-pointer transition-all ${
                activeCard === 'verifyId' ? 'scale-105 border-2 border-blue-600' : 'hover:scale-105'
            }`}
            onClick={() => setActiveCard(activeCard === 'verifyId' ? null : 'verifyId')}
            >
            <h2 className="text-2xl font-semibold mb-2 text-center">Verify Application ID</h2>

            <div
                ref={verifyRef}
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                activeCard === 'verifyId' ? 'max-h-[1000px]' : 'max-h-0'
                }`}
            >
                <form
                onSubmit={(e) => {
                    e.stopPropagation();
                    handleVerifyApplicationId(e);
                }}
                className="mt-4 space-y-4"
                onClick={(e) => e.stopPropagation()}
                >
                <div className="relative">
                    <input
                    type="text"
                    placeholder="Enter Application ID"
                    value={verifyId}
                    onChange={(e) => setVerifyId(e.target.value)}
                    className="peer w-full border-b-2 border-black bg-transparent pt-6 pb-2 placeholder-transparent focus:outline-none focus:border-blue-600 transition duration-300"
                    />
                    <label className="absolute left-0 top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
                    Application ID
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={verifying}
                    className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300 font-semibold"
                >
                    {verifying ? 'Verifying...' : 'Verify'}
                </button>

                {verifiedProfile && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-xl text-center space-y-1">
                    <p className="font-semibold">User Profile</p>
                    <p>{verifiedProfile.firstName} {verifiedProfile.lastName}</p>
                    <p>{verifiedProfile.email}</p>
                    <p>{verifiedProfile.phone}</p>
                    <p className="font-bold text-green-700">{verifiedProfile.applicationId}</p>
                    </div>
                )}
                </form>
            </div>
            </div>
      </div>
    </div>
  );
}

export default ApplicationIDPage;
