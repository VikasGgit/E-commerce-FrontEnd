import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"cart"
    },
    product:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:"products"
    },
    size:{
        required:true,
        type:String, 
    },
    quantity:{
        type:Number,
        required:true,
        default:0
    },
    price:{
        type:Number,
        required:true,
    },
    discountedPrice:{
        type:Number,
        required:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"users"
    }
});

const cartItem=mongoose.model("cartItems", CartItemSchema);

export default cartItem;