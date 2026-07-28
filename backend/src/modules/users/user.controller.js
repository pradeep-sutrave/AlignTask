import asyncHandler from '../../shared/utils/async-handler.js';
import userService from "./user.service.js";

const register = asyncHandler(async (req, res) => {
    const user = await userService.register(req.validatedData);

    return res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: user,
    });
});

const login = asyncHandler(async(req,res)=>{
    const result = await userService.login(req.validatedData);

    return res.status(200).json({
        success : true,
        message : "Login Succesfull",
        data : result,
    });
});

const getCurrentUser = asyncHandler(async(req,res)=>{
    return res.status(200).json({
        success: true,
        message : "User fetched succesfully",
        data : req.user,
    });
});

const userController = {
    register,
    login,
    getCurrentUser,
};

export default userController;