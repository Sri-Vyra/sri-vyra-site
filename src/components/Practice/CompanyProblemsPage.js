import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import companyProblems from "./companyProblemsData";
import { useNavigate } from "react-router-dom";

export default function CompanyProblemsPage() {
  const [selectedCompany, setSelectedCompany] = useState(null);
    const navigate = useNavigate();
  const [expandedQ, setExpandedQ] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null); // "conceptual" or "problems"
  const [search, setSearch] = useState("");

  const filteredCompanies = companyProblems.filter((c) =>
    c.company.toLowerCase().includes(search.toLowerCase())
  );

  const getSections = (questions) => {
    const conceptual = questions.filter((q) => !q.input);
    const problems = questions.filter((q) => q.input);
    return { conceptual, problems };
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-20 py-12">
      {/* Header + Back Button */}
      <div className="text-center relative mb-10">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-1 border border-black rounded-full hover:bg-black hover:text-white transition"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          🏢 Company Specific Problems
        </h1>
        <p className="text-gray-600 mt-3">
          Practice curated conceptual and coding questions asked in interviews
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* Sidebar */}
        <div className="md:w-1/3 w-full flex flex-col h-[75vh] md:h-[80vh]">
          <input
            type="text"
            placeholder="Search company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mb-4 p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Scrollable list */}
          <div className="flex-1 overflow-y-auto">
            <div className="grid gap-3">
              {filteredCompanies.map((company) => (
                <motion.div
                  key={company.company}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setSelectedCompany(company);
                    setExpandedQ(null);
                    setExpandedSection(null);
                  }}
                  className={`p-5 rounded-2xl shadow-md transition-all duration-300 cursor-pointer ${
                    selectedCompany?.company === company.company
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-800 hover:bg-blue-50"
                  }`}
                >
                  <h2 className="font-semibold text-lg">{company.company}</h2>
                  <p className="text-sm opacity-80">{company.experience}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Questions Panel */}
        <div className="md:w-2/3 w-full flex flex-col h-[75vh] md:h-[80vh] overflow-y-auto">
          {selectedCompany ? (
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
              <h2 className="text-2xl font-bold mb-6">
                {selectedCompany.company} – Questions ({selectedCompany.experience})
              </h2>

              {(() => {
                const { conceptual, problems } = getSections(selectedCompany.questions);

                return (
                  <>
                    {problems.length > 0 && (
                      <SectionBar
                        title="Problem Questions"
                        sectionKey="problems"
                        expandedSection={expandedSection}
                        setExpandedSection={setExpandedSection}
                      >
                        {problems.map((item) => (
                          <QuestionCard
                            key={item.id}
                            item={item}
                            expandedQ={expandedQ}
                            setExpandedQ={setExpandedQ}
                          />
                        ))}
                      </SectionBar>
                    )}

                    {conceptual.length > 0 && (
                      <SectionBar
                        title="Conceptual Questions"
                        sectionKey="conceptual"
                        expandedSection={expandedSection}
                        setExpandedSection={setExpandedSection}
                      >
                        {conceptual.map((item) => (
                          <QuestionCard
                            key={item.id}
                            item={item}
                            expandedQ={expandedQ}
                            setExpandedQ={setExpandedQ}
                          />
                        ))}
                      </SectionBar>
                    )}
                  </>
                );
              })()}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500 italic">
              Select a company to view questions
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// SectionBar
function SectionBar({ title, sectionKey, expandedSection, setExpandedSection, children }) {
  const isExpanded = expandedSection === sectionKey;
  return (
    <motion.div className="space-y-4">
      <button
        onClick={() => setExpandedSection(isExpanded ? null : sectionKey)}
        className="w-full text-left bg-blue-100 p-3 rounded-xl font-semibold text-lg flex justify-between items-center shadow-md"
      >
        {title}
        <span>{isExpanded ? "▲" : "▼"}</span>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="space-y-4 mt-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// QuestionCard
function QuestionCard({ item, expandedQ, setExpandedQ }) {
  return (
    <motion.div className="bg-gray-50 rounded-2xl p-4 shadow-sm">
      <button
        className="w-full text-left font-medium flex justify-between items-center"
        onClick={() => setExpandedQ(expandedQ === item.id ? null : item.id)}
      >
        {item.question}
        <span className="text-blue-600">
          {expandedQ === item.id ? "Hide Answer" : "Show Details"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {expandedQ === item.id && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 text-gray-700 space-y-3"
          >
            {item.input && <InputOutputBlock title="Input" content={item.input} />}
            {item.expected_output && (
              <InputOutputBlock title="Expected Output" content={item.expected_output} />
            )}
            {item.answer && <AnswerBlock content={item.answer} />}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// InputOutputBlock
function InputOutputBlock({ title, content }) {
  return (
    <div className="p-3 rounded-lg border border-gray-300 mb-4">
      <h4 className="font-semibold mb-2">{title}:</h4>
      {content.includes("|") ? (
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 text-sm w-full bg-transparent">
            <tbody>
              {content.trim().split("\n").map((row, rIdx) => (
                <tr key={rIdx} className="even:bg-gray-100">
                  {row.split("|").filter(Boolean).map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className="border border-gray-300 px-2 py-1 text-center font-mono"
                    >
                      {cell.trim()}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <pre className="overflow-x-auto text-sm font-mono whitespace-pre-wrap bg-transparent">
          {content}
        </pre>
      )}
    </div>
  );
}

// AnswerBlock
function AnswerBlock({ content }) {
  if (!content) return null;

  return (
    <div className="p-3 rounded-lg border bg-green-50 border-gray-300 mb-4">
      <h4 className="font-semibold mb-2">Answer / Solution:</h4>
      {content.includes("```") ? (
        content.split("```").map((block, idx) =>
          idx % 2 === 0 ? (
            <p key={idx} className="mb-2 whitespace-pre-wrap text-sm">
              {block.trim()}
            </p>
          ) : (
            <pre
              key={idx}
              className="bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto text-sm font-mono mb-2"
            >
              <code>{block.split("\n").slice(1).join("\n")}</code>
            </pre>
          )
        )
      ) : (
        <pre className="overflow-x-auto text-sm font-mono whitespace-pre-wrap bg-transparent">
          {content}
        </pre>
      )}
    </div>
  );
}
