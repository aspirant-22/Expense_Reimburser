import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/expenses")
      .then((res) => res.json())
      .then((data) => setExpenses(data))
      .catch((err) => console.error(err));
  }, []);

  const pendingApprovals = expenses.filter((e) => e.status === "Pending");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Expense Dashboard</h1>
          <button
            onClick={() => navigate("/add-expense")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + New Expense
          </button>
        </div>

        {/* Expense Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg mb-6">
          <table className="min-w-full text-sm text-left border">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2 border">Employee</th>
                <th className="px-4 py-2 border">Description</th>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Category</th>
                <th className="px-4 py-2 border">Paid By</th>
                <th className="px-4 py-2 border">Remarks</th>
                <th className="px-4 py-2 border">Amount</th>
                <th className="px-4 py-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((exp, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 border">{exp.employee || "Unknown"}</td>
                  <td className="px-4 py-2 border">{exp.description}</td>
                  <td className="px-4 py-2 border">{exp.date}</td>
                  <td className="px-4 py-2 border">{exp.category}</td>
                  <td className="px-4 py-2 border">{exp.paidBy || "Self"}</td>
                  <td className="px-4 py-2 border">{exp.remarks || "-"}</td>
                  <td className="px-4 py-2 border">
                    {exp.amount} {exp.currency}
                  </td>
                  <td
                    className={`px-4 py-2 border font-semibold ${
                      exp.status === "Approved"
                        ? "text-green-600"
                        : exp.status === "Pending"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {exp.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pending Approvals Box */}
        <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">🕓 Pending Approvals</h2>
          {pendingApprovals.length === 0 ? (
            <p className="text-gray-600">No pending approvals</p>
          ) : (
            pendingApprovals.map((p, i) => (
              <div key={i} className="border-b py-2">
                <p>
                  <b>{p.category}</b> - {p.description} ({p.amount}{" "}
                  {p.currency})
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
