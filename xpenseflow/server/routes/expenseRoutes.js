import express from "express";
import Expense from "../models/Expense.js";
import User from "../models/User.js";  
import fetch from "node-fetch";

const router = express.Router();

// Create expense
router.post("/", async (req, res) => {
  const { employee , amount,
    currency,
    category,
    description,
    date,
    userId,
    paidBy,
    remarks,
    status } = req.body;
  try {
    const rateRes = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
    const data = await rateRes.json();
    const convertedAmount = amount * data.rates["INR"]; // Convert to INR

    const expense = await Expense.create({
        employee,
      amount,
      currency,
      convertedAmount,
      category,
      description,
      date,
      userId,
      paidBy,
      remarks,
      status: status || "Pending"
    });
    res.json(expense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all expenses
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.findAll({
      include: [{ model: User, attributes: ["name"] }] // include User's name
    });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
