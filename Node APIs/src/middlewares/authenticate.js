import { getUserIdByToken } from "../config/jwtProvider.js";
import { getUserById } from "../services/user.service.js";

const authenticate= async(req, res, next) => {
    try{
        const token= req.headers.authorization?.split(" ")[1];
        if(!token){
            return res.status(404).send({error: "token not found"});
        }
        const userId=await getUserIdByToken(token);
        const user= await getUserById(userId);
        req.user = user;
    }
    catch(err){
        res.status(500).send(err.message);
    }
    next();
}

export default authenticate;