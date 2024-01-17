import express from "express";
import { CreateRoom, GetRoom } from "../controllers/Room.js";

const router = express.Router();

router.get('/', GetRoom);
router.post('/', CreateRoom);

export default router;