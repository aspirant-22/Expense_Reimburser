import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Signup (creates admin)
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({ name, email, password, role: "admin" });
  res.json(user);
});

// Login (simple for demo)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email, password } });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });
  res.json(user);
});

export default router;
