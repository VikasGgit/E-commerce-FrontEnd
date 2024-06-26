import express from 'express';
const router= express.Router();
import authenticate from '../middlewares/authenticate.js';
import { updateCartItems, removeCartItems } from '../controllers/cartItem.controller.js';

router.put("/:id", authenticate, updateCartItems);
router.delete("/:id", authenticate, removeCartItems);

export default router