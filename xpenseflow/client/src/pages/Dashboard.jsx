import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ApprovalList from "../components/ApprovalList";


export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/expenses")
      .then(res => res.json())
      .then(data => setExpenses(data))
      .catch(err => console.error(err));
  }, []);

  // Add a new expense to the list
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left side: Expense Form + Expense List */}
        <div className="md:col-span-2">
          <ExpenseForm addExpense={addExpense} />
          <ExpenseList expenses={expenses} />
        </div>

        {/* Right side: Pending Approvals */}
        <div>
          <ApprovalList />
        </div>
      </div>
    </div>
  );
}
