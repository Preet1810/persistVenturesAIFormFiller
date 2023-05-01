import express from "express";
import { registerCompany } from "../controllers/company.js";
import { verifyToken } from "../middleware/auth.js";
const router=express.Router();

router.post('/', verifyToken, registerCompany)
export default router;