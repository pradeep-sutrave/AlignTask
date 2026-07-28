import TodoCard from "./TodoCard";

function TodoList({ todos, onDelete, onUpdate}){
    if(todos.length === 0){
        return <h3>No Todos Found</h3>;
    }
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {todos.map((todo)=> (
                <TodoCard key={todo._id} todo={todo} onDelete={onDelete} onUpdate={onUpdate} />
            ))}
        </div>
    );
}

export default TodoList;