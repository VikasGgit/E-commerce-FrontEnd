
import express from 'express';
import authenticate from '../middlewares/authenticate.js';
import { createPaymentLin, updatePaymentInf } from '../controllers/payment.controller.js';

const router= express.Router();

router.post("/:id", authenticate , createPaymentLin);
router.get("/", authenticate, updatePaymentInf);

export default router;