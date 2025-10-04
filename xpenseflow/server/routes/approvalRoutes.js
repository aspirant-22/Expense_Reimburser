import express from "express";
import Approval from "../models/Approval.js";
import Expense from "../models/Expense.js";

const router = express.Router();

// Fetch all pending approvals for manager/admin
router.get("/", async (req, res) => {
  const approvals = await Approval.findAll({
    include: [Expense]
  });
  res.json(approvals);
});

// Approve/Reject
router.post("/:id/:action", async (req, res) => {
  const { id, action } = req.params;
  const { comment } = req.body;

  const approval = await Approval.findByPk(id);
  if (!approval) return res.status(404).json({ message: "Not found" });

  approval.status = action === "approve" ? "Approved" : "Rejected";
  approval.comment = comment;
  await approval.save();

  res.json({ message: `Expense ${approval.status}`, approval });
});

export default router;
