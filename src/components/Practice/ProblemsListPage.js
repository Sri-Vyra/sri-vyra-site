import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Confetti from 'react-confetti';
import 'react-circular-progressbar/dist/styles.css';
import { problemsByTrack } from './ProblemData';

export default function ProblemsListPage() {
  const { track } = useParams();
  const navigate = useNavigate();
  const problems = useMemo(() => problemsByTrack[track] || [], [track]);

  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('all');
  const [solvedMap, setSolvedMap] = useState({});
  const [submittedMap, setSubmittedMap] = useState({});
  const [celebrate, setCelebrate] = useState(false);
  const [starsEarned, setStarsEarned] = useState(0);

  const totalProblems = problems.length;
  const maxStars = 5;
  const problemsPerStar = totalProblems < 5 ? 1 : Math.floor(totalProblems / maxStars);

  const isContentTrack = problems.length === 0;

  useEffect(() => {
    if (isContentTrack) {
      navigate(`/content/${track}`);
    }
  }, [isContentTrack, navigate, track]);

  useEffect(() => {
    const solved = {};
    const submitted = {};
    let solvedCount = 0;

    problems.forEach((p) => {
      const sKey = `${track}-${p.id}-solved`;
      const subKey = `${track}-${p.id}-submitted`;
      const isSolved = localStorage.getItem(sKey) === 'true';
      const isSubmitted = localStorage.getItem(subKey) === 'true';
      solved[p.id] = isSolved;
      submitted[p.id] = isSubmitted;
      if (isSolved) solvedCount++;
    });

    setSolvedMap(solved);
    setSubmittedMap(submitted);

    const newStars = Math.floor(solvedCount / problemsPerStar);
    const lastCelebrated = parseInt(localStorage.getItem(`${track}-celebratedStars`) || '0');

    if (newStars > lastCelebrated) {
      setCelebrate(true);
      setTimeout(() => setCelebrate(false), 5000);
      localStorage.setItem(`${track}-celebratedStars`, newStars);
    }

    setStarsEarned(newStars);
  }, [track, problems, problemsPerStar]);

  const filteredProblems = problems.filter((p) => {
    const isSolved = solvedMap[p.id];
    const isSubmitted = submittedMap[p.id];

    if (filter !== 'all' && p.difficulty?.toLowerCase() !== filter) return false;
    if (viewMode === 'solved' && !isSolved) return false;
    if (viewMode === 'unsolved' && isSolved) return false;
    if (viewMode === 'submitted' && !isSubmitted) return false;
    if (viewMode === 'not-submitted' && isSubmitted) return false;

    return true;
  });

  const solvedCount = Object.values(solvedMap).filter(Boolean).length;
  const submittedCount = solvedCount;
  const solvedPercent = Math.round((solvedCount / totalProblems) * 100);
  const submittedPercent = Math.round((submittedCount / totalProblems) * 100);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'hard':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const clearFilters = () => {
    setFilter('all');
    setViewMode('all');
  };

  return (
    <section className="min-h-screen bg-white text-gray-800 px-6 md:px-12 py-20">
      {celebrate && (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-50">
          <Confetti numberOfPieces={400} recycle={false} />
          <div className="text-3xl font-bold bg-yellow-200 text-black px-6 py-3 rounded-xl shadow-lg text-center">
            🎉 Great job! You’ve earned a new star!
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
        <button
          onClick={() => navigate('/practice')}
          className="text-black border border-black px-4 py-1 rounded-full hover:bg-black hover:text-white transition"
        >
          ← Back to Practice
        </button>

        <h1 className="text-4xl font-bold capitalize text-center pl-4">
          {track} Knowledge Hub
        </h1>

        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-4">
            <Progress label="Solved" value={solvedPercent} color="#22c55e" />
            <Progress label="Submitted" value={submittedPercent} color="#3b82f6" />
          </div>

          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-xl transform transition-all duration-300 ${
                  i < starsEarned ? 'text-yellow-400 scale-110' : 'text-gray-300 scale-100'
                }`}
              >
                ★
              </span>
            ))}
          </div>

          {starsEarned < maxStars && (
            <div className="text-sm text-gray-500 text-center mt-1 w-full">
              <div>
                Solve <strong>{problemsPerStar * (starsEarned + 1) - solvedCount}</strong> more problems to earn your next ⭐
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mt-1">
                <div
                  className="h-full bg-yellow-400 transition-all"
                  style={{
                    width: `${((solvedCount % problemsPerStar) / problemsPerStar) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex max-w-7xl mx-auto gap-6">
        <div className="w-1/4 hidden md:block">
          <SidebarSection title="Clear Filters">
            <FilterButton active={false} onClick={clearFilters}>
              Reset All Filters
            </FilterButton>
          </SidebarSection>

          <SidebarSection title="Difficulty Level">
            {['easy', 'medium', 'hard'].map((lvl) => (
              <FilterButton key={lvl} active={filter === lvl} onClick={() => setFilter(lvl)}>
                {lvl.charAt(0).toUpperCase() + lvl.slice(1)}
              </FilterButton>
            ))}
          </SidebarSection>

          <SidebarSection title="Status">
            {['all', 'solved', 'unsolved'].map((mode) => (
              <FilterButton key={mode} active={viewMode === mode} onClick={() => setViewMode(mode)}>
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </FilterButton>
            ))}
          </SidebarSection>

          <SidebarSection title="Submissions">
            {['submitted', 'not-submitted'].map((mode) => (
              <FilterButton key={mode} active={viewMode === mode} onClick={() => setViewMode(mode)}>
                {mode.replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
              </FilterButton>
            ))}
          </SidebarSection>
        </div>

        <div className="w-full md:w-3/4 grid gap-4">
          {filteredProblems.length === 0 ? (
            <p className="text-center text-gray-500">No problems match the selected filters.</p>
          ) : (
            filteredProblems.map((prob, index) => {
              const isSolved = solvedMap[prob.id];
              return (
                <div
                  key={prob.id}
                  onClick={() => navigate(`/practice/${track}/problem/${prob.id}`)}
                  className="p-4 border border-gray-300 rounded-xl shadow hover:shadow-lg hover:scale-[1.02] cursor-pointer transition"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">
                      {index + 1}. {prob.title}
                    </span>
                    <div className="flex gap-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        isSolved ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                      }`}>
                        {isSolved ? 'Solved' : 'Unsolved'}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(prob.difficulty)} capitalize`}>
                        {prob.difficulty || 'Unknown'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

function Progress({ label, value, color }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-14 h-14">
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            textSize: '28px',
            pathColor: color,
            trailColor: '#eee',
            textColor: '#000',
          })}
        />
      </div>
      <div className="text-sm text-gray-600 mt-1">{label}</div>
    </div>
  );
}

function SidebarSection({ title, children }) {
  return (
    <div className="mb-6 text-center">
      <h3 className="font-semibold inline-block border-b-2 border-black pb-1 mb-3">
        {title}
      </h3>
      <div className="mt-1">{children}</div>
    </div>
  );
}

function FilterButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 mb-2 rounded-full border text-sm transition-all duration-200 mx-auto block w-fit
        ${active
          ? 'border-black text-black bg-black bg-opacity-10'
          : 'border-transparent text-black hover:border-black hover:bg-black hover:bg-opacity-5'}
      `}
    >
      {children}
    </button>
  );
}
