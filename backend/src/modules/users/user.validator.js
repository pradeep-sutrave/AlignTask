import { z } from 'zod';

const register = z.object({
    name : z.string().trim(),
    email : z.string().trim().toLowerCase().email("Invalid Email Address"),
    password : z.string().trim(),
});

const login = z.object({
    email : z.string().trim().toLowerCase().email("Invalid Email Address"),
    password : z.string().trim(),
});


const userValidations = {
    register,
    login,
};

export default userValidations;