import jwt from "jsonwebtoken";
import { env } from "../../config/env.js";

const generateAccessToken = (payload) =>{
    return jwt.sign(payload,env.jwtsecret,{
        expiresIn : env.jwtexpiresin,
    });
};

export const jwtUtils ={
    generateAccessToken,
};