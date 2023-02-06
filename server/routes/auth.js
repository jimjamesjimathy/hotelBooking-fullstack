import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

// REGISTER ACCOUT
router.post("/register", register);

// LOG IN TO ACCOUNT
router.post("/login", login);

export default router;
