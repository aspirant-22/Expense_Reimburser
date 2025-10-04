import express from "express";
import cors from "cors";
import sequelize from "./config/db.js";
import expenseRoutes from "./routes/expenseRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/expenses", expenseRoutes);

await sequelize.sync();
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
