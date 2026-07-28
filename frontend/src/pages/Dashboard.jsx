import MainLayout from "../components/layout/MainLayout.jsx";
// import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import todoService from "../services/todo.service";
import TodoList from "../components/todo/TodoList";
import TodoForm from "../components/todo/TodoForm";

function Dashboard (){
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(()=>{
        const fetchTodos = async()=>{
            try{
                const response = await todoService.getTodos();
                console.log("Response:", response);
                setTodos(response.data);
            }catch(error){
                setError(
                    error.response?.data?.message || "Failed to fetch Todos"
                );
            }finally{
                setLoading(false);
            }
        };
        fetchTodos();
    },[]);

    if(loading){ return <h2>Loading...</h2>}
    if(error) { return <h2>{error}</h2>}
    const handleCreateTodo=async (todoData)=>{
        try{
            const response = await todoService.createTodo(todoData);

            setTodos((prev)=>[
                response.data,
                ...prev,
            ]);
        }catch(error){
            alert(error.response?.data?.message || "Failed to create todo");
        }
    };

    const handleDeleteTodo = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this todo?");
        if(!confirmDelete) return;
        try{
            await todoService.deleteTodo(id);
            setTodos((prev)=>
                prev.filter((todo)=>todo._id !== id)
            );
        }catch(error){
            alert(error.response?.data?.message || "Failed to delete todo");
        }
    };

    const handleUpdateTodo = async (id, updatedTodo) =>{
        try{
            const response = await todoService.updateTodo(id, updatedTodo);

            setTodos((prev)=>
                prev.map((todo)=> todo._id===id ? response.data : todo)
            );
        }catch(error){
            alert( error.response?.data?.message || "Failed to update todo");
        }
    };

    return (
        <MainLayout>
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-800">Dashboard</h1>
                <p className="text-slate-500 mt-2">Manage your daily tasks Efficiently.</p>
            </div>
            <TodoForm onCreate={handleCreateTodo} />
            <hr />
            <TodoList todos={todos} onDelete={handleDeleteTodo} onUpdate={handleUpdateTodo}/>
        </MainLayout>
    );
}

export default Dashboard;