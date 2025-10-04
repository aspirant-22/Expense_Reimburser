import { useEffect, useState } from "react";

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/expenses")
      .then(res => res.json())
      .then(data => setExpenses(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Expense Dashboard</h1>
      <div className="grid gap-3">
        {expenses.map((exp, i) => (
          <div key={i} className="border p-4 rounded-lg shadow-sm">
            <p><b>{exp.category}</b> - {exp.description}</p>
            <p>Amount: {exp.amount} {exp.currency} → ₹{exp.convertedAmount}</p>
            <p>Status: {exp.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
