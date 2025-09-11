// === src/pages/WorkProgressPage.js ===
import React, { useState, useMemo, useEffect } from "react";
import Papa from "papaparse";
import { Search } from "lucide-react";

const WorkProgressPage = () => {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("workProgressData");
    return saved ? JSON.parse(saved) : [];
  });
  const [file, setFile] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState("all");

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("workProgressData", JSON.stringify(data));
  }, [data]);

  // File handlers
  const handleFileChange = (e) => setFile(e.target.files[0]);
  const handleImport = () => {
    if (!file) return;
    Papa.parse(file, {
      header: false,
      skipEmptyLines: true,
      complete: (results) => {
        const rows = results.data;
        const startIndex =
          rows[0][0]?.toLowerCase().includes("timestamp") ||
          rows[0][1]?.toLowerCase().includes("user id")
            ? 1
            : 0;

        const mappedData = rows
          .slice(startIndex)
          .filter((row) => row[0] && row[1])
          .map((row) => ({
            timestamp: row[0],
            userId: row[1],
            name: row[2],
            email: row[3],
            track: row[4],
            problemId: row[5],
            title: row[6],
            answer: row[7],
            timeTaken: row[8],
            submissionTime: row[9],
          }));

        setData(mappedData);
      },
      error: (err) => console.error("CSV parse error:", err),
    });
  };

  // Derived dropdown
  const usersList = useMemo(
    () => ["all", ...Array.from(new Set(data.map((d) => d.name).filter(Boolean)))],
    [data]
  );

  // Filtered Data
  const filteredData = useMemo(() => {
    return data.filter((d) => {
      const matchesSearch =
        d.name?.toLowerCase().includes(search.toLowerCase()) ||
        d.email?.toLowerCase().includes(search.toLowerCase());
      const matchesUser = selectedUser === "all" || d.name === selectedUser;
      return matchesSearch && matchesUser;
    });
  }, [data, search, selectedUser]);

  return (
    <div className="bg-white text-gray-900 px-6 md:px-12 py-8 min-h-screen">
      {/* === Top Controls (full width) === */}
      <div className="max-w-full mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
          {/* Search */}
          <div className="relative w-full md:w-1/3 group">
            <Search
              className="absolute left-3 top-3 text-gray-400 group-focus-within:text-black transition-colors duration-200"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by name or email..."
              className="pl-10 pr-4 py-2 w-full border-b border-gray-300 focus:border-black focus:outline-none transition-all duration-300"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* User Dropdown */}
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="border-b border-gray-300 px-3 py-2 focus:outline-none focus:border-black transition-all duration-300 w-full md:w-1/4"
          >
            {usersList.map((u) => (
              <option key={u} value={u}>
                {u === "all" ? "All Users" : u}
              </option>
            ))}
          </select>
        </div>

        {/* Import Section */}
        <div className="flex gap-2 justify-center">
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            className="border-b border-gray-300 px-2 py-0 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            onClick={handleImport}
            className="px-4 py-0 rounded-full border border-black text-black hover:bg-black hover:text-white transition"
          >
            Import
          </button>
        </div>
      </div>

      {/* === Table Section === */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Problem
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Time Taken
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Submission Time
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {filteredData.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm text-gray-800">{row.name}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{row.email}</td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {row.problemId} - {row.title}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">{row.timeTaken}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{row.submissionTime}</td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkProgressPage;
