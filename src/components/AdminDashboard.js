import React, { useEffect, useState, useMemo } from "react";
import { db } from "./firebase";
import { useAuth } from "../components/AuthContext";
import { Navigate } from "react-router-dom";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { Search } from "lucide-react";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("users");
  const [filters, setFilters] = useState({
    studentId: "all",
    access: {},
    track: "all",
    referral: "all",
  });

  const { user: currentUser, loading: authLoading } = useAuth();

  const trackDefaults = useMemo(
    () => ({
      premium: { slot: 1000, term1: 4500, term2: 4500 },
      mentorship: { slot: 1000, term1: 6000, term2: 6000 },
      elite: { slot: 1000, term1: 2500, term2: 2500 },
      na: { slot: 0, term1: 0, term2: 0 },
    }),
    []
  );

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const snapshot = await getDocs(collection(db, "users"));
      const usersList = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));

      const batchUpdatePromises = [];
      usersList.forEach((u) => {
        if (!u.payments) {
          const track = u.course?.toLowerCase() || "premium";
          u.payments = { track, ...trackDefaults[track], referral: false };
          batchUpdatePromises.push(
            updateDoc(doc(db, "users", u.id), { payments: u.payments })
          );
        }
      });

      if (batchUpdatePromises.length) await Promise.all(batchUpdatePromises);

      setUsers(usersList);
      setFiltered(usersList);
      setLoading(false);
    };

    fetchUsers();
  }, [trackDefaults]);

  const handleSearch = (e) => setSearch(e.target.value.toLowerCase());

  const toggleAccess = async (userId, field, current) => {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, { [`access.${field}`]: !current });
    setUsers((prev) =>
      prev.map((u) =>
        u.id === userId
          ? { ...u, access: { ...u.access, [field]: !current } }
          : u
      )
    );
  };

  const accessFields = [
    "bigdataHadoop",
    "bigdataSqoop",
    "bigdataHive",
    "python",
    "sql",
    "pysparkBasic",
    "pysparkIntermediate",
    "pysparkAdvanced",
    "pysparkAWS",
    "common",
    "daily",
    "interview",
    "certificateEligible",
    "certificateIssued",
  ];

  const getTotal = (track) => {
    if (track === "mentorship") return 13000;
    if (track === "premium") return 10000;
    if (track === "elite") return 6000;
    return 0;
  };
  const getReferralBonus = (track) => {
    if (track === "mentorship") return 2000;
    if (track === "premium") return 1000;
    if (track === "elite") return 500;
    return 0;
  };

  const updatePayment = async (userId, updatedData) => {
    const user = users.find((u) => u.id === userId);
    if (!user) return;
    const newPayments = { ...user.payments, ...updatedData };

    setUsers((prev) =>
      prev.map((u) => (u.id === userId ? { ...u, payments: newPayments } : u))
    );

    await updateDoc(doc(db, "users", userId), { payments: newPayments });
  };

  useEffect(() => {
    let temp = [...users];

    if (search) {
      temp = temp.filter(
        (u) =>
          u.email?.toLowerCase().includes(search) ||
          u.firstName?.toLowerCase().includes(search) ||
          u.lastName?.toLowerCase().includes(search)
      );
    }

    if (view === "users") {
      if (filters.studentId === "empty") temp = temp.filter((u) => !u.applicationId);
      else if (filters.studentId === "notempty") temp = temp.filter((u) => u.applicationId);

      Object.entries(filters.access).forEach(([field, val]) => {
        if (val === "checked") temp = temp.filter((u) => u.access?.[field]);
        else if (val === "unchecked") temp = temp.filter((u) => !u.access?.[field]);
      });
    }

  <div className="flex items-center space-x-2">
    <input
      type="checkbox"
      id="referral"
      checked={filters.referral}
      onChange={(e) => setFilters({ ...filters, referral: e.target.checked })}
      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
    />
    <label htmlFor="referral" className="text-sm font-medium text-gray-700">
      Referral Only
    </label>
  </div>

    setFiltered(temp);
  }, [search, filters, users, view]);

  const totalsSummary = filtered.reduce(
    (acc, user) => {
      const p = user.payments || {};
      const total = getTotal(p.track);
      const referralBonus = p.referral ? getReferralBonus(p.track) : 0;
      const remaining = total - (Number(p.slot) + Number(p.term1) + Number(p.term2) + referralBonus);
      const rAmount = Number(p.slot) + Number(p.term1) + Number(p.term2); 
      const referralAmount = referralBonus;

      acc.totalAmount += total;
      acc.remainingAmount += remaining;
      acc.rAmount += rAmount;
      acc.referralAmount += referralAmount;
      acc.sAmount += Number(p.slot);
      acc.t1Amount += Number(p.term1);
      acc.t2Amount += Number(p.term2);
      return acc;
    },
    { totalAmount: 0, remainingAmount: 0, sAmount: 0, t1Amount: 0, t2Amount: 0, rAmount: 0, referralAmount: 0 }
  );

  if (authLoading) return <p className="text-center p-6">Checking access...</p>;
  if (!currentUser) return <Navigate to="/" replace />;
  if (currentUser.email !== "ande.rupeshphanindrasai@gmail.com") return <Navigate to="/" replace />;

  return (
    <section className="bg-white text-gray-800 pl-0 pr-6 md:pl-0 md:pr-12 py-16 min-h-screen">
      <div className="flex gap-6 max-w-7xl mx-auto">
        
        {/* Sidebar */}
        <div className="w-1/4 hidden md:block">
          {view === "users" && (
            <>
              <SidebarSection title="Student ID">
                {["all", "empty", "notempty"].map((opt) => (
                  <FilterButton
                    key={opt}
                    active={filters.studentId === opt}
                    onClick={() => setFilters({ ...filters, studentId: opt })}
                  >
                    {opt === "all"
                      ? "All"
                      : opt === "empty"
                      ? "Empty"
                      : "Not Empty"}
                  </FilterButton>
                ))}
              </SidebarSection>

              <SidebarSection title="Access Filters">
                {accessFields.map((field) => (
                  <FilterButton
                    key={field}
                    active={filters.access[field] !== "all" && filters.access[field]}
                    onClick={() => {
                      const next =
                        filters.access[field] === "checked"
                          ? "unchecked"
                          : filters.access[field] === "unchecked"
                          ? "all"
                          : "checked";
                      setFilters({
                        ...filters,
                        access: { ...filters.access, [field]: next },
                      });
                    }}
                  >
                    {field} ({filters.access[field] || "all"})
                  </FilterButton>
                ))}
              </SidebarSection>
            </>
          )}

          {view === "payments" && (
            <>
              <SidebarSection title="Track">
                {["all", "premium", "mentorship", "elite", "na"].map((t) => (
                  <FilterButton
                    key={t}
                    active={filters.track === t}
                    onClick={() => setFilters({ ...filters, track: t })}
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </FilterButton>
                ))}
              </SidebarSection>

              <SidebarSection title="Referral">
                {["all", "yes", "no"].map((opt) => (
                  <FilterButton
                    key={opt}
                    active={filters.referral === opt}
                    onClick={() => setFilters({ ...filters, referral: opt })}
                  >
                    {opt === "all"
                      ? "All"
                      : opt === "yes"
                      ? "Referral Applied"
                      : "No Referral"}
                  </FilterButton>
                ))}
              </SidebarSection>

              {/* Totals */}
              <SidebarSection title="Summary">
                <div className="mt-6 grid grid-row-1 gap-4">
                  {/* Total Amount */}
                  <div className="bg-indigo-100 p-4 rounded-xl shadow-sm text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Total Amount</p>
                    <p className="text-lg font-bold text-indigo-700">₹{totalsSummary.totalAmount}</p>
                  </div>

                  {/* Slot Amount */}
                  <div className="bg-amber-100 p-4 rounded-xl shadow-sm text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Slot Amount</p>
                    <p className="text-lg font-bold text-amber-700">₹{totalsSummary.sAmount}</p>
                  </div>

                  {/* Term1 Amount */}
                  <div className="bg-cyan-100 p-4 rounded-xl shadow-sm text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Term1 Amount</p>
                    <p className="text-lg font-bold text-cyan-700">₹{totalsSummary.t1Amount}</p>
                  </div>

                  {/* Term2 Amount */}
                  <div className="bg-purple-100 p-4 rounded-xl shadow-sm text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Term2 Amount</p>
                    <p className="text-lg font-bold text-purple-700">₹{totalsSummary.t2Amount}</p>
                  </div>

                  {/* Received Amount */}
                  <div className="bg-green-100 p-4 rounded-xl shadow-sm text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Received</p>
                    <p className="text-lg font-bold text-green-700">₹{totalsSummary.rAmount}</p>
                  </div>

                  {/* Remaining Amount */}
                  <div className="bg-red-100 p-4 rounded-xl shadow-sm text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Remaining</p>
                    <p className="text-lg font-bold text-red-700">₹{totalsSummary.remainingAmount}</p>
                  </div>

                  {/* Referral Amount */}
                  <div className="bg-pink-100 p-4 rounded-xl shadow-sm text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Referral</p>
                    <p className="text-lg font-bold text-pink-700">₹{totalsSummary.referralAmount}</p>
                  </div>
                </div>
              </SidebarSection>
            </>
          )}
        </div>

        {/* Main */}
        <div className="w-full md:w-3/4">
          <h2 className="text-4xl font-bold mb-12 text-center">Admin Dashboard</h2>

          {/* Controls */}
          <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Search Input */}
            <div className="relative w-full md:w-1/3 group">
              <Search className="absolute left-3 top-3 text-gray-400 group-focus-within:text-black transition-colors duration-200" size={18} />
              <input
                type="text"
                placeholder="Search by name or email..."
                className="pl-10 pr-4 py-2 w-full border-b border-gray-300 focus:border-black focus:outline-none transition-all duration-300"
                value={search}
                onChange={handleSearch}
              />
            </div>

            {/* View Selector */}
            <div className="relative">
              <select
                value={view}
                onChange={(e) => setView(e.target.value)}
                className="appearance-none border-b border-gray-300 focus:border-black focus:outline-none px-10 py-2 bg-transparent transition-all duration-300 cursor-pointer"
              >
                <option value="users">User Details</option>
                <option value="payments">Payment Info</option>
              </select>
              <span className="absolute right-2 top-3 text-gray-400 pointer-events-none">▼</span>
            </div>

            {/* Count */}
            <p className="text-sm text-gray-600 font-medium transition-opacity duration-300 hover:opacity-80">
              Showing <span className="font-semibold">{filtered.length}</span> of {users.length} users
            </p>
          </div>

          {/* Tables */}
          {loading ? (
            <p className="text-center">Loading users...</p>
          ) : (
            <div className="overflow-x-auto rounded-xl border-2">
              {view === "users" ? (
                <table className="min-w-full text-sm text-center border-collapse border-2">
                  <thead>
                    <tr className="border-2 bg-gray-50">
                      <th className="p-3 border-2 w-100">First</th>
                      <th className="p-3 border-2">Last</th>
                      <th className="p-3 border-2">Email</th>
                      <th className="p-3 border-2 w-100">Student ID</th>
                      {accessFields.map((field) => (
                        <th key={field} className="p-3 border-2">
                          {field}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((user, idx) => (
                      <tr
                        key={user.id}
                        className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100`}
                      >
                        <td className="p-3 border-2 w-40 whitespace-nowrap">{user.firstName || "—"}</td>
                        <td className="p-3 border-2">{user.lastName || "—"}</td>
                        <td className="p-3 border-2">{user.email}</td>
                        <td className="p-3 border-2 w-40 whitespace-nowrap">{user.applicationId || "—"}</td>
                        {accessFields.map((field) => (
                          <td key={field} className="p-3 border-2">
                            <input
                              type="checkbox"
                              checked={user.access?.[field] || false}
                              onChange={() => toggleAccess(user.id, field, user.access?.[field])}
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="min-w-full text-sm text-center border-collapse border-2">
                  <thead>
                    <tr className="border-2 bg-gray-50">
                      <th className="p-3 border-2 w-100">Name</th>
                      <th className="p-3 border-2">Email</th>
                      <th className="p-3 border-2">Track</th>
                      <th className="p-3 border-2">Total</th>
                      <th className="p-3 border-2">Slot</th>
                      <th className="p-3 border-2">Term1</th>
                      <th className="p-3 border-2">Term2</th>
                      <th className="p-3 border-2">Referral</th>
                      <th className="p-3 border-2">Remaining</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((user, idx) => {
                      const p = user.payments || {};
                      const total = getTotal(p.track);
                      const referralBonus = p.referral ? getReferralBonus(p.track) : 0;
                      const remaining = total - (Number(p.slot) + Number(p.term1) + Number(p.term2) + referralBonus);

                      return (
                        <tr
                          key={user.id}
                          className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100`}
                        >
                          <td className="p-3 border-2 font-medium w-40 whitespace-nowrap">{user.firstName} {user.lastName}</td>
                          <td className="p-3 border-2">{user.email}</td>
                          <td className="p-3 border-2">
                            <select
                              value={p.track}
                              onChange={(e) => {
                                const newTrack = e.target.value;
                                updatePayment(user.id, { track: newTrack, ...trackDefaults[newTrack] });
                              }}
                              className="border rounded px-2 py-1"
                            >
                              <option value="premium">Premium</option>
                              <option value="mentorship">Mentorship</option>
                              <option value="elite">Elite</option>
                              <option value="na">NA</option>
                            </select>
                          </td>
                          <td className="p-3 border-2">₹{total}</td>
                          <td className="p-3 border-2">₹{p.slot}</td>
                          <td className="p-3 border-2">
                            <input
                              type="number"
                              value={p.term1 || ""}
                              onChange={(e) => updatePayment(user.id, { term1: Number(e.target.value) })}
                              className="w-20 border rounded text-center"
                            />
                          </td>
                          <td className="p-3 border-2">
                            <input
                              type="number"
                              value={p.term2 || ""}
                              onChange={(e) => updatePayment(user.id, { term2: Number(e.target.value) })}
                              className="w-20 border rounded text-center"
                            />
                          </td>
                          <td className="p-3 border-2">
                            <input
                              type="checkbox"
                              checked={p.referral || false}
                              onChange={(e) => updatePayment(user.id, { referral: e.target.checked })}
                              className="h-4 w-4 text-blue-600 border-gray-300 rounded cursor-pointer"
                            />
                          </td>
                          <td className="p-3 border-2">₹{remaining}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Shared clean components
function SidebarSection({ title, children }) {
  return (
    <div className="mb-6 text-center">
      <h3 className="font-semibold inline-block border-b-2 border-black pb-1 mb-3">
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
}

function FilterButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 mb-2 rounded-full border text-sm transition-all duration-200 mx-auto block w-fit
        ${active ? "bg-black text-white border-black" : "bg-white text-black border-gray-300 hover:border-black"}`}
    >
      {children}
    </button>
  );
}

export default AdminDashboard;
