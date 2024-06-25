import express from "express";
const router= express.Router();
import { findUserCarts , addCartItems} from "../controllers/cart.controller.js";
import authenticate from "../middlewares/authenticate.js";

router.get("/", authenticate, findUserCarts);
router.put("/add", authenticate, addCartItems);

export default router