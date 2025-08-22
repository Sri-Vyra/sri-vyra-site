// src/pages/ReceiptsPage.js
import React, { useState, useMemo } from "react";
import { db } from "../components/firebase";
import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

function ReceiptsPage() {
  const [search, setSearch] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [profile, setProfile] = useState(null);
  const [track, setTrack] = useState("");
  const [payments, setPayments] = useState({});

  // Fee structure per track
  const feeStructure = {
    premium: { slot: 1000, term1: 4500, term2: 4500 },
    mentorship: { slot: 1000, term1: 6000, term2: 6000 },
  };

  // Search user by app ID or email
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return toast.error("Enter Application ID, Name, Email, or Phone");

    setVerifying(true);
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("applicationId", "==", search));
      const snap = await getDocs(q);

      let foundDoc = null;
      if (!snap.empty) {
        foundDoc = snap.docs[0];
      } else {
        const altQ = query(usersRef, where("email", "==", search));
        const altSnap = await getDocs(altQ);
        if (!altSnap.empty) foundDoc = altSnap.docs[0];
      }

      if (!foundDoc) {
        toast.error("No user found!");
        setProfile(null);
        return;
      }

      const data = foundDoc.data();
      setProfile({ ...data, id: foundDoc.id });
      setPayments(data.payments || {}); // payments stored per track
      toast.success("User found!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to search user");
    } finally {
      setVerifying(false);
    }
  };

  // Mark a payment as completed
  const handleMarkPaid = async (trackKey, key, amount) => {
    if (!profile) return;
    try {
      const userRef = doc(db, "users", profile.id);
      const newPayment = {
        status: "completed",
        paidAt: new Date(),
        amount,
      };

      // Store payments under track
      await updateDoc(userRef, {
        [`payments.${trackKey}.${key}`]: newPayment,
      });

      setPayments((prev) => ({
        ...prev,
        [trackKey]: {
          ...prev[trackKey],
          [key]: newPayment,
        },
      }));

      toast.success(`${key} for ${trackKey} marked as paid!`);
    } catch (err) {
      console.error(err);
      toast.error("Error updating payment");
    }
  };

  // Generate a simple receipt
  const generateReceipt = (trackKey, key, data) => {
    const paidDate = data.paidAt?.toDate ? data.paidAt.toDate() : data.paidAt;
    const receiptContent = `
SRI VYRA
-----------------------
RECEIPT

Name: ${profile.firstName} ${profile.lastName}
Application ID: ${profile.applicationId}
Track: ${trackKey}
Payment: ${key}
Amount: ₹${data.amount}
Paid At: ${paidDate || "-"}
    `;
    const blob = new Blob([receiptContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${trackKey}-${key}-receipt.txt`;
    link.click();
  };

  // Render each payment card
  const renderPaymentCard = (label, trackKey, key, amount) => {
    const data = payments[trackKey]?.[key] || {};
    return (
      <motion.div
        key={`${trackKey}-${key}`}
        whileHover={{ scale: 1.02 }}
        className="rounded-2xl p-6 shadow-md border border-gray-200 bg-white flex justify-between items-center"
      >
        <div>
          <h2 className="text-lg font-semibold mb-1">{label}</h2>
          <p className="text-gray-600">
            <span className="font-medium">Amount:</span> ₹{amount}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Status:</span>{" "}
            {data.status === "completed" ? (
              <span className="text-green-600 font-bold">Completed</span>
            ) : (
              <span className="text-orange-500 font-bold">Pending</span>
            )}
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          {data.status !== "completed" && (
            <button
              onClick={() => handleMarkPaid(trackKey, key, amount)}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
            >
              Mark as Paid
            </button>
          )}
          {data.status === "completed" && (
            <button
              onClick={() => generateReceipt(trackKey, key, data)}
              className="px-4 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
            >
              Download Receipt
            </button>
          )}
        </div>
      </motion.div>
    );
  };

  // Dynamically filter available tracks based on payments
  const availableTracks = useMemo(() => {
    if (!profile) return [];

    const premiumTermPaid =
      payments.premium?.term1?.status === "completed" ||
      payments.premium?.term2?.status === "completed";

    const mentorshipTermPaid =
      payments.mentorship?.term1?.status === "completed" ||
      payments.mentorship?.term2?.status === "completed";

    if (premiumTermPaid) return ["premium"];
    if (mentorshipTermPaid) return ["mentorship"];

    // Slot booking allows both tracks
    return ["premium", "mentorship"];
  }, [profile, payments]);

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-10 text-center"
      >
        Receipts Portal
      </motion.h1>

      {/* Search Section */}
      <motion.form
        onSubmit={handleSearch}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 mb-8 max-w-lg mx-auto"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Enter Application ID / Email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-xl py-2 pl-10 pr-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={verifying}
          className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          {verifying ? "Searching..." : "Search"}
        </button>
      </motion.form>

      {profile && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
          {/* Profile Info */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-3 text-center">User Details</h2>
            <div className="grid grid-cols-2 gap-y-2 text-gray-700">
              <p>
                <span className="font-medium">Name:</span> {profile.firstName} {profile.lastName}
              </p>
              <p>
                <span className="font-medium">Email:</span> {profile.email}
              </p>
              <p>
                <span className="font-medium">Phone:</span> {profile.phone}
              </p>
              <p>
                <span className="font-medium">App ID:</span>{" "}
                <span className="font-bold text-green-700">{profile.applicationId}</span>
              </p>
            </div>
          </div>

          {/* Track Selection */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <label className="block mb-3 font-semibold text-center">Select Track</label>
            <select
              value={track}
              onChange={(e) => setTrack(e.target.value)}
              className="border p-3 rounded-xl w-full focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Select --</option>
              {availableTracks.includes("premium") && <option value="premium">Premium</option>}
              {availableTracks.includes("mentorship") && <option value="mentorship">Mentorship</option>}
            </select>
          </div>

          {/* Payments */}
          {track && (
            <div className="grid gap-6">
              {renderPaymentCard("Slot Booking", track, "slot", feeStructure[track].slot)}
              {renderPaymentCard("Term 1 Fee", track, "term1", feeStructure[track].term1)}
              {renderPaymentCard("Term 2 Fee", track, "term2", feeStructure[track].term2)}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}

export default ReceiptsPage;
