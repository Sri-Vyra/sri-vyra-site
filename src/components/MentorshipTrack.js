import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function MentorshipTrack() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800 px-6 md:px-16 py-20 max-w-7xl mx-auto">
        {/* 🔙 Back Button */}
        <button
            onClick={() => navigate('/courses')}
            className="mb-8 text-sm text-blue-600 hover:underline flex items-center"
        >
            ← Back to Courses
        </button>
        
      {/* Payment / Title / Referral */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
        {/* Left - Payment */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-100 px-5 py-3 rounded-xl shadow text-center text-sm font-semibold"
        >
          💳 Payment Structure <br />
          <span className="text-blue-600 font-bold leading-relaxed">
            Slot Booking: ₹999 <br />
            After 12 Hours: ₹6,000 <br />
            After 30 Hours: ₹6,000
            </span>
        </motion.div>

        {/* Back to Courses */}


        {/* Center - Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Mentorship Track</h1>
          <p className="text-lg text-blue-600 font-semibold">
            Discount Price: ₹12,999 <span className="text-gray-500 text-sm">(Actual: ₹19,999)</span>
          </p>
        </div>

        {/* Right - Referral */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-yellow-100 px-5 py-3 rounded-xl shadow text-center text-sm font-semibold"
        >
          🎁 Referral Bonus <br />
          <span className="text-red-600 font-bold">₹2,000</span>
        </motion.div>
      </div>

      {/* Course Details in Two Columns */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        {/* Left Column */}
        <div>
          <h2 className="text-xl font-semibold underline text-center mb-3">🗓️ Duration</h2>
          <p className="text-center text-gray-700 mb-8">4 Months of personalized 1-on-1 mentorship</p>

          <h2 className="text-xl font-semibold underline text-center mb-3">🧰 Topics Covered</h2>
          <p className="text-center text-gray-700">
            Python, SQL, Hadoop, Hive <br />
            Sqoop, Spark, PySpark, SparkSQL <br />
            AWS, Azure, GCP
          </p>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-xl font-semibold underline text-center mb-3">🤝 Job Support</h2>
          <p className="text-center text-gray-700 mb-8">
            8 Months of premium-level support with referrals, <br />
            1-on-1 sessions, and mock calls
          </p>

          <h2 className="text-xl font-semibold underline text-center mb-3">🎤 Mock Interview Structure</h2>
          <ul className="list-disc text-sm text-center space-y-1 text-gray-700">
            Technical Round 1 – 20 mins <br />
            Technical Round 2 – 60 mins <br />
            1-on-1 On-Call Prep <br />
            Referral Drives <br />
            Exclusive Project Guidance <br />
          </ul>
        </div>
      </div>

      {/* Mentor Quote */}
      <div className="bg-gray-100 p-6 rounded-xl mb-12 shadow">
        <p className="italic text-gray-700 text-center max-w-2xl mx-auto">
          “At Sri Vyra, we don’t just teach tools — we guide learners to rise with discipline, confidence, and real-world readiness.”
        </p>
        <p className="text-right text-sm mt-4 text-gray-600">&mdash; Rupesh Phanindra Sai, Mentor</p>
      </div>

      {/* CTA Button */}
      <div className="text-center mb-20">
        <button
          onClick={() => navigate('/register')}
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition text-lg font-semibold"
        >
          📥 Register for Mentorship Track
        </button>
      </div>

      {/* Full Syllabus */}
      <div className="border-t border-gray-300 pt-10">
        <h2 className="text-3xl font-bold mb-10 text-center">📖 Full Syllabus</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6 border-r border-gray-300 pr-6"
          >
            <div>
              <h3 className="text-center text-lg font-semibold underline mb-2">🐍 Python</h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                <li>Introduction</li>
                <li>Input and Output</li>
                <li>Variables, Operators, Keywords</li>
                <li>Data Types, Conditional Statements</li>
                <li>Python Loops</li>
                <li>Strings, Lists, Tuples</li>
                <li>Dictionaries, Sets, Arrays</li>
                <li>List Comprehension</li>
              </ul>
            </div>

            <div>
              <h3 className="text-center text-lg font-semibold underline mb-2">🗄️ MySQL</h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                <li>SQL Basics, Data Types, Operators</li>
                <li>DDL, DML, DQL, DCL, TCL</li>
                <li>Database & Table Management</li>
                <li>Advanced Queries</li>
                <li>Clauses, Joins, Constraints</li>
                <li>Subqueries, Views, Indexes</li>
                <li>Window Functions, SQL Injections</li>
              </ul>
            </div>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 border-r border-gray-300 px-6"
          >
            <div>
              <h3 className="text-center text-lg font-semibold underline mb-2">🧱 Hadoop</h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                <li>Big Data Evolution</li>
                <li>Hadoop Architecture</li>
                <li>HDFS, Linux Commands</li>
                <li>Cluster Setup</li>
                <li>Edge Node Integration</li>
              </ul>
            </div>

            <div>
              <h3 className="text-center text-lg font-semibold underline mb-2">📥 Sqoop</h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                <li>Sqoop Imports & Incrementals</li>
                <li>Hive, Cloud, Warehouse Integration</li>
                <li>Jobs, Mappers, Automation</li>
                <li>Password File Automation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-center text-lg font-semibold underline mb-2">🍯 Hive</h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                <li>HQL Basics & Table Operations</li>
                <li>Data Types, File Formats</li>
                <li>Joins, Unions, Partitions</li>
                <li>Windowing, Views, Indexes</li>
                <li>UDFs, Integrations, Security</li>
              </ul>
            </div>
          </motion.div>

          {/* Column 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 pl-6"
          >
            <div>
              <h3 className="text-center text-lg font-semibold underline mb-2">⚡ PySpark</h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                <li>RDDs & DataFrames</li>
                <li>Transformations & Actions</li>
                <li>Spark DSL, File Format Handling</li>
                <li>Complex Data Processing</li>
              </ul>
            </div>

            <div>
              <h3 className="text-center text-lg font-semibold underline mb-2">🧪 Spark SQL</h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                <li>HQL + SQL in Spark Context</li>
                <li>Functions, Windowing, Views</li>
                <li>Query Tuning</li>
              </ul>
            </div>

            <div>
              <h3 className="text-center text-lg font-semibold underline mb-2">☁️ AWS</h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                <li>S3, EC2, IAM, VPC</li>
                <li>Glue, Athena, Redshift</li>
                <li>DMS, CloudWatch, KMS</li>
                <li>EMR, Step Functions</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default MentorshipTrack;
