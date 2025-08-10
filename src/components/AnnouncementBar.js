import React from 'react';
import { FaBullhorn } from 'react-icons/fa';

function AnnouncementBar() {
  const announcements = [
    { id: 1, title: 'New Batch Starting Soon', content: 'Join our August 2025 batch today!' },
    { id: 2, title: 'Free Webinar', content: 'Learn AI skills in our free session next week.' }
  ];

  return (
    <div className="flex items-center justify-center gap-3 w-full max-w-6xl mx-auto my-3">

      {/* Seats Left */}
      <div className="rounded-full border border-black px-5 py-2 bg-white shadow-sm flex items-center h-10">
        <span className="text-sm font-medium text-black">
          Seats left for current batch: <span className="text-red-500 font-bold">5</span>
        </span>
      </div>

      {/* Announcement Bar */}
      <section className="py-2 px-4 border border-black rounded-full overflow-hidden flex-1 h-10 flex items-center">
        <FaBullhorn className="text-black text-lg flex-shrink-0 mr-3" />
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {announcements.map((a) => (
            <span key={a.id} className="font-medium text-gray-700">
              📢 {a.title} — {a.content}
            </span>
          ))}
        </div>
      </section>

    {/* Seats right */}
    <div className="rounded-full border border-black px-5 py-2 bg-white shadow-sm flex items-center h-10">
    <span className="text-sm font-medium text-black">
        Current batch starts on: <span className="text-red-500 font-bold">22nd August 2025</span>
    </span>
    </div>

    </div>
  );
}

export default AnnouncementBar;
