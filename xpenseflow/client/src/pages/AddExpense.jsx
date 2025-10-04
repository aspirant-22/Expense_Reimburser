import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddExpense() {
  const [form, setForm] = useState({
    employee: "",
    date: "",
    description: "",
    category: "",
    currency: "USD",
    amount: "",
    paidBy: "",
    approver: "",
    status: "Pending",
    time: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async () => {
    await fetch("http://localhost:5000/api/expenses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, userId: 1 }),
    });
    alert("Expense submitted successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">
        <h2 className="text-xl font-bold mb-4">Add New Expense</h2>
        <input
          type="text"
          placeholder="Employee"
          className="border p-2 mb-3 rounded w-full"
          onChange={(e) => setForm({ ...form, employee: e.target.value })}
        />
        <input
          type="date"
          className="border p-2 mb-3 rounded w-full"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          className="border p-2 mb-3 rounded w-full"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          className="border p-2 mb-3 rounded w-full"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <div className="flex gap-2 mb-3">
          <select
            className="border p-2 rounded w-1/3"
            value={form.currency}
            onChange={(e) => setForm({ ...form, currency: e.target.value })}
          >
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="EUR">EUR</option>
          </select>
          <input
            type="number"
            placeholder="Amount"
            className="border p-2 rounded w-2/3"
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
          />
        </div>
        <input
          type="text"
          placeholder="Paid By"
          className="border p-2 mb-3 rounded w-full"
          onChange={(e) => setForm({ ...form, paidBy: e.target.value })}
        />
        <input
          type="text"
          placeholder="Approver"
          className="border p-2 mb-3 rounded w-full"
          onChange={(e) => setForm({ ...form, approver: e.target.value })}
        />
        <input
          type="time"
          className="border p-2 mb-3 rounded w-full"
          onChange={(e) => setForm({ ...form, time: e.target.value })}
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
