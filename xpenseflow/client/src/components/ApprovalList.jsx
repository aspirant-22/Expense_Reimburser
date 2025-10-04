import React from "react";
import { useEffect, useState } from "react";

export default function ApprovalList() {
  const [approvals, setApprovals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/approvals")
      .then(res => res.json())
      .then(data => setApprovals(data))
      .catch(err => console.error("Failed to fetch approvals:", err));
  }, []);

   if (!approvals || approvals.length === 0) {
    return (
      <div className="p-4 bg-white border rounded">
        <h2 className="text-lg font-semibold mb-2">Pending Approvals</h2>
        <p className="text-gray-500">No approvals pending.</p>
      </div>
    );
  }
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Pending Approvals</h2>
      {approvals.map((a, i) => (
        <div key={i} className="border p-3 mb-2 rounded">
          <p><b>{a.Expense?.category}</b> - {a.Expense?.description}</p>
          <p>Status: {a.status}</p>
        </div>
      ))}
    </div>
  );
}
