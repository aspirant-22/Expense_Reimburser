// server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// In-memory data
let users = [
  { id: 1, name: "Alice", role: "employee", requiresApproval: true },
  { id: 2, name: "Bob", role: "manager", requiresApproval: true },
  { id: 3, name: "Charlie", role: "manager", requiresApproval: false },
];

let expenses = [];
let approvals = [];
let approvalRules = [];

// -------------------- EXPENSES --------------------

// POST: Add new expense
app.post("/api/expenses", (req, res) => {
  const expense = { id: expenses.length + 1, status: "Pending", ...req.body };
  expenses.push(expense);

  // Create corresponding approval for manager review
  const approval = {
    id: approvals.length + 1,
    expenseId: expense.id,
    status: "Pending",
    comment: "",
    category: expense.category,
    description: expense.description,
    employee: expense.employee || "User",
    amount: expense.amount,
    currency: expense.currency,
  };
  approvals.push(approval);

  res.status(201).json(expense);
});

// GET: Fetch all expenses
app.get("/api/expenses", (req, res) => {
  res.json(expenses);
});

// -------------------- APPROVALS --------------------

// GET: Fetch all approvals (for manager dashboard)
app.get("/api/approvals", (req, res) => {
  res.json(approvals);
});

// POST: Approve or reject an approval
app.post("/api/approvals/:id/:action", (req, res) => {
  const { id, action } = req.params;
  const approval = approvals.find((a) => a.id === parseInt(id));
  if (!approval) return res.status(404).json({ message: "Approval not found" });

  approval.status = action === "approve" ? "Approved" : "Rejected";
  approval.comment = req.body.comment || "";

  // Update corresponding expense status
  const expense = expenses.find((e) => e.id === approval.expenseId);
  if (expense) expense.status = approval.status;

  res.json({ message: `Expense ${approval.status}`, approval });
});

// -------------------- USERS --------------------

// GET: Fetch all users (for AdminPanel)
app.get("/api/users", (req, res) => {
  res.json(users);
});

// -------------------- APPROVAL RULES --------------------

// POST: Create new approval rule
app.post("/api/approval-rules", (req, res) => {
  const { name, description, managerId, isManagerApprover, sequence, minApprovalPercentage, approverIds } = req.body;

  const rule = {
    id: approvalRules.length + 1,
    name,
    description,
    managerId,
    isManagerApprover,
    sequence,
    minApprovalPercentage,
    approverIds: approverIds || [],
  };

  approvalRules.push(rule);
  res.json(rule);
});

// GET: Fetch all approval rules
app.get("/api/approval-rules", (req, res) => {
  res.json(approvalRules);
});

// -------------------- START SERVER --------------------
app.listen(5000, () => {
  console.log("✅ Backend running on http://localhost:5000");
});
