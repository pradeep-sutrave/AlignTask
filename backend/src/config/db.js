import mongoose from 'mongoose';
import { env } from "./env.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(env.mongouri, { dbName: "aligntask" });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error in database connection:", error.message);
        process.exit(1);
    }
};