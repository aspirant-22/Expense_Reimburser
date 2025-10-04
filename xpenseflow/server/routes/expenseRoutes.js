import express from "express";
import Expense from "../models/Expense.js";
import fetch from "node-fetch";

const router = express.Router();

// Create expense
router.post("/", async (req, res) => {
  const { amount, currency, category, description, date, userId } = req.body;
  try {
    const rateRes = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
    const data = await rateRes.json();
    const convertedAmount = amount * data.rates["INR"]; // Convert to INR

    const expense = await Expense.create({
      amount,
      currency,
      convertedAmount,
      category,
      description,
      date,
      userId
    });
    res.json(expense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all expenses
router.get("/", async (req, res) => {
  const expenses = await Expense.findAll();
  res.json(expenses);
});

export default router;
