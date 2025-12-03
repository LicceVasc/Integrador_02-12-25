import express from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler.js';

import { conn } from './config/sequelize.js'

import clientesRoutes from './clientes/clientesRoutes.js';
import chefsRoutes from "./chefs/chefsRoutes.js";
import funcionariosRoutes from "./funcionarios/funcionariosRoutes.js"

import "./chefs/chefsModel.js";
import "./funcionarios/funcionariosModel.js";
import "./dependecias/dependencias.js"; 

const app = express();
conn.sync();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json())

app.use("/api/clientes", clientesRoutes);
app.use("/api/chefs", chefsRoutes);
app.use("/api/funcionarios", funcionariosRoutes);



// Erro handler
app.use(errorHandler)

// 404
app.use((req, res) => {
    res.status(404).json({mensagem: "Rota não existe!"})
})


export default app;