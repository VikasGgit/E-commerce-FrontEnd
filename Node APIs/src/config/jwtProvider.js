import jwt from "jsonwebtoken"
    const SECRET_KEY ="asdfghjklzxcvbnm"
const generateToken =  (userId)=>{
    const token =  jwt.sign({userId: userId}, SECRET_KEY, {expiresIn: "48h"});
    return token
}

const getUserIdByToken = (token) => {
    try {
        const decodedToken = jwt.verify(token, SECRET_KEY);
        return decodedToken.userId;
    } catch (error) {
        throw new Error("Invalid token");
    }
};

export {getUserIdByToken, generateToken} 