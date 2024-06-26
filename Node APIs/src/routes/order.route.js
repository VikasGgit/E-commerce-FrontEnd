import express from 'express';
const router = express.Router();

import authenticate from '../middlewares/authenticate.js';
import { createOrders,findOrdersById, orderHistory } from '../controllers/order.controller.js';

router.post("/",authenticate, createOrders);
router.get("/history", authenticate, orderHistory);
router.get("/:id", authenticate, findOrdersById);

export default router