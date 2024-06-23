import Cart from "../modals/cart.model.js"

const createCart= async(user)=>{
    try{ 
    // const cart=new Cart({user});
    // const createCart=await cart.save();
    // return createCart
    const cart=await Cart.create({user});
    return cart;


}
    catch(err){ 
        throw new Error(err);
    }
   
}

export {createCart}