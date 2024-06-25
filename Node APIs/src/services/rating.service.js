import Rating from "../modals/rating.model.js";
import { findProductById } from "./product.service.js";
const createRating =async (reqData, user)=>{
        const product= await findProductById(reqData.productId)
        const rating = new Rating({
            product: product._id,
            user: user._id,
            rating: reqData.rating,

        })
        return await rating.save()
}

const getProductRating = async (productId)=>{
    return await Rating.find({product: productId._id})
}

export { getProductRating, createRating }