import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaCloud,
  FaBriefcase,
  FaDownload,
  FaYoutube,
  FaLink,
} from "react-icons/fa";

function SyllabusPage() {
  const navigate = useNavigate();
  const [today, setToday] = useState("");

  useEffect(() => {
    const d = new Date();
    const formatted = d.toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
    });
    setToday(formatted);
  }, []);

  // Timeline Data
  const syllabus = [
    {
    phase: "Phase 1 – Foundation (Weeks 1–6)",
    objective: "Build strong fundamentals in Hadoop, Hive, Sqoop, SQL & Python.",
    icon: <FaBookOpen />,
    color: "from-yellow-400 to-yellow-600",
    schedule: [
        [
        "1",
        "Aug-24",
        "Sun",
        "Orientation + Big Data Overview",
        "Hadoop Basics + Ecosystem Introduction",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "", // resource
        ],
        [
        "2",
        "Aug-30",
        "Sat",
        "Hadoop Deep Dive – Architecture",
        "HDFS Concepts + Block Storage",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1", // join link
        "", // class not yet completed
        ],
        [
        "2",
        "Aug-31",
        "Sun",
        "Linux Basics for Hadoop (File ops, users, perms)",
        "Linux Advanced + Common Admin Commands",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "", // resource
        ],
        [
        "3",
        "Sep-06",
        "Sat",
        "Hadoop CLI Commands",
        "HDFS Hands-on (Put/Get/Copy/Move/Delete)",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "", // not yet completed
        ],
        [
        "3",
        "Sep-07",
        "Sun",
        "Hadoop Daemons & Cluster Setup Basics",
        "Hadoop Job Execution Lifecycle",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "", // not yet completed
        ],
        [
        "4",
        "Sep-13",
        "Sat",
        "Sqoop Basics + Import/Export",
        "Sqoop Advanced (Incremental, Joins, Eval)",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "", // not yet completed
        ],
        [
        "4",
        "Sep-14",
        "Sun",
        "Hive Overview + Architecture",
        "Hive DDL (Create DB, Tables, Partitions)",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "", // not yet completed
        ],
        [
        "5",
        "Sep-20",
        "Sat",
        "Hive DML (Insert, Select, Joins)",
        "Hive Functions + Optimization",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "", // not yet completed
        ],
        [
        "5",
        "Sep-21",
        "Sun",
        "Python Basics (Variables, Datatypes, Operators)",
        "Python Flow Control (if, loops, functions)",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "", // not yet completed
        ],
        [
        "6",
        "Sep-27",
        "Sat",
        "Python Collections + File Handling",
        "Python OOPs (Class, Objects, Inheritance)",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "", // not yet completed
        ],
        [
        "6",
        "Sep-28",
        "Sun",
        "SQL Basics (DDL, DML, Joins)",
        "SQL Advanced (Window Functions, Subqueries)",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "", // not yet completed
        ],
    ],
    },
    {
    phase: "Phase 2 – Game Changer (Weeks 7–12)",
    objective: "Master Spark Core, RDD, DataFrames, SQL, and Cloud Deployment.",
    icon: <FaCloud />,
    color: "from-purple-400 to-purple-600",
    schedule: [
        // Week 7
        ["7", "Oct-04", "Sat", "Spark Introduction", "Spark Core Concepts", "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1", ""],
        ["7", "Oct-05", "Sun", "RDD Basics", "RDD Actions", "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1", ""],

        // Week 8
        ["8", "Oct-11", "Sat", "RDD Transformations", "Key-Value Pair RDDs", "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1", ""],
        ["8", "Oct-12", "Sun", "Advanced RDD Operations", "Persist & Cache", "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1", ""],

        // Week 9
        ["9", "Oct-18", "Sat", "Spark DataFrames", "Schema & Operations", "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1", ""],
        ["9", "Oct-19", "Sun", "DataFrame Joins", "DataFrame Aggregations", "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1", ""],

        // Week 10
        ["10", "Oct-25", "Sat", "Spark SQL – Introduction", "Writing SQL Queries", "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1", ""],
        ["10", "Oct-26", "Sun", "Spark SQL Joins", "Window Functions", "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1", ""],

        // Week 11
        ["11", "Nov-01", "Sat", "Spark File Processing", "Working with JSON/Parquet/CSV", "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1", ""],
        ["11", "Nov-02", "Sun", "Spark Performance Tuning", "Broadcast & Partitioning", "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1", ""],

        // Week 12
        ["12", "Nov-08", "Sat", "Spark Deployment", "Standalone, YARN, Kubernetes", "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1", ""],
        ["12", "Nov-09", "Sun", "Spark on Cloud (AWS/Azure/GCP)", "Final Spark Recap + Q&A", "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1", ""],
    ],
    },
    {
    phase: "Phase 3 – Advanced + Job Hunt (Weeks 13–18)",
    objective:
        "Hands-on with AWS, Azure, GCP, Job Preparation & Mock Interviews.",
    icon: <FaBriefcase />,
    color: "from-green-400 to-green-600",
    schedule: [
        // Week 13
        [
        "13",
        "Nov-15",
        "Sat",
        "AWS Overview & Setup",
        "EC2 + S3 Deep Dive",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "",
        ],
        [
        "13",
        "Nov-16",
        "Sun",
        "IAM, VPC & Security",
        "Hands-on Labs",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "",
        ],

        // Week 14
        [
        "14",
        "Nov-22",
        "Sat",
        "Azure Overview",
        "Azure Data Lake & Databricks",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "",
        ],
        [
        "14",
        "Nov-23",
        "Sun",
        "Azure SQL + Synapse",
        "Hands-on with Azure Pipelines",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "",
        ],

        // Week 15
        [
        "15",
        "Nov-29",
        "Sat",
        "GCP Overview",
        "BigQuery + DataProc",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "",
        ],
        [
        "15",
        "Nov-30",
        "Sun",
        "Cloud Dataflow & ML APIs",
        "Hands-on Labs",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "",
        ],

        // Week 16
        [
        "16",
        "Dec-06",
        "Sat",
        "Resume Preparation",
        "LinkedIn + GitHub Optimization",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "",
        ],
        [
        "16",
        "Dec-07",
        "Sun",
        "Job Application Strategy",
        "Mock Test 1",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "",
        ],

        // Week 17
        [
        "17",
        "Dec-13",
        "Sat",
        "Interview Q&A – Technical",
        "Mock Interview Prep",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "",
        ],
        [
        "17",
        "Dec-14",
        "Sun",
        "System Design Basics",
        "Mock Test 2",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "",
        ],

        // Week 18
        [
        "18",
        "Dec-20",
        "Sat",
        "Mock Interview Round 1",
        "Mock Interview Round 2",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "",
        ],
        [
        "18",
        "Dec-21",
        "Sun",
        "Interview Q&A",
        "Final Review + Wrap-Up",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "",
        ],
    ],
    }
  ];

  // Flatten sessions for progress calc
  const allSessions = syllabus.flatMap((p) => p.schedule);

  // ✅ Progress Tracking State
  const [completed, setCompleted] = useState(() => {
    const stored = localStorage.getItem("completedSessions");
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    localStorage.setItem("completedSessions", JSON.stringify(completed));
  }, [completed]);

  const toggleCompletion = (id) => {
    setCompleted((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Progress % calc
  const totalSessions = allSessions.length;
  const completedCount = Object.values(completed).filter(Boolean).length;
  const progress = totalSessions
    ? Math.round((completedCount / totalSessions) * 100)
    : 0;

  // Download PDF
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/syllabus.pdf";
    link.download = "SriVyra_Syllabus.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Back + Download */}
      <div className="flex justify-between items-center p-6">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
        >
          ← Back to Home
        </button>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
        >
          <FaDownload /> Download PDF
        </button>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-500 via-pink-500 to-red-500 text-white text-center py-10 shadow-lg rounded-b-3xl">
        <h1 className="text-4xl font-bold mb-3">Sri Vyra Cohort A25</h1>
        <p className="text-lg">
          Your complete roadmap to mastering Big Data & Cloud 🚀
        </p>
      </div>

      {/* ✅ Progress Bar */}
      <div className="w-full max-w-3xl mx-auto mt-8 px-6">
        <div className="w-full bg-gray-200 rounded-full h-6 shadow-inner">
          <div
            className="bg-green-500 h-6 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center mt-2 font-medium">
          {completedCount} / {totalSessions} sessions completed ({progress}%)
        </p>
      </div>

      {/* Phases */}
      <div className="w-full max-w-10xl mx-auto p-6 space-y-12">
        {syllabus.map((phase, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="shadow-md rounded-2xl overflow-hidden bg-white"
          >
            {/* Phase Header */}
            <div
              className={`bg-gradient-to-r ${phase.color} text-white text-center py-4 rounded-t-2xl`}
            >
              <h2 className="text-2xl font-semibold">{phase.phase}</h2>
              <p className="text-sm">{phase.objective}</p>
            </div>

            {/* Full-width Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px] border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-2">Week</th>
                    <th className="border p-2">Date</th>
                    <th className="border p-2">Day</th>
                    <th className="border p-2">Session 1</th>
                    <th className="border p-2">Session 2</th>
                    <th className="border p-2">Join Link</th>
                    <th className="border p-2">Resource</th>
                    <th className="border p-2">✅ Done</th>
                  </tr>
                </thead>
                <tbody>
                  {phase.schedule.map((row, i) => {
                    const id = `${phase.phase}-${i}`; // unique ID
                    const isToday = row[1] === today;

                    return (
                      <tr
                        key={i}
                        className={`${
                          isToday ? "bg-yellow-100" : "hover:bg-purple-50"
                        } transition text-center`}
                      >
                        {row.slice(0, 5).map((cell, j) => (
                          <td key={j} className="border p-2">
                            {cell}
                          </td>
                        ))}

                        {/* Join Link */}
                        <td className="border p-2">
                          {row[5] ? (
                            <a
                              href={row[5]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-1"
                            >
                              <FaLink /> Join
                            </a>
                          ) : (
                            <span className="text-gray-500 italic">
                              Not Available
                            </span>
                          )}
                        </td>

                        {/* Resource */}
                        <td className="border p-2">
                          {row[6] ? (
                            <a
                              href={row[6]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-red-500 hover:text-red-700 flex items-center justify-center gap-1"
                            >
                              <FaYoutube /> Watch
                            </a>
                          ) : (
                            <span className="text-gray-500 italic">
                              Class not yet completed
                            </span>
                          )}
                        </td>

                        {/* ✅ Completion Checkbox */}
                        <td className="border p-2">
                          <input
                            type="checkbox"
                            checked={!!completed[id]}
                            onChange={() => toggleCompletion(id)}
                            className="w-5 h-5 accent-green-600 cursor-pointer"
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SyllabusPage;