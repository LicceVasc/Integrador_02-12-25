import { DataTypes } from "sequelize";
import { conn } from "../config/sequelize.js";

const chefsModel = conn.define(
  "chefs", 
  {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nome_truck: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: "chefs",
  updatedAt: "updated_at",
  createdAt: "created_at",
});

export default chefsModel;