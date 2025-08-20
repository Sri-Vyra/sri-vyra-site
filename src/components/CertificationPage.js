import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import logo from "../assets/logo1.png";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { useAuth } from "../components/AuthContext";

export default function CertificationPage() {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const [issued, setIssued] = useState(false);
  const [certificateId, setCertificateId] = useState("");
  const [certificateUrl] = useState(""); // future: Storage URL
  const certificateRef = useRef(null);

  // 🔹 Load user profile from Firestore
  useEffect(() => {
    if (!user) return;
    const loadProfile = async () => {
      try {
        const ref = doc(db, "users", user.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setProfile({ id: user.uid, ...snap.data() });
        }
      } catch (err) {
        console.error("Error loading profile:", err);
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, [user]);

  const handleGenerate = async () => {
    if (issued || !profile) return;
    const id = `SV-${new Date().getFullYear()}-${uuidv4().split("-")[0].toUpperCase()}`;
    setCertificateId(id);
    setIssued(true);

    // Save issued flag + certificateId
    try {
      await updateDoc(doc(db, "users", profile.id), {
        certificateIssued: true,
        certificateId: id,
        certificateIssuedAt: new Date(),
      });
    } catch (err) {
      console.error("Error saving certificate:", err);
    }

    // Confetti 🎉
    try {
      const confetti = (await import("canvas-confetti")).default;
      confetti({ particleCount: 200, spread: 80, origin: { y: 0.6 } });
    } catch {}
  };

  if (loading) {
    return <div className="p-6">Loading certificate info...</div>;
  }

  if (!profile) {
    return <div className="p-6 text-red-600">No profile found.</div>;
  }

  // 🔹 States
  const allowed = profile.certificateAllowed || false;
  const alreadyIssued = profile.certificateIssued || issued;
  const state = alreadyIssued ? "issued" : allowed ? "eligible" : "locked";

  return (
    <div className="min-h-[70vh] max-w-5xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold">🎓 Certification</h1>
        {state === "issued" && (
          <div className="flex items-center gap-3">
            {certificateUrl && (
              <a
                href={certificateUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-black px-4 py-1 rounded-full text-sm hover:bg-black hover:text-white"
              >
                Download Certificate
              </a>
            )}
            <a
              href={`/verify-certificate/${profile.certificateId || certificateId}`}
              className="border border-purple-600 text-purple-700 px-4 py-1 rounded-full text-sm hover:bg-purple-600 hover:text-white"
            >
              Public Verification
            </a>
          </div>
        )}
      </div>

      {/* State blocks */}
      {state === "locked" && (
        <div className="border rounded-2xl p-6 text-center">
          <p className="text-lg md:text-xl">
            Hi {profile.fullName || user.displayName}, your certificate is not yet available.
          </p>
          <p className="text-gray-600 mt-2">Please wait until the admin enables it.</p>
        </div>
      )}

      {state === "eligible" && (
        <div className="border rounded-2xl p-6 text-center">
          <p className="text-xl md:text-2xl font-semibold">🎉 Congratulations!</p>
          <p className="text-gray-600 mt-2">Click below to generate your official certificate.</p>
          <button
            onClick={handleGenerate}
            className="mt-4 border border-green-600 text-green-700 px-6 py-2 rounded-full hover:bg-green-600 hover:text-white"
          >
            Generate My Certificate
          </button>
        </div>
      )}

      {state === "issued" && (
        <div className="border rounded-2xl p-6">
          <p className="text-lg mb-4">
            Certificate issued on{" "}
            <strong>
              {profile.certificateIssuedAt
                ? new Date(profile.certificateIssuedAt.seconds * 1000).toLocaleDateString()
                : new Date().toLocaleDateString()}
            </strong>
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={certificateUrl || "#"}
              onClick={(e) => {
                if (!certificateUrl) e.preventDefault();
              }}
              className="border border-black px-4 py-1 rounded-full text-sm hover:bg-black hover:text-white"
            >
              View / Download
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                certificateUrl || window.location.href
              )}`}
              target="_blank"
              rel="noreferrer"
              className="border border-blue-600 text-blue-700 px-4 py-1 rounded-full text-sm hover:bg-blue-600 hover:text-white"
            >
              Share on LinkedIn
            </a>
            <a
              href={`/verify-certificate/${profile.certificateId || certificateId}`}
              className="border border-purple-600 text-purple-700 px-4 py-1 rounded-full text-sm hover:bg-purple-600 hover:text-white"
            >
              Public Verification
            </a>
          </div>
        </div>
      )}

      {/* Certificate Preview */}
      <div className="mt-10">
        <h2 className="text-lg text-gray-600 mb-2">Certificate Preview</h2>
        <div
          ref={certificateRef}
          className="relative w-full aspect-[1.4142/1] bg-white border rounded-2xl shadow-sm overflow-hidden p-10"
          style={{ maxWidth: 1200 }}
        >
          <div className="absolute inset-6 rounded-2xl border-4" />

          {/* Header */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <img src={logo} alt="Sri Vyra" className="h-14" />
            <div className="text-center">
              <p className="text-xs tracking-widest text-gray-600">SRI VYRA EDUCATION</p>
              <h1 className="text-3xl font-semibold tracking-wide">Certificate of Completion</h1>
            </div>
          </div>

          {/* Body */}
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-600">This certifies that</p>
            <p className="text-4xl font-bold mt-2">{profile.fullName || user.displayName}</p>
            <p className="text-sm text-gray-600 mt-4">has successfully completed the</p>
            <p className="text-2xl font-semibold mt-1">{profile.course || "Elite Program"}</p>
            <p className="text-gray-700 mt-1">Batch: {profile.batchCode || "2025-ELITE-01"}</p>
          </div>

          {/* Footer */}
          <div className="absolute bottom-8 left-0 right-0 px-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Completion Date</p>
                <p className="font-medium">{new Date().toISOString().split("T")[0]}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm">Certificate ID</p>
                <p className="font-medium">{profile.certificateId || certificateId || "Will be generated"}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600 text-sm">Mentor</p>
                <p className="font-medium">Rupesh Phanindra Sai Ande</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
