
import { findUserCart, addCartItem } from "../services/cart.service.js";

const findUserCarts=async(req, res)=>{
    const user= req.user;
    try{
        const cart= await findUserCart(user._id);
        if(cart.length===0) return res.status(200).send("Cart not is empty")
        return res.status(200).send(cart)
    }catch(err){
        return res.status(500).send({err: err.message});
    }
}
// const findUserCarts = async (req, res) => {
//     const user = req.user;
//     try {
//         const cart = await findUserCart(user._id);
//         if (!cart || cart.cartItems.length === 0) {
//             return res.status(200).send("Cart is empty");
//         }
//         return res.status(200).send(cart);
//     } catch (err) {
//         return res.status(500).send({ error: err.message });
//     }
// };


const addCartItems=async(req, res)=>{
    let user= req.user;

    try{
        const cart= addCartItem(user._id, req.body );
            return res.status(200).send("Item added successfully")
    }catch(err){
        return res.status(500).send({err: err.message});
    }
}

export {
    addCartItems,
    findUserCarts
}