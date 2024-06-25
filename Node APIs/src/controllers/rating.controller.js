import { createRating, getProductRating } from "../services/rating.service.js";

const createRatings = async (req, res) => {
    try{
        const rating = await createRating(req.body, req.user);
        return res.status(200).send(rating);
    }
    catch(err){
        return res.status(500).send({message: err.message});
    }
}

const getAllRatings= async (req, res) => {
    try{
        const rating = await getProductRating(req.params.productId)
        return res.status(200).send(rating);
    }
    catch(err){
        return res.status(500).send({message: err.message});
    }
}

export {
    createRatings,
    getAllRatings,
}