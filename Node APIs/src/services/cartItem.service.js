import CartItem from "../modals/cartItem. model.js";
import { getUserById } from "./user.service.js";

const updateCartItem= async (userId, cartItemId, cartItemData )=>{
    try{
        const item=await findCartItemById(cartItemId);
        if(!item){
            throw new Error("cart item not found", cartItemId)
        }
        const user= await getUserById(item.userId);
        if(!user) {throw new Error("user not found :",userId)}
        if(user._id.toString()===userId.toString()) {
            item.quantity=cartItemData.quantity;
            item.price=item.quantity*(item.product.price  );
            item.discountedPrice=item.quantity*(item.product.discountedPrice);

            const updatedCartItem= await item.save();
            return updatedCartItem
        }
        else {
            throw new Error("you can't update cart item");
        }


    }
    catch(err){
        throw new Error(`Error in updating: ${err.message}`);

    }
}

const removeCartItem=async(userId, cartItemId)=>{
    try{
       const cartItem= await findCartItemById(cartItemId);
       const user=await getUserById(userId);
       if(cartItem.userId.toString() === user._id.toString()){
        await CartItem.findByIdAndDelete(cartItemId);
        return "cartItem deleted"
       }
}catch(err){
    throw new Error("you cannot remove othes items" +err.message);
}

}   

// const removeCartItem = async (userId, cartItemId) => {
//     try {
//         const cartItem = await findCartItemById(cartItemId); // Find cart item by ID
//         const user = await getUserById(userId); // Fetch user by ID

//         if (cartItem.userId.toString() !== user._id.toString()) {
//             throw new Error("You cannot remove others' items");
//         }

//         await CartItem.findByIdAndDelete(cartItemId); // Delete cart item
//         return "Cart item deleted";
//     } catch (err) {
//         throw new Error(`Error in removing cart item: ${err.message}`);
//     }
// };


// const findCartItemById =async (cartItemId)=>{
//     try{
//         const cartItem = await CartItem.findById(cartItemId);
//         return cartItem
//     }
//     catch(error){
//         throw new Error("Error in finding cart "+ error.message)
//     }
// }

const findCartItemById = async (cartItemId) => {
    try {
        const cartItem = await CartItem.findById(cartItemId).populate("product");
        if (!cartItem) {
            throw new Error(`Cart item not found for ID: ${cartItemId}`);
        }
        return cartItem;
    } catch (error) {
        throw new Error(`Error in finding cart item: ${error.message}`);
    }
};



export {
    updateCartItem,
    findCartItemById,
    removeCartItem
}