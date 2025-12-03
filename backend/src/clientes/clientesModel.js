import { DataTypes } from "sequelize";
import { conn } from "../config/sequelize.js"

 const clientesModel = conn.define(
    "clientes",
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "clientes",
        updatedAt: "updated_at",
        createdAt: "created_at"
    }
 );

 export default clientesModel;