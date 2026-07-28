import jwt, { decode } from 'jsonwebtoken';
import { env } from '../config/env.js';
import User from "../modules/users/user.model.js";
import AppError from "../shared/errors/app-error.js";
import asyncHandler from "../shared/utils/async-handler.js";

const authenticate = asyncHandler(async(req,res,next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")){
        throw new AppError("Access token required",401);
    }
    const token = authHeader.split(" ")[1];

    let decoded;
    try{
        decoded=jwt.verify(token,env.jwtsecret);
    }catch(error){
        throw new AppError("Invalid or expired token",401);
    }
    const user = await User.findById(decoded.UserId).select("-password");

    if(!user){
        throw new AppError("User not found",404);
    }
    req.user=user;
    next();
});


export default authenticate;