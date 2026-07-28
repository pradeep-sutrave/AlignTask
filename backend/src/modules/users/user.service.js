import bcrypt from 'bcrypt';
import {env} from "../../config/env.js";
import AppError from "../../shared/errors/app-error.js";
import User from "./user.model.js";
import { jwtUtils } from "../../shared/utils/jwt.js";


const register = async (userData) => {
    const { name, email, password } = userData;

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
        throw new AppError("Email already exists", 409);
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
        ...userData,
        password: hashedPassword,
    });

    const userObj = user.toObject();
    delete userObj.password;
    return userObj;
};


const login = async (userData) => {
    const { email, password } = userData;

    const user = await User.findOne({ email }).select("+password");
    if(!user) { throw new AppError("Invalid email or password ",401);}
    const isValidPassword = bcrypt.compare(password,user.password);
    if(!isValidPassword) { throw new AppError("Invalid email or password",401);}

    const accessToken = jwtUtils.generateAccessToken({
        UserId : user._id,
        role : user.role,
    });
    const userObj = user.toObject();
    delete userObj.password;
    return {
        user:userObj,
        accessToken,
    };
};

const getCurrentUser = async(userId)=>{
    const user = await User.findById(userId).select("-password");
    if(!user){ throw new AppError("User not found",404);}
    return user;
}

const userService = {
    register,
    login,
    getCurrentUser,
};

export default userService;