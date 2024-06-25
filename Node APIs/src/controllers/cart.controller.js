
import { findUserCart, addCartItem } from "../services/cart.service.js";

const findUserCarts=async(req, res)=>{
    const user= req.user;
    try{
        const cart= findUserCart(user._id);
        return res.status(200).send(cart)
    }catch(err){
        return res.status(500).send({err: err.message});
    }
}

const addCartItems=async(req, res)=>{
    let user= req.user;

    try{
        const cart= addCartItem(user._id, req.body );
            return res.status(200).send(cart)
    }catch(err){
        return res.status(500).send({err: err.message});
    }
}

export {
    addCartItems,
    findUserCarts
}