import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import logo from "../assets/logo1.png";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { useAuth } from "../components/AuthContext";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function CertificationPage() {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const [issued, setIssued] = useState(false);
  const [certificateId, setCertificateId] = useState("");
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

  // 🔹 Generate certificate (only once)
  const handleGenerate = async () => {
    if (issued || !profile) return;

    // Generate certificateId
    const id = `SV-${new Date().getFullYear()}-${uuidv4().split("-")[0].toUpperCase()}`;
    setCertificateId(id);
    setIssued(true);

    // Create shareable URL
    const publicURL = `${window.location.origin}/verify-certificate/${id}`;

    try {
      await updateDoc(doc(db, "users", profile.id), {
        certificateIssued: true,
        certificateId: id,             // save it in Firestore
        certificateIssuedAt: new Date(),
        certificateURL: publicURL      // save the public link
      });
    } catch (err) {
      console.error("Error saving certificate:", err);
    }

    // 🎉 Confetti
    try {
      const confetti = (await import("canvas-confetti")).default;
      confetti({ particleCount: 200, spread: 80, origin: { y: 0.6 } });
    } catch {}
  };

  // 🔹 Download Certificate
  const handleDownload = async () => {
    if (!certificateRef.current) return;

    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        useCORS: true,
      });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("landscape", "px", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgProps = {
        width: canvas.width,
        height: canvas.height,
      };
      const ratio = Math.min(pageWidth / imgProps.width, pageHeight / imgProps.height);

      const imgWidth = imgProps.width * ratio;
      const imgHeight = imgProps.height * ratio;
      const x = (pageWidth - imgWidth) / 2;
      const y = (pageHeight - imgHeight) / 2;

      pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
      pdf.save(`${profile.fullName || "certificate"}.pdf`);
    } catch (err) {
      console.error("Error downloading certificate:", err);
    }
  };

  if (loading) {
    return <div className="p-6">Loading certificate info...</div>;
  }

  if (!profile) {
    return <div className="p-6 text-red-600">No profile found.</div>;
  }

  // 🔹 Access States
  const allowed = profile.certificateAllowed || false; // admin-enabled
  const alreadyIssued = profile.certificateIssued || issued;
  const state = alreadyIssued ? "issued" : allowed ? "eligible" : "locked";

  return (
    <div className="min-h-[70vh] max-w-5xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold">🎓 Certification</h1>

        {state === "issued" && (
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="border border-black px-4 py-1 rounded-full text-sm hover:bg-black hover:text-white"
            >
              Download Certificate
            </button>
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
          <p className="text-lg mb-4 text-center">
            Certificate issued on{" "}
            <strong>
              {profile.certificateIssuedAt?.seconds
                ? new Date(profile.certificateIssuedAt.seconds * 1000).toLocaleDateString()
                : new Date().toLocaleDateString()}
            </strong>
          </p>
        </div>
      )}

      {/* Certificate Preview */}
      <div className="mt-10">
        <h2 className="text-lg text-gray-600 mb-2 text-center">Certificate Preview</h2>

        <div
          ref={certificateRef}
          className={`relative w-full aspect-[1.4142/1] bg-white rounded-3xl shadow-sm overflow-hidden transition-all duration-300 ${
            state !== "issued" ? "opacity-40 blur-sm pointer-events-none" : ""
          }`}
          style={{ maxWidth: 1200 }}
        >
          {/* Inner frame */}
          <div className="absolute inset-5 rounded-2xl border-[52px] border-gray-200" />

          {/* Header */}
          <div className="relative z-10 mt-16 flex items-center justify-center">
            <img src={logo} alt="Sri Vyra" className="h-32 md:h-32 pt-8" />
          </div>

          {/* Main text */}
          <div className="relative z-10 mt-10 text-center px-6">
            <p className="text-2xl font-semibold tracking-wide">
              {profile.fullName || user.displayName}
            </p>
            <p className="mt-3 text-gray-600">has successfully passed all requirements for</p>
            <h1 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight text-slate-800">
              Sri Vyra Certified: Cloud Data Professional
            </h1>
          </div>

          {/* Footer */}
          <div className="absolute bottom-20 left-16 right-16 px-12 mb-12">
            <div className="grid grid-cols-12 items-end">
              <div className="col-span-7 text-[0.95rem] leading-6 text-slate-800 space-y-1">
                <p>
                  <span className="font-medium">Credential ID:</span>{" "}
                  {profile.uid || certificateId || "—"}
                </p>
                <p>
                  <span className="font-medium">Certification number:</span>{" "}
                  {profile.applicationId || certificateId || "—"}
                </p>
                <p>
                  <span className="font-medium">Earned on:</span>{" "}
                  {profile.certificateIssuedAt?.seconds
                    ? new Date(profile.certificateIssuedAt.seconds * 1000).toLocaleDateString()
                    : new Date().toLocaleDateString()}
                </p>
              </div>

              {/* Signature */}
              <div className="col-span-5 text-right">
                <div className="flex justify-end">
                  <img
                    src="/signature.png"
                    alt="Mentor Signature"
                    className="h-20 md:h-20 object-contain mr-4"
                  />
                </div>
                <p className="font-semibold mb-2 text-xs">Rupesh Phanindra Sai Ande</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
