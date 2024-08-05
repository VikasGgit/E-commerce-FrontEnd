
import { findUserCart, addCartItem, clearCart } from "../services/cart.service.js";

const findUserCarts=async(req, res)=>{
    const user= req.user;
    try{
        const cart= await findUserCart(user._id);
        if(cart.length===0) {
        return res.status(200).send("Cart not is empty")}
        else{
        return res.status(200).send(cart)}
    }catch(err){
        return res.status(500).send({err: err.message});
    }
}

const clearCarts=async(req, res)=>{
    const user= req.user;
    try{
        const cart= await clearCart(user._id);
        if(cart.length===0) {
        return res.status(200).send("Cart not is empty")}
        else{
        return res.status(200).send(cart)}
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
    const {productId}= req.body;
    console.log("the product id is", productId);
    try{
        const cart= addCartItem(user._id, productId );
            return res.status(200).send(cart)
    }catch(err){
        return res.status(500).send({err: err.message});
    }
}

export {
    addCartItems,
    findUserCarts,
    clearCarts
}