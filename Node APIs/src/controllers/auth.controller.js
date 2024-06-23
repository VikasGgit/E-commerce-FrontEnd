import { generateToken } from "../config/jwtProvider.js";
import { createCart } from "../services/cart.service.js";
import {createUser, getUserByEmail} from "../services/user.service.js"
import bcrypt from "bcrypt"

const register= async (req, res)=>{
    try{
        const user = await createUser(req.body);
        const jwt= generateToken(user._id);
        await createCart(user)
        return res.status(200).send({jwt, message: "user registered successfully"})
    }
    catch(err){
        res.status(500).send({error: err.message});

    }
}

const login = async (req, res)=>{
    const {email, password} = req.body
    try{
        const user = await getUserByEmail(email);
        if(!user){
            return res.status(404).send({error: "User not registered"});
        }
        console.log({user: user})
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(404).send({error: "invalid password"});
        }

        const jwt=generateToken(user._id);
        return res.status(200).send({jwt, message:"login successful"});

    }
    catch(err){
        res.status(500).send({error: err.message});
    }
}

export {register, login}