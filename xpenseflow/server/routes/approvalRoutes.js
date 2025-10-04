import express from "express";
import Approval from "../models/Approval.js";
import Expense from "../models/Expense.js";
import User from "../models/User.js";

const router = express.Router();

// Fetch all approvals with associated Expense and User (request owner)
router.get("/", async (req, res) => {
  try {
    const approvals = await Approval.findAll({
      include: [
        {
          model: Expense,
          include: [User] // This will include the employee who submitted the expense
        },
        {
          model: User, // This is the approver (optional, for reference)
          attributes: ["id", "name", "email"]
        }
      ]
    });
    res.json(approvals);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Approve/Reject
router.post("/:id/:action", async (req, res) => {
  const { id, action } = req.params;
  const { comment } = req.body;

  try {
    const approval = await Approval.findByPk(id);
    if (!approval) return res.status(404).json({ message: "Not found" });

    approval.status = action === "approve" ? "Approved" : "Rejected";
    approval.comment = comment || "";
    await approval.save();

    res.json({ message: `Expense ${approval.status}`, approval });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
