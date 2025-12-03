import { DataTypes } from "sequelize";
import { conn } from "../config/sequelize.js";
import chefsModel from "../chefs/chefsModel.js"; 

const funcionariosModel = conn.define("funcionarios", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nome_truck_trabalho:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  },
 {
  tableName: "funcionarios",
  updatedAt: "updated_at",
  createdAt: "created_at",
});

export default funcionariosModel;