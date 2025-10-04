import React from "react";
export default function ExpenseList({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="mt-4 p-4 bg-white border rounded">
        <p className="text-gray-500">No expenses submitted yet.</p>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Expense History</h2>
      {expenses.map((e, i) => (
        <div key={i} className="border p-3 mb-2 rounded bg-white">
          <p><b>{e.category}</b> - {e.description}</p>
          <p>Amount: {e.amount} {e.currency} → ₹{e.convertedAmount || e.amount}</p>
          <p>Status: {e.status || "Pending"}</p>
        </div>
      ))}
    </div>
  );
}
