// server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// In-memory data
let expenses = [];
let approvals = [];

// POST: Add new expense
app.post("/api/expenses", (req, res) => {
  const expense = { id: expenses.length + 1, ...req.body };
  expenses.push(expense);

  // Create a corresponding approval for manager review
  const approval = {
    id: approvals.length + 1,
    expenseId: expense.id,
    status: "Pending",
    comment: "",
    category: expense.category,
    description: expense.description,
    employeeName: expense.employeeName || "User",
    amount: expense.amount,
    currency: expense.currency
  };
  approvals.push(approval);

  res.status(201).json(expense);
});

// GET: Fetch all expenses
app.get("/api/expenses", (req, res) => {
  res.json(expenses);
});

// GET: Fetch all approvals (for manager dashboard)
app.get("/api/approvals", (req, res) => {
  res.json(approvals);
});

// POST: Approve or reject an approval
app.post("/api/approvals/:id/:action", (req, res) => {
  const { id, action } = req.params;
  const approval = approvals.find(a => a.id === parseInt(id));
  if (!approval) return res.status(404).json({ message: "Approval not found" });

  // Update approval status
  approval.status = action === "approve" ? "Approved" : "Rejected";
  approval.comment = req.body.comment || "";

  // ALSO update corresponding expense status
  const expense = expenses.find(e => e.id === approval.expenseId);
  if (expense) expense.status = approval.status;

  res.json({ message: `Expense ${approval.status}`, approval });
});

// Start server
app.listen(5000, () => {
  console.log("✅ Backend running on http://localhost:5000");
});
