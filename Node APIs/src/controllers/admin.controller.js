import {
  getAllOrders,
  confirmOrder,
  shippedOrder,
  deliverOrder,
  cancelOrder, 
  deleteOrder
} from "../services/order.service.js";

const getAllOrder = async (req, res) => {
  try {
    const orders = await getAllOrders();
    return res.statu(200).send(orders);
  } catch (e) {
    return res.status(500).send({ error: e.message });
  }
};

const confirmedOrders = async (req, res) => {
  let orderId = req.params.orderId;
  try {
    const orders = await confirmOrder(orderId);
    return res.status(200).send(orders);
  } catch (e) {
    return res.status(500).send({ error: e.message });
  }
};

const shippOrders = async (req, res) => {
  let orderId = req.params.orderId;
  try {
    const orders = await shippedOrder(orderId);
    return res.status(200).send(orders);
  } catch (e) {
    return res.status(500).send({ error: e.message });
  }
};

const deliveredOrders = async (req, res) => {
  let orderId = req.params.orderId;
  try {
    const orders = await deliverOrder(orderId);
    return res.status(200).send(orders);
  } catch (e) {
    return res.status(500).send({ error: e.message });
  }
};

const cancelledOrders = async (req, res) => {
  let orderId = req.params.orderId;
  try {
    const orders = await cancelOrder(orderId);
    return res.status(200).send(orders);
  } catch (e) {
    return res.status(500).send({ error: e.message });
  }
};

const deletedOrder = async (req, res) => {
    let orderId = req.params.orderId;
    try{
        const orders = await deleteOrder(orderId);
        return res.status(200).send(orders);
    }
    catch (e) {
        return res.status(500).send({ error: e.message });
    }
}


export {
    getAllOrder,
    shippOrders,
    deletedOrder,
    cancelledOrders,
    deliveredOrders,
    confirmedOrders,
}