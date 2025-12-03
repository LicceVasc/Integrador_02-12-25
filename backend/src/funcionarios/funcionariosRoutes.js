
import { Router } from "express";
import { cadastrarFuncionarios, listarFuncionarios, loginFuncionarios } from "./funcionariosController.js";

const router = Router();

router.post("/", cadastrarFuncionarios);
router.get("/", listarFuncionarios);
router.post("/login", loginFuncionarios);


export default router;