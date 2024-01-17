import express from "express";
import { GetUser } from "../controllers/User.js";

const router = express.Router();

router.get('/', GetUser);

export default router;
