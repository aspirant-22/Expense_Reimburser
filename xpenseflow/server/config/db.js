import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "xpenseflow.sqlite"
});

export default sequelize;
