import User from "../modals/User.model.js";
import bcrypt from "bcrypt";
import { getUserIdByToken } from "../config/jwtProvider.js";

const createUser = async (userData) => {
    try {
        let { firstName, lastName, email, password } = userData;

        const isUserExist = await User.find({ email });
        if (isUserExist.length > 0) {
            throw new Error("User already exists");
        }
        password = await bcrypt.hash(password, 8);

        const user = await User.create({ firstName, lastName, email, password });
        console.log("User created successfully", user);
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getUserById = async (userId) => {
    try {
        const user = await User.findById(userId)
        // .populate("address");
        if (!user) {
            throw new Error("User not found with id " + userId);
        }
        return user;
    } catch (error) {
        throw new Error("Error in finding user: " + error.message);
    }
};

const getUserByEmail = async (userEmail) => {
    try {
        const user = await User.findOne({ email: userEmail });
        if (!user) throw new Error("User not found with email " + userEmail);
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getUserProfileByToken = async (token) => {
    try {
        const userId = await getUserIdByToken(token);
        const user = await getUserById(userId);
        if (!user) throw new Error("User not found with token " + token);
        return user;
    } catch (error) {
        throw new Error("Error in getting user profile: " + error.message);
    }
};

const getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error("Error in finding users: " + error.message);
    }
};

export {
    createUser,
    getAllUsers,
    getUserProfileByToken,
    getUserByEmail,
    getUserById,
};
