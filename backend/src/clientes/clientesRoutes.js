
import { Router } from "express";
import { atualizarClientes, cadastrarClientes, listarClientes, loginCliente } from "./clientesController.js";


const router = Router();

router.post("/", cadastrarClientes);
router.get("/", listarClientes);
router.put("/id", atualizarClientes);
router.post("/login", loginCliente);

export default router;