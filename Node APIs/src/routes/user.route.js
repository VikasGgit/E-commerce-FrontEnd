import express from "express";
import {getUserProfile, getAllUser} from "../controllers/user.controller.js"
const router=express.Router();

router.get('/', getAllUser);
router.get('/profile', getUserProfile);

export default router;
