import dotenv from 'dotenv';

dotenv.config();

export const env={
    port : process.env.PORT,
    mongouri : process.env.MONGO_URI,
    jwtsecret : process.env.JWT_SECRET,
    jwtexpiresin:process.env.JWT_EXPIRES_IN,
}
