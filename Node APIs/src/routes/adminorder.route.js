import authenticate from '../middlewares/authenticate.js';
import { cancelledOrders, confirmedOrders, deletedOrder, deliveredOrders, getAllOrder, shippOrders } from '../controllers/admin.controller.js';
import express from 'express'
const router = express.Router();

router.get('/', authenticate, getAllOrder);
router.put('/:orderId/confirmed', authenticate, confirmedOrders);
router.put('/:orderId/ship', authenticate, shippOrders);
router.put('/:orderId/delete', authenticate, deletedOrder);
router.put('/:orderId/deliver', authenticate, deliveredOrders);
router.put('/:orderId/cancel', authenticate, cancelledOrders);

export default router