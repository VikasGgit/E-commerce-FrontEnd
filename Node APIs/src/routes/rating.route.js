import express from 'express';
const router = express.Router();
import authenticate from '../middlewares/authenticate.js';

import { createRatings, getAllRatings } from '../controllers/rating.controller.js';

router.post("/create", authenticate, createRatings);
router.get("/product/:productId", authenticate, getAllRatings)
export default router