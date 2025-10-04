import React from "react";
import { useState } from "react";

export default function ExpenseForm({ addExpense }) {
  const [form, setForm] = useState({
    amount: "",
    currency: "USD",
    category: "",
    description: "",
    date: ""
  });

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, userId: 1 }) // You can make userId dynamic later
      });

      const data = await res.json();

      // Add the new expense to Dashboard list
      addExpense(data);

      alert("Expense submitted!");
      // Clear the form
      setForm({
        amount: "",
        currency: "USD",
        category: "",
        description: "",
        date: ""
      });
    } catch (err) {
      console.error(err);
      alert("Failed to submit expense!");
    }
  };

  return (
    <div className="p-4 border rounded bg-white mb-4">
      <h2 className="font-semibold mb-2">Submit Expense</h2>
      <input
        className="border p-2 m-1 w-full"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />
      <input
        className="border p-2 m-1 w-full"
        placeholder="Currency"
        value={form.currency}
        onChange={(e) => setForm({ ...form, currency: e.target.value })}
      />
      <input
        className="border p-2 m-1 w-full"
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      <input
        className="border p-2 m-1 w-full"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        className="border p-2 m-1 w-full"
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-3 py-1 rounded mt-2"
      >
        Submit
      </button>
    </div>
  );
}
