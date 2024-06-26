import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"cart"
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products"
    },
    size:{
        type:String, 
    },
    quantity:{
        type:Number,
        required:true,
        default:0
    },
    price:{
        type:Number,
        
    },
   
    discountedPrice:{
        type:Number,
       default:0,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"users"
    }
});

const CartItem=mongoose.model("cartItems", CartItemSchema);

export default CartItem;