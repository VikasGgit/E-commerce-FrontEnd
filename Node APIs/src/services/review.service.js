import { findProductById } from "./product.service.js";
import Review from "../modals/review.model.js";

const createReview =async(reqData, user)=>{
    const product=await findProductById(reqData.productId);
    const review = new Review({
        user: user._id,
        product: product._id,
        review:reqData.review,

    })
    await product.save();

    return await review.save();
}

const getAllReviews = async(productId)=>{
    const product = await findProductById(productId);
    return await Review.find({product: product._id}).populate("user")
}

export {
    createReview, getAllReviews,
}