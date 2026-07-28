import api from "./api";

const getTodos = async () => {
    const response = await api.get("/todo");
    return response.data;
};

const createTodo = async (todoData) => {
    const response = await api.post("/todo",todoData);
    return response.data;
};

const updateTodo = async (id, todoData) => {
    const response = await api.put(`/todo/${id}`,todoData);
    return response.data;
};

const deleteTodo = async (id) => {
    const response = await api.delete(`/todo/${id}`);
    return response.data;
};

const todoService = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
};

export default todoService;