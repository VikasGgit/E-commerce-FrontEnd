import { getUserProfileByToken, getAllUsers } from "../services/user.service.js";



const getUserProfile=async (req, res)=>{
        try{
                const jwt= req.headers.authorization ?.split(" ")[1];
                if(!jwt){
                    return res.status(403).send({message: "token not valid"});
                }
                const user=await getUserProfileByToken(jwt);
                return res.status(200).send(user);
        }
        catch(err){
            res.status(500).send({message: err.message});
        }
}

const getAllUser = async (req, res)=>{
    try{
        const users=await getAllUsers();
        return res.status(200).send(users);
    }
    catch(err){
        res.status(500).send({message: err.message});
    }
}

export {getAllUser, getUserProfile}