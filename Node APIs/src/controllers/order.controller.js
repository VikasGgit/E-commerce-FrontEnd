import { createOrder , findOrderById, userOrderHistory} from "../services/order.service.js";

const createOrders=async (req,res)=>{
    let user=req.user;
    try{
        const createdOrder= await createOrder(user, req.body);
        return res.status(200).send(createdOrder);
    }
    catch(err){
        return res.status(500).send({message: err.message});
    }
}


const findOrdersById=async (req,res)=>{
    let user=req.user;
    try{
        const order= await findOrderById( req.params.id);
        return res.status(200).send(order);
    }
    catch(err){
        return res.status(500).send({message: err.message});
    }
}

const orderHistory= async(req,res)=>{
    const user=req.user;
    try{
        const orders=await userOrderHistory(user._id);
        return res.status(200).send(orders);
    }
    catch(err){
        return res.status(500).send({message: err.message});
    }
}

export {
    createOrders,
    findOrdersById,
    orderHistory
}