import { useState } from "react";

export default function ExpenseForm() {
  const [form, setForm] = useState({
    amount: "", currency: "USD", category: "", description: "", date: ""
  });

  const handleSubmit = async () => {
    await fetch("http://localhost:5000/api/expenses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, userId: 1 })
    });
    alert("Expense submitted!");
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="font-semibold mb-2">Submit Expense</h2>
      <input className="border p-2 m-1" placeholder="Amount" onChange={(e)=>setForm({...form, amount:e.target.value})}/>
      <input className="border p-2 m-1" placeholder="Currency" onChange={(e)=>setForm({...form, currency:e.target.value})}/>
      <input className="border p-2 m-1" placeholder="Category" onChange={(e)=>setForm({...form, category:e.target.value})}/>
      <input className="border p-2 m-1" placeholder="Description" onChange={(e)=>setForm({...form, description:e.target.value})}/>
      <input className="border p-2 m-1" type="date" onChange={(e)=>setForm({...form, date:e.target.value})}/>
      <button onClick={handleSubmit} className="bg-blue-600 text-white px-3 py-1 rounded">Submit</button>
    </div>
  );
}
