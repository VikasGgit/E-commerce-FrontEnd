import express from 'express';
const router = express.Router();
import authenticate from '../middlewares/authenticate.js';

import { createReviews, getReviews } from '../controllers/review.controller.js';

router.post("/create", authenticate, createReviews)
router.get("/product/:productId", authenticate, getReviews)

export default router