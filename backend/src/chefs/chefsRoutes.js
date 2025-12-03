
import { Router } from "express";
import { cadastrarChef, listarChefs, loginChef } from "./chefsController.js";

const router = Router();

router.post("/", cadastrarChef);
router.get("/", listarChefs);
router.post("/login", loginChef)

export default router;