import { useEffect, useState } from "react";

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/expenses")
      .then(res => res.json())
      .then(data => setExpenses(data));
  }, []);

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Expense History</h2>
      {expenses.map((e, i) => (
        <div key={i} className="border p-3 mb-2 rounded">
          <p>{e.category} - {e.description}</p>
          <p>₹{e.convertedAmount} ({e.currency})</p>
          <p>Status: {e.status}</p>
        </div>
      ))}
    </div>
  );
}
