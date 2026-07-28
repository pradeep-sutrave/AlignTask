import { ZodError } from 'zod';
import AppError from '../shared/errors/app-error.js';


const errorMiddleware = (err, req, res, _next) => {
    if (err instanceof ZodError) {
        return res.status(400).json({
            success: false,
            message: "Validation Failed",
            errors: err.issues.map((issue) => ({
                field: issue.path.join("."),
                message: issue.message,
            })),
        });
    }
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
        });
    }
    console.error("Unhandled Error:", err);

    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
    
};

export default errorMiddleware;