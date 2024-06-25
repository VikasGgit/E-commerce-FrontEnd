import { createReview , getAllReviews} from "../services/review.service.js"

const createReviews= async(req,res)=>{
    try{
        const review = await createReview(req.body, req.user)
        return res.status(200).send(review)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
}

const getReviews = async(req,res)=>{
    try{
        const reviews = await getAllReviews(req.params.productId);
        return res.status(200).send(reviews)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
}

export {
    createReviews,
    getReviews
}