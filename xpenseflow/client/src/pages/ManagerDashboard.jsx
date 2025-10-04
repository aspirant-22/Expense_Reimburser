import React, { useEffect, useState } from "react";

export default function ManagerDashboard() {
  const [approvals, setApprovals] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch approvals from backend
  const fetchApprovals = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/approvals");
      const data = await res.json();
      setApprovals(data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch approvals");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApprovals();
  }, []);

  // Handle approve/reject action
  const handleAction = async (id, action) => {
    try {
      await fetch(`http://localhost:5000/api/approvals/${id}/${action}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      // Refresh approvals after action
      fetchApprovals();
    } catch (err) {
      console.error(err);
      alert(`Failed to ${action} approval`);
    }
  };

  if (loading) return <p className="p-4">Loading approvals...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Approvals to Review</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full text-left text-sm border">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2 border">Approval Subject</th>
              <th className="px-4 py-2 border">Request Owner</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Request Status</th>
              <th className="px-4 py-2 border">Total Amount</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {approvals.map((appr) => (
              <tr key={appr.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 border">{appr.description}</td>
                <td className="px-4 py-2 border">{appr.employeeName}</td>
                <td className="px-4 py-2 border">{appr.category}</td>
                <td className="px-4 py-2 border">{appr.status}</td>
                <td className="px-4 py-2 border">
                  {appr.amount} {appr.currency}
                </td>
                <td className="px-4 py-2 border space-x-2">
                  {appr.status === "Pending" && (
                    <>
                      <button
                        onClick={() => handleAction(appr.id, "approve")}
                        className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleAction(appr.id, "reject")}
                        className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                      >
                        Reject
                      </button>
                    </>
                  )}
                  {appr.status !== "Pending" && <span>—</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {approvals.length === 0 && (
          <p className="p-4 text-gray-600">No approvals to review.</p>
        )}
      </div>
    </div>
  );
}
