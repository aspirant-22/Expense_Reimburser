import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./User.js";

const Expense = sequelize.define("Expense", {
  employee: { type: DataTypes.STRING, allowNull: false }, // Name of employee
  description: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.DATEONLY, allowNull: false },
  category: { type: DataTypes.STRING, allowNull: false },
  paidBy: { type: DataTypes.STRING, allowNull: true },
  remarks: { type: DataTypes.STRING, allowNull: true },
  amount: { type: DataTypes.FLOAT, allowNull: false },
  currency: { type: DataTypes.STRING, allowNull: false },
  convertedAmount: { type: DataTypes.FLOAT, allowNull: true },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Pending"
    },
  userId: { type: DataTypes.INTEGER }
});

Expense.belongsTo(User, { foreignKey: "employee" });

export default Expense;
