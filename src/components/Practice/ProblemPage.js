// === src/components/Practice/ProblemPage.js ===
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { problemsByTrack } from './ProblemData';
import { Editor } from '@monaco-editor/react';
import Confetti from 'react-confetti';

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwx5No_pdtpI68SEWh7vWLtsc92-bp6_Qu1JGAQjNKdygc6eOMIVn95d8DXLlCbRwAK/exec';

const ProblemPage = () => {
  const { track, problemId } = useParams();
  const navigate = useNavigate();
  const problems = problemsByTrack[track] || [];
  const problem = problems.find((p) => p.id === problemId);

  const [code, setCode] = useState('');
  const [solved, setSolved] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadError, setUploadError] = useState('');
  const [previews, setPreviews] = useState([]);
  const timerRef = useRef(null);

  const allowedFileTypes = (() => {
    if (track.includes('python') || track.includes('pyspark')) return ['.py'];
    if (track.includes('sql')) return ['.sql'];
    return ['.pdf'];
  })();

  useEffect(() => {
    const solvedStatus = localStorage.getItem(`${track}-${problemId}-solved`);
    const savedCode = localStorage.getItem(`${track}-${problemId}-code`);
    if (solvedStatus === 'true') setSolved(true);
    if (savedCode) setCode(savedCode);
    startTimer();
    return () => stopTimer();
  }, [track, problemId]);

  const startTimer = () => {
    if (timerRef.current) return;
    setTimerActive(true);
    timerRef.current = setInterval(() => setTimer((prev) => prev + 1), 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTimerActive(false);
  };

  const resetTimer = () => {
    stopTimer();
    setTimer(0);
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const invalid = files.filter((file) => !allowedFileTypes.some((ext) => file.name.endsWith(ext)));

    if (invalid.length > 0) {
      setUploadError(`Invalid file(s): ${invalid.map((f) => f.name).join(', ')}. Allowed: ${allowedFileTypes.join(', ')}`);
      setUploadedFiles([]);
    } else {
      setUploadedFiles(files);
      setUploadError('');

      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = async (e2) => {
          const b64 = e2.target.result.split(',')[1];
          const resp = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: new URLSearchParams({
              filename: file.name,
              mimeType: file.type,
              content: b64,
            })
          });

          const result = await resp.json();
          if (result.success) {
            setPreviews(prev => [...prev, {
              name: result.name,
              viewUrl: result.url,
              embedUrl: result.url.replace('/view', '/preview')
            }]);
          } else {
            setUploadError(result.error);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleSubmit = async () => {
    if (!code.trim()) {
      alert('⚠️ Code editor is empty. Please write your solution before submitting.');
      return;
    }

    setSubmitting(true);
    stopTimer();

    const payload = {
      track,
      problemId,
      title: problem.title,
      answer: code,
      timeTaken: `${Math.floor(timer / 60)}m ${timer % 60}s`,
      timestamp: new Date().toLocaleString(),
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(payload),
      });

      localStorage.setItem(`${track}-${problemId}-solved`, 'true');
      localStorage.setItem(`${track}-${problemId}-code`, code);
      setSolved(true);
      setSubmitted(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    } catch (error) {
      alert('❌ Submission failed.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleToggleSolved = () => {
    const newStatus = !solved;
    setSolved(newStatus);
    localStorage.setItem(`${track}-${problemId}-solved`, String(newStatus));
  };

  if (!problem) {
    return <div className="text-center mt-20 text-xl text-red-600">Problem not found!</div>;
  }

  return (
    <section className="min-h-screen bg-white text-gray-800 px-4 md:px-12 py-10 relative">
      {showConfetti && <Confetti />}

      <h1 className="text-3xl font-bold text-center underline mb-8">{problem.title}</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[40%_60%] gap-10 items-start">
        {/* LEFT - Problem */}
        <div className="space-y-6 max-h-[80vh] overflow-y-auto pr-2">
          <div>
            <h3 className="text-lg font-semibold border-b pb-2 mb-2">📝 Description</h3>
            <p className="whitespace-pre-line leading-relaxed text-sm">{problem.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold border-b pb-2 mb-2">🧪 Test Case</h3>
            {problem.sampleInput && (
              <div className="mb-3">
                <p className="font-semibold text-xs">Input:</p>
                <pre className="bg-gray-100 p-2 rounded whitespace-pre-wrap text-xs font-mono">{problem.sampleInput}</pre>
              </div>
            )}
            {problem.sampleOutput && (
              <div>
                <p className="font-semibold text-xs">Output:</p>
                <pre className="bg-gray-100 p-2 rounded whitespace-pre-wrap text-xs font-mono">{problem.sampleOutput}</pre>
              </div>
            )}
            {problem.sampleTableInput && (
              <div className="mb-3">
                <p className="font-semibold text-xs">Input Table:</p>
                <pre className="bg-gray-100 p-2 rounded whitespace-pre-wrap text-xs font-mono">{problem.sampleTableInput}</pre>
              </div>
            )}
            {problem.sampleTableOutput && (
              <div>
                <p className="font-semibold text-xs">Expected Output:</p>
                <pre className="bg-gray-100 p-2 rounded whitespace-pre-wrap text-xs font-mono">{problem.sampleTableOutput}</pre>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT - Editor & Submission */}
        <div>
          {/* Timer & Controls */}
          <div className="flex justify-between items-center mb-3">
            <div className="text-xs text-gray-600 ml-4">Status: {timerActive ? '⏱ Running' : '⏹️ Stopped'}</div>
            <div className="text-sm text-blue-600 font-medium ml-4">Time: {Math.floor(timer / 60)}m {timer % 60}s</div>
            <div className="flex items-center gap-2">
              <button onClick={startTimer} className="px-2 py-0.5 border text-xs rounded hover:bg-blue-100">Start</button>
              <button onClick={stopTimer} className="px-2 py-0.5 border text-xs rounded hover:bg-blue-100">Stop</button>
              <button onClick={resetTimer} className="px-2 py-0.5 border text-xs rounded hover:bg-blue-100">Reset</button>
              {solved && (
                <button onClick={handleToggleSolved} className="text-xs px-3 py-1 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition">Mark as Unsolved</button>
              )}
            </div>
          </div>

          {/* Editor */}
          <div className="border border-gray-300 rounded-xl overflow-hidden mb-4">
            <Editor height="300px" defaultLanguage="python" value={code} onChange={(value) => setCode(value || '')} theme="vs-light" options={{ fontSize: 14, minimap: { enabled: false }, automaticLayout: true }} />
          </div>

          {/* Upload Section */}
          <div className="flex flex-col items-center gap-3 mt-6">
            <p className="text-sm font-medium text-gray-700 text-center">
              📎 Upload code files or answer sheets here: <br />
              Files should be in mentioned format: ProgramNo_Name_PhoneNo – Ex: Python1_Rupesh_8712395259
            </p>
            <input type="file" onChange={handleFileUpload} multiple className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition" />
            {uploadError && <p className="text-red-500 text-xs">{uploadError}</p>}
            {uploadedFiles.length > 0 && (
              <ul className="text-xs text-green-600 list-disc list-inside">
                {uploadedFiles.map((file, idx) => (
                  <li key={idx}>✅ {file.name}</li>
                ))}
              </ul>
            )}
            {previews.map((f, i) => (
              <div key={i} className="mt-4 p-3 bg-gray-50 rounded shadow">
                <p className="text-sm text-green-700">✅ {f.name}</p>
                <a href={f.viewUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm">Open in Drive</a>
                <iframe src={f.embedUrl} width="100%" height="200" className="mt-2 border rounded" allow="autoplay" title={`preview-${i}`} />
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button onClick={() => navigate(-1)} className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">Back to List</button>
            {uploadedFiles.length > 0 && (
              <button onClick={handleSubmit} disabled={submitting} className="px-6 py-2 border border-gray-500 text-gray-700 rounded-full bg-transparent hover:bg-gray-100 transition">Submit Answer</button>
            )}
          </div>

          {/* Submit Confirmation */}
          {submitting && (<p className="text-blue-600 font-medium animate-pulse mt-4">🚀 Submitting your code...</p>)}
          {submitted && (<p className="text-green-600 font-semibold text-center mt-4">✅ Successfully Submitted!</p>)}
        </div>
      </div>
    </section>
  );
};

export default ProblemPage;
