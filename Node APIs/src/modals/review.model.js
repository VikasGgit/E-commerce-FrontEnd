import mongoose from "mongoose";

const reviewSchema= new mongoose.Schema({
    review:{
        type:String,
        required:true,
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"products"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"users"
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },

});

const Review= mongoose.model("reviews", reviewSchema);
export default Review;