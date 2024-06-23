import mongoose from "mongoose";

const cartSchema=new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"users"
    },
    cartItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"cartItems"
    }],
    totalPrice :{
        required: true,
        type: Number,
        default:0
    },
    totalItem:{
        required: true,
        type:Number,
        default:0
    },
    totalDiscountedPrice:{
        required: true,
        type:Number,
        default:0
    },
    discount:{
        required: true,
        type:Number,
        default:0
    }
});

const Cart=mongoose.model("cart", cartSchema);
export default Cart;