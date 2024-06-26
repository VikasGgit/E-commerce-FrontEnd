import Cart from "../modals/cart.model.js"
import CartItem from "../modals/cartItem. model.js";
import Product from "../modals/product.model.js";

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

// const findUserCart = async(user)=>{
//     try{
//     const cart=await Cart.find({user});
//     let cartItems=CartItem.find({cart:cart._id}).populate('products');
//     cart.cartItems = cartItems;
//     let totalPrice=0;
//     let totalDiscountedPrice=0;
//     let totalItems=0;

    

//     for(let cartItem of cart.cartItems){
//         totalPrice += cartItem.price;
//         totalDiscountedPrice += cartItem.discountedPrice;
//         totalItems += cartItem.quantity;
// }
//     let discount = totalPrice-totalDiscountedPrice;
//     cart.totalPrice=totalPrice;
//     cart.discount=discount;
//     cart.totalItem=totalItems;

//     return cart;
//     }
//     catch (error) {
//         throw new Error(`Error in creating finding: ${error.message}`);
//     }
// }

const findUserCart = async (user) => {
    try {
        const cart = await Cart.findOne({ user });
        if (!cart) {
            throw new Error('Cart not found');
        }

        const cartItems = await CartItem.find({ cart: cart._id }).populate('product');
        cart.cartItems = cartItems;
        
        let totalPrice = 0;
        let totalDiscountedPrice = 0;
        let totalItems = 0;

        for (let cartItem of cartItems) {
            totalPrice += cartItem.price * cartItem.quantity;
            totalDiscountedPrice += cartItem.discountedPrice * cartItem.quantity;
            totalItems += cartItem.quantity;
        }

        let discount = totalPrice - totalDiscountedPrice;
        cart.totalPrice = totalPrice;
        cart.discount = discount;
        cart.totalItem = totalItems;

        return cart
    } catch (error) {
        throw new Error(`Error in finding cart: ${error.message}`);
    }
};


const addCartItem= async (userId, req)=>{
        try{
            const cart=await Cart.findOne({user:userId});
            const product=await Product.findById(req.productId);

            const isPresent=await CartItem.findOne({userId:userId, product:product._id, cart:cart._id});

            if(!isPresent){
                const cartItem= new CartItem({
                    cart:cart._id,
                    product:product._id,
                    size:req.size,
                    quantity:1,
                    price:product.price,
                    discount:product.discountedPrice,
                    userId:userId
                })

                const createdCartItem=await cartItem.save();
                cart.cartItems.push(createdCartItem);
                await cart.save();
                return "item added successfully"
            }
        }
        catch(error){
        throw new Error(`Error in adding: ${error.message}`);
        }
} 


export {createCart, findUserCart, addCartItem}