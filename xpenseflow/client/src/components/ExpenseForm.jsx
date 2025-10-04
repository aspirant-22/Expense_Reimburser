import React from "react";
import React, { useState } from "react";

export default function ExpenseForm({ addExpense }) {
  const [form, setForm] = useState({
    employee: "",
    description: "",
    category: "",
    amount: "",
    currency: "USD",
    date: "",
    paidBy: "",
    remarks: "",
    status: "Pending"
  });

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, userId: 1 }) // Make dynamic later
      });

      if (!res.ok) {
        throw new Error("Failed to submit expense");
      }

      const data = await res.json();

      // Add the new expense to Dashboard list
      addExpense(data);

      alert("✅ Expense submitted successfully!");
      // Clear the form
      setForm({
        employee: "",
        description: "",
        category: "",
        amount: "",
        currency: "USD",
        date: "",
        paidBy: "",
        remarks: "",
        status: "Pending"
      });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to submit expense!");
    }
  };

  return (
    <div className="p-6 border rounded bg-white shadow-md max-w-lg mx-auto mt-6">
      <h2 className="font-bold text-xl mb-4 text-center">Add New Expense</h2>

      <input
        className="border p-2 m-1 w-full"
        placeholder="Employee Name"
        value={form.employee}
        onChange={(e) => setForm({ ...form, employee: e.target.value })}
      />

      <input
        className="border p-2 m-1 w-full"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <input
        className="border p-2 m-1 w-full"
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      <input
        type="number"
        className="border p-2 m-1 w-full"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />

      <select
        className="border p-2 m-1 w-full"
        value={form.currency}
        onChange={(e) => setForm({ ...form, currency: e.target.value })}
      >
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>

      <input
        type="date"
        className="border p-2 m-1 w-full"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />

      <input
        className="border p-2 m-1 w-full"
        placeholder="Paid By"
        value={form.paidBy}
        onChange={(e) => setForm({ ...form, paidBy: e.target.value })}
      />

      <input
        className="border p-2 m-1 w-full"
        placeholder="Remarks"
        value={form.remarks}
        onChange={(e) => setForm({ ...form, remarks: e.target.value })}
      />

      <select
        className="border p-2 m-1 w-full"
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option value="Pending">Pending</option>
        <option value="Approved">Approved</option>
        <option value="Rejected">Rejected</option>
      </select>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4 w-full hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </div>
  );
}
