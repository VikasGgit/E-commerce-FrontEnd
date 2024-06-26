import express from 'express';
const router = express.Router();


import { getAllProduct, findProductsById} from '../controllers/product.controller.js';
import authenticate from '../middlewares/authenticate.js';

router.get('/',  getAllProduct);
router.get('/id/:id', findProductsById);

export default router;