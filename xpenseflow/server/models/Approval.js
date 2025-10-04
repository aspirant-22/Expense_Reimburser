import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Expense from "./Expense.js";
import User from "./User.js";

const Approval = sequelize.define("Approval", {
  status: { type: DataTypes.STRING, defaultValue: "Pending" }, // Pending | Approved | Rejected
  comment: DataTypes.STRING,
  approverId: DataTypes.INTEGER,
  sequenceStep: DataTypes.INTEGER,
});

Approval.belongsTo(Expense, { foreignKey: "expenseId" });
Approval.belongsTo(User, { foreignKey: "approverId" });

export default Approval;
