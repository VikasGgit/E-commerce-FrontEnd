import mongoose from "mongoose";


const productSchema= new mongoose.Schema({
    title:{
        type: String,
    },
    description:{
        type: String,
    },
    price:{
        type: Number,
        required: true
    },
    discountedPrice:{
        type: Number,
    },
    discount:{
        type: Number,
        default:0
    },
    quantity:{
        type: Number,
        required: true
    },
    brand:{
        type: String,
    },
    color:{
        type: String,
    },
    sizes:[{
        name:{type:String},
        quantity:{type:Number},
}],
    imageUrl:{type:String},
    rating:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ratings"
    }],
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"reviews"
    }], 
    numRatings:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories"
    },
    createdAt:{
        type:Date,
        default: Date.now()
    }
    
});

const Product=mongoose.model("products", productSchema);
export default Product