import Address from "../modals/address.model.js";
import { findUserCart } from "./cart.service.js";
import orderItems from "../modals/orderItems.model.js";
import Order from "../modals/order.model.js";
const createOrder = async (user, shipAddress) => {
  let address;
  if (shipAddress._id) {
    address = await Address.findById(shipAddress._id);
  } else {
    address = new Address(shipAddress);
    address.user = user;
    await address.save();
    user.address.push(address);
    await user.save();
  }
  const cart = await findUserCart(user);
  let orderItem = [];
  for (const items of cart.cartItems) {
    const orderitem = new orderItems({
      price: items.price,
      size: items.size,
      quantity: items.quantity,
      discountedPrice: items.discountedPrice,
      product: items.product,
      userId: items.userId,
    });
    const createOrderItem = await orderitem.save();
    orderItem.push(createOrderItem);
  }

  const createOrder = new Order({
    user: user,
    orderItems: orderItem,
    shippingAddress: address,
    totalPrice: cart.totalPrice,
    totalDiscountedPrice: cart.totalDiscountedPrice,
    totalItems: cart.totalItem,
    discount: cart.discount,
  });
  const saveOrder = await createOrder.save();
  return saveOrder;
};

const placeOrder = async (orderId) => {
  const order = await findOrderById(orderId);
  (order.orderStatus = "PLACED"), (order.paymentStatus = "COMPLETED");
  return await order.save();
};

const confirmOrder = async (orderId) => {
  const order = await findOrderById(orderId);
  order.orderStatus = "CONFIRMED";
  return await order.save();
};

const shippedOrder = async (orderId) => {
  const order = await findOrderById(orderId);
  order.orderStatus = "SHIPPED";
  return await order.save();
};

const deliverOrder = async (orderId) => {
  const order = await findOrderById(orderId);
  order.orderStatus = "DELIVERED";
  return await order.save();
};

const cancelOrder = async (orderId) => {
  const order = await findOrderById(orderId);
  order.orderStatus = "CANCELLED";
  return await order.save();
};

const findOrderById = async (orderId) => {
  const order = await Order.findById(orderId)
    .populate("user")
    .populate({ path: "orderItems" })
    .populate("shippingAddress");

  return order;
};

const userOrderHistory = async (userId) => {
  try {
    const orders = await Order.find({ user: userId, orderStatus: "PLACED" })
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();
    return orders;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getAllOrders = async () => {
  return await Order.find()
    .populate({ path: "orderItems", populate: { path: "product" } })
    .lean();
};

const deleteOrder = async (orderId) => {
  const order = await findOrderById(orderId);
  await Order.findByIdAndDelete(order._id);
};

export {
  createOrder,
  placeOrder,
  deleteOrder,
  confirmOrder,
  cancelOrder,
  shippedOrder,
  deliverOrder,
  findOrderById,
  getAllOrders,
  userOrderHistory,
};
