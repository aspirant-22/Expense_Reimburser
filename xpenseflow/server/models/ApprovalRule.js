import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./User.js";

const ApprovalRule = sequelize.define("ApprovalRule", {
  name: DataTypes.STRING,            // Rule name
  description: DataTypes.STRING,     // Description of the rule
  managerId: DataTypes.INTEGER,      // Assigned manager
  isManagerApprover: { type: DataTypes.BOOLEAN, defaultValue: false },
  sequence: { type: DataTypes.BOOLEAN, defaultValue: false }, // Sequence matters?
  minApprovalPercentage: { type: DataTypes.FLOAT, defaultValue: 100 } // % approval needed
});

ApprovalRule.belongsTo(User, { foreignKey: "managerId" });

export default ApprovalRule;
