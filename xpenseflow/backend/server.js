import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let expenses = [];

// POST: Add new expense
app.post("/api/expenses", (req, res) => {
  const expense = { id: expenses.length + 1, ...req.body };
  expenses.push(expense);
  res.status(201).json(expense);
});

// GET: Fetch all expenses
app.get("/api/expenses", (req, res) => {
  res.json(expenses);
});

app.listen(5000, () => {
  console.log("✅ Backend running on http://localhost:5000");
});
