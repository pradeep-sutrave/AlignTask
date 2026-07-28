import express from 'express';
import cors from 'cors';
import userRoutes from './modules/users/index.js';
import errorMiddleware from './middleware/error.middleware.js';
import todoRoutes from './modules/todos/index.js';

const app=express();
app.use(express.json());
app.use(cors());

app.use("/v1/user",userRoutes);
app.use("/v1/todo",todoRoutes);

app.get('/',(req,res)=>{
    res.json({
        message:"alignTask backend is live",
    });
});

app.use(errorMiddleware);
export default app;