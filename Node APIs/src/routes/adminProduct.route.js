import express from 'express';
const router = express.Router();

import { createMultipleProduct , createProducts, deletedProducts, updateProducts } from '../controllers/product.controller.js';
import authenticate from '../middlewares/authenticate.js';

router.post("/", authenticate, createProducts);
router.post("/creates", authenticate, createMultipleProduct);
router.put("/:id", authenticate, updateProducts);
router.delete("/:id", authenticate, deletedProducts);

export default router;