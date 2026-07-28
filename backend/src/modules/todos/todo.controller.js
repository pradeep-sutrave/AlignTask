import todoService from "./todo.service.js";
import asyncHandler from "../../shared/utils/async-handler.js";

const createTodo = asyncHandler(async(req,res)=>{
    const todo = await todoService.createTodo(
        req.validatedData,
        req.user._id,
    );

    res.status(201).json({
        success : true,
        message : "todo created successfully",
        data : todo,
    });
});

const getAllTodos = asyncHandler(async(req,res)=>{
    const todos = await todoService.getAllTodos(req.user._id);
    res.status(200).json({
        success : true,
        message : "Todos fetched successfully",
        count : todos.length,
        data : todos,
    });
});

const getTodoById = asyncHandler(async(req, res) => {
    const todo = await todoService.getTodoById(req.params.id,req.user._id);

    res.status(200).json({
        success : true,
        message : "Todo fetched succesfully",
        data : todo,
    });
});

const deleteTodo = asyncHandler(async(req,res)=>{
    const todo = await todoService.deleteTodo(req.params.id,req.user._id);

    res.status(200).json({
        success : true,
        message : "Todo deleted Succesfully",
    });
});

const updateTodo = asyncHandler(async(req,res)=>{
    const todo = await todoService.updateTodo(req.params.id,req.user._id,req.validatedData);

    return res.status(200).json({
        success : true,
        message : "Todo Updated Successfully",
        data : todo,
    });
});

const todoController = {
    createTodo,
    getAllTodos,
    getTodoById,
    deleteTodo,
    updateTodo,
};

export default todoController;