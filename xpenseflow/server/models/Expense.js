import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./User.js";

const Expense = sequelize.define("Expense", {
  amount: DataTypes.FLOAT,
  currency: DataTypes.STRING,
  convertedAmount: DataTypes.FLOAT,
  category: DataTypes.STRING,
  description: DataTypes.STRING,
  date: DataTypes.DATE,
  status: { type: DataTypes.STRING, defaultValue: "Pending" },
  receiptURL: DataTypes.STRING
});

Expense.belongsTo(User, { foreignKey: "userId" });

export default Expense;
