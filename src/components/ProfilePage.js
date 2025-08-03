import React from 'react';
import { useAuth } from './AuthContext';

function ProfilePage() {
  const { user } = useAuth();
  const profileData = JSON.parse(localStorage.getItem('vyraUserProfile')) || {};
  const course = localStorage.getItem('course') || 'Not selected';
  const slotConfirmed = localStorage.getItem('slotConfirmed') || 'Pending';
  const regDate = localStorage.getItem('registrationDate') || new Date().toLocaleDateString();

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">👤 Your Profile</h2>
      <div className="bg-white shadow rounded-xl p-6 space-y-4 text-sm md:text-base">
        <div>
          <p className="font-semibold">Full Name</p>
          <p>{user?.displayName || '—'}</p>
        </div>
        <div>
          <p className="font-semibold">Email</p>
          <p>{user?.email}</p>
        </div>
        <div>
          <p className="font-semibold">Phone Number</p>
          <p>{profileData.phone || '—'}</p>
        </div>
        <div>
          <p className="font-semibold">Location</p>
          <p>{profileData.location || '—'}</p>
        </div>
        <hr className="my-2" />
        <div>
          <p className="font-semibold">🏷️ Course Enrolled</p>
          <p>{course}</p>
        </div>
        <div>
          <p className="font-semibold">🧾 Slot Confirmed</p>
          <p>{slotConfirmed}</p>
        </div>
        <div>
          <p className="font-semibold">📅 Registration Date</p>
          <p>{regDate}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
