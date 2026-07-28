import Todo from "./todo.model.js";
import AppError from "../../shared/errors/app-error.js";
import todoValidator from "./todo.validator.js";

const createTodo = async (todoData, userId) => {
    const todo = await Todo.create({
        ...todoData, user : userId,
    });

    if(!todo) { throw new AppError("Failed to create todo",500);}

    return todo;
};

const getAllTodos = async (userId) => {

    const todos = await Todo.find({user : userId}).sort({createdAt: -1});
    return todos;
}

const getTodoById = async (todoId, userId) => {
    const todo = await Todo.findOne({
        _id : todoId,
        user : userId,
    });

    if(!todo) { throw new AppError("Todo Not Found",404);}

    return todo;
}

const deleteTodo = async (todoId, userId) => {
    const todo = await Todo.findOneAndDelete({
        _id : todoId,
        user : userId,
    });

    if(!todo) { throw new AppError("Todo not found",404);}

    return todo;

};

const updateTodo = async (todoId,userId,updateData) => {
    const todo = await Todo.findOneAndUpdate({
            _id:todoId,
            user : userId,
        },
        updateData,
        {
            new : true,
            runValidators : true,
        }
    );
    if(!todo) { throw new AppError("Todo not found",404);}
    return todo;
};

const todoService = {
    createTodo,
    getAllTodos,
    getTodoById,
    deleteTodo,
    updateTodo,
};

export default todoService;