import mongoose from "mongoose";

const OrderItemsSchema= new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"products"
    },
    size:{
        type:String,
    },
    quantity:{
        type: Number,
        required:true,
    },
    price:{
        required:true,
        type:Number,
    },
    discountedPrice:{
        required:true,
        type:Number,
        
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"users"
    },
    deliveryDate:{
        type:Date,
    }
});

const orderItems = mongoose.model("orderItems", OrderItemsSchema);
export default orderItems