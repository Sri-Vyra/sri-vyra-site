import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { FaLock } from 'react-icons/fa';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const practiceTracks = [
  {
    id: 'daily-announcements',
    title: 'Daily Announcements',
    emoji: '📢',
    problems: 'Important daily updates & mentor notes',
    accessKey: 'dailyAnnouncements',
    type: 'problem', 
  },
  {
    id: 'daily',
    title: 'Daily Challenges',
    emoji: '📆',
    problems: '1 Problem every day to build habit',
    accessKey: 'daily',
    type: 'problem',
  },
  {
    id: 'bigdata-concepts',
    title: 'BigData - Concepts',
    emoji: '🧠',
    problems: 'Theory behind Big Data systems',
    accessKey: 'bigdataConcepts',
    type: 'content', 
  },
  {
    id: 'pyspark-concepts',
    title: 'PySpark - Concepts',
    emoji: '🌀',
    problems: 'All theory about PySpark',
    accessKey: 'pysparkConcepts',
    type: 'content',
  },
  {
    id: 'python',
    title: 'Python Practice',
    emoji: '🐍',
    problems: '40+ Problems on Loops, Lists, Functions',
    accessKey: 'python',
    type: 'problem',
  },
  {
    id: 'sql',
    title: 'SQL Practice',
    emoji: '🛢️',
    problems: '80+ Queries on Joins, Aggregates, Subqueries',
    accessKey: 'sql',
    type: 'problem',
  },
  {
    id: 'bigdata-hadoop',
    title: 'BigData - Hadoop',
    emoji: '🐘',
    problems: 'Fundamentals of Hadoop system',
    accessKey: 'bigdataHadoop',
    type: 'problem',
  },
  {
    id: 'bigdata-sqoop',
    title: 'BigData - Sqoop',
    emoji: '🔄',
    problems: 'Moving data between Hadoop & RDBMS',
    accessKey: 'bigdataSqoop',
    type: 'problem',
  },
  {
    id: 'bigdata-hive',
    title: 'BigData - Hive',
    emoji: '🧬',
    problems: 'Querying Big Data using HiveQL',
    accessKey: 'bigdataHive',
    type: 'problem',
  },
  {
    id: 'pyspark-basic',
    title: 'PySpark - Basic',
    emoji: '💡',
    problems: 'Start your PySpark journey',
    accessKey: 'pysparkBasic',
    type: 'problem',
  },
  {
    id: 'pyspark-intermediate',
    title: 'PySpark - Intermediate',
    emoji: '📘',
    problems: 'Deeper concepts and use cases',
    accessKey: 'pysparkIntermediate',
    type: 'problem',
  },
  {
    id: 'pyspark-advanced',
    title: 'PySpark - Advanced',
    emoji: '📚',
    problems: 'Advanced coding & optimization',
    accessKey: 'pysparkAdvanced',
    type: 'problem',
  },
  {
    id: 'pyspark-aws',
    title: 'PySpark with AWS',
    emoji: '☁️',
    problems: 'Integration with AWS services',
    accessKey: 'pysparkAWS',
    type: 'problem',
  },
  {
    id: 'common',
    title: 'Common Interview Questions Kit',
    emoji: '🎯',
    problems: 'Most-asked HR + technical questions',
    accessKey: 'common',
    type: 'content',
  },
  {
    id: 'interview',
    title: 'Company Specific Problems',
    emoji: '🏢',
    problems: 'Curated problems for job interviews',
    accessKey: 'interview',
    type: 'content',
  },
];


export default function PracticePage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  // Fetch access flags from Firestore
  useEffect(() => {
    const fetchUserData = async () => {
      if (user?.uid) {
        const docRef = doc(db, 'users', user.uid);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          setUserData(snap.data());
        }
      }
    };
    fetchUserData();
  }, [user]);

  const handleClick = (id, hasAccess, type) => {
    if (!hasAccess) return;

    if (type === 'content') {
      navigate(`/content/${id}`); // new route
    } else {
      navigate(`/practice/${id}`);
    }
  };

  if (!userData) {
    return <p className="text-center py-20 text-gray-600">Loading your access...</p>;
  }

  return (
    <section className="min-h-screen bg-white px-6 md:px-12 py-20 text-center text-gray-800">
      <h1 className="text-4xl font-bold mb-10">Knowledge Hub</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {practiceTracks.map((track) => {
          const hasAccess = userData?.access?.[track.accessKey] === true;

          return (
            <div
              key={track.id}
              onClick={() => handleClick(track.id, hasAccess, track.type)}
              className={`relative rounded-2xl border border-gray-300 p-6 transition-transform transform hover:scale-105 bg-white shadow-md hover:shadow-xl cursor-pointer ${
                !hasAccess ? 'opacity-50 pointer-events-none' : ''
              }`}
            >
              <div className="text-5xl mb-3">{track.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
              <p className="text-gray-600 text-sm">{track.problems}</p>

              {!hasAccess && (
                <div className="absolute top-3 right-3 text-red-500">
                  <FaLock />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
