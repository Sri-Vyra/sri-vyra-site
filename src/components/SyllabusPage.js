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
  const [selectedCohort, setSelectedCohort] = useState("");

  useEffect(() => {
    const d = new Date();
    const formatted = d.toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
    });
    setToday(formatted);
  }, []);

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
        "https://youtu.be/ueDqxmZuP20", // resource
        ],
        [
        "2",
        "Aug-30",
        "Sat",
        "Big Data Evolution",
        "Cluster Management",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1", // join link
        "https://www.youtube.com/watch?v=Jo4IZxQYVZE", // class not yet completed
        ],
        [
        "2",
        "Aug-31",
        "Sun",
        "Linux Basics for Hadoop (File ops, users, perms)",
        "Linux Advanced + Hadoop Basic commands",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "https://www.youtube.com/watch?v=S5I-Ji_L-38", // resource
        ],
        [
        "3",
        "Sep-06",
        "Sat",
        "Hadoop CLI Commands",
        "HDFS Hands-on (Put/Get/Copy/Move/Delete)",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "https://youtu.be/pdSaSSRDP14", // not yet completed
        ],
        [
        "3",
        "Sep-07",
        "Sun",
        "Hadoop Daemons & Cluster Setup Basics",
        "Hadoop Job Execution Lifecycle",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "https://youtu.be/RmYSOZQMMyk", // not yet completed
        ],
        [
        "4",
        "Sep-13",
        "Sat",
        "Sqoop Basics + Import/Export",
        "Sqoop Advanced (Incremental, Joins, Eval)",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "https://youtu.be/Ma8FeR_IWFI", // not yet completed
        ],
        [
        "4",
        "Sep-14",
        "Sun",
        "Hive Overview + Architecture",
        "Hive DDL (Create DB, Tables, Partitions)",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "https://youtu.be/1CBmIpVyf1s", // not yet completed
        ],
        [
        "5",
        "Sep-20",
        "Sat",
        "SQL Concepts",
        "SQL Basics",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "https://youtu.be/50HC1kq27-M", // not yet completed
        ],
        [
        "5",
        "Sep-21",
        "Sun",
        "SQL Joins + Concepts",
        "SQL HandsOn",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "https://youtu.be/uk0wFxAYLFU", // not yet completed
        ],
        [
        "6",
        "Sep-27",
        "Sat",
        "SQL Window Functions + Concepts",
        "SQL HandsOn",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "https://youtu.be/Uv6wJhAThIM", // not yet completed
        ],
        [
        "7",
        "Oct-4",
        "Sat",
        "Python Basics: Variables, data types etc",
        "Python HandsOn",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "https://youtu.be/H26vahpOeoo", // not yet completed
        ],
        [
        "7",
        "Oct-5",
        "Sun",
        "Python Concepts: Statements, loops, DS",
        "Python HandsOn",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "https://youtu.be/FA7gIQ5GRMY", // not yet completed
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
        ["7", "Oct-11", "Sat", "Spark Introduction", "Spark Core Clusters", "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1", "https://youtu.be/Rk2j-TgDF6A"],
        ["7", "Oct-12", "Sun", "Spark Lazy Evaluation", "Spark Memory Management", "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1", "https://youtu.be/FILcCa1_fcg"],

        // Week 8
        ["8", "Oct-18", "Sat", "RDD Transformations", "Key-Value Pair RDDs", "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1", "https://youtu.be/K9xrX8axmKg"],
        ["8", "Oct-19", "Sun", "RDD Operations", "Introduction to programming", "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1", "https://youtu.be/M4717j_4tAk"],

        // Week 9
        ["9", "Oct-25", "Sat", "Spark DataFrames", "Schema & Operations", "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1", "https://youtu.be/gQCA4QjAr_Y"],
        ["9", "Oct-26", "Sun", "DataFrame Joins", "DataFrame Aggregations", "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1", "Preparation"],

        // Week 10
        ["10", "Nov-01", "Sat", "Spark Joins", "Spark Window Functions", "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1", "https://youtu.be/ypBL-a-9Jpc"],
        ["10", "Nov-02", "Sun", "", "Resume Building", "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1", "Interviews"],

        // Week 11
        ["11", "Nov-08", "Sat", "Spark Problem solving", "Working with JSON/Parquet/CSV", "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1", "https://youtu.be/haxVRKm83f4"],
        ["11", "Nov-09", "Sun", "Spark Problem solving", "AWS Intro", "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1", "https://youtu.be/CFUgSyjEnKA"],
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
        "EC2 + S3 Deep Dive + Glue",
        "https://us06web.zoom.us/j/87673509113?pwd=7kFwb9x9wbW4Gw7GUOdpf6PGvZPo4Q.1",
        "https://youtu.be/8HfFXK5UvKc",
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

  const allSessions = syllabus.flatMap((p) => p.schedule);

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

  const totalSessions = allSessions.length;
  const completedCount = Object.values(completed).filter(Boolean).length;
  const progress = totalSessions
    ? Math.round((completedCount / totalSessions) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md rounded-b-2xl relative">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 border border-black rounded-full hover:bg-black hover:text-white transition font-medium"
        >
          ← Back to Home
        </button>

        {/* Centered Cohort Dropdown */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <select
            value={selectedCohort}
            onChange={(e) => setSelectedCohort(e.target.value)}
            className="px-5 py-2 border border-black rounded-full focus:outline-none font-medium hover:bg-gray-100 transition cursor-pointer text-center"
            style={{ textAlignLast: "center" }} // ensures selected value is centered
          >
            <option value="">-- Select Cohort --</option>
            <option value="25A">Cohort 25A</option>
            {/* Add more cohorts here */}
          </select>
        </div>

        {/* Download Button on Right */}
        {selectedCohort && (
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = `/${selectedCohort}.pdf`; // dynamic PDF path
              link.download = `${selectedCohort}.pdf`;
              link.click();
            }}
            className="flex items-center gap-2 px-5 py-2 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition shadow"
          >
            <FaDownload /> Download PDF
          </button>
        )}
      </div>

      {/* Only show syllabus if cohort selected */}
      {selectedCohort === "25A" && (
        <>
          {/* Hero */}
          <div className="bg-gradient-to-r from-indigo-600 via-pink-500 to-red-500 text-white text-center py-12 shadow-lg rounded-b-3xl mt-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Sri Vyra Cohort 25A
            </h1>
            <p className="text-lg md:text-xl">
              Your complete roadmap to mastering Big Data & Cloud 🚀
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-3xl mx-auto mt-8 px-6">
            <div className="w-full bg-gray-200 rounded-full h-6 shadow-inner">
              <div
                className="bg-green-500 h-6 rounded-full transition-all duration-700 ease-in-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-center mt-2 font-medium text-gray-700">
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
                className="shadow-lg rounded-2xl overflow-hidden bg-white"
              >
                {/* Phase Header */}
                <div
                  className={`bg-gradient-to-r ${phase.color} text-white text-center py-4 rounded-t-2xl`}
                >
                  <h2 className="text-2xl font-semibold">{phase.phase}</h2>
                  <p className="text-sm">{phase.objective}</p>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[1000px] border-collapse text-sm md:text-base">
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
                        const id = `${phase.phase}-${i}`;
                        const isToday = row[1] === today;

                        return (
                          <tr
                            key={i}
                            className={`${
                              isToday
                                ? "bg-yellow-100 font-semibold"
                                : "hover:bg-purple-50"
                            } transition text-center`}
                          >
                            {row.slice(0, 5).map((cell, j) => (
                              <td key={j} className="border p-2">
                                {cell}
                              </td>
                            ))}

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
                                <span className="text-gray-400 italic">
                                  Not Available
                                </span>
                              )}
                            </td>

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
                                <span className="text-gray-400 italic">
                                  Class not yet completed
                                </span>
                              )}
                            </td>

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
        </>
      )}
    </div>
  );
}

export default SyllabusPage;
