import express from "express";
const router= express.Router();
import { findUserCarts , addCartItems, clearCarts} from "../controllers/cart.controller.js";
import authenticate from "../middlewares/authenticate.js";

router.get("/", authenticate, findUserCarts);
router.put("/add", authenticate, addCartItems);
router.put("/clear", authenticate, clearCarts);

export default router