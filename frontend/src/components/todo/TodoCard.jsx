import { useState } from "react";


function TodoCard({ todo ,onDelete, onUpdate}){
    const [isEditing, setIsEditing] = useState(false);
    const priorityClasses={
        low:"bg-green-100 text-green-700",
        medium:"bg-yellow-100 text-yellow-700",
        high:"bg-red-100 text-red-700",
    };
    const editbtnclass="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg";
    const deletebtnclass="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg";
    const inputclass="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";
    const textareaclass="w-full border border-slate-300 rounded-lg px-4 py-2 h-28 resize-none";

    const [formData, setFormData]=useState({
        title: todo.title,
        description: todo.description,
        priority : todo.priority,
        category : todo.category,
        dueDate: todo.dueDate ? todo.dueDate.slice(0,10):"",
        completed : todo.completed,
    });

    const handleChange = (e) =>{
        const { name, value, type, checked} = e.target;
        setFormData((prev)=> ({
            ...prev,
            [name] : type==="checkbox" ? checked : value,
        }));
    };

    const handleSave = async () => {
        await onUpdate(todo._id,formData);
        setIsEditing(false);
    };

    if(isEditing){
        return(
            <div style={{ border : "1px solid gray", padding:"15px", marginBottom: "15px",}}>
                <input type="text" name="title" value={formData.title} onChange={handleChange}  className={inputclass} placeholder="Title" /> <br /><br />
                <textarea name="description" value={formData.description} onChange={handleChange} className={textareaclass} placeholder="Description" /><br /><br />
                <select name="priority" value={formData.priority} onChange={handleChange} className="border border-slate-300 rounded-lg" >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select><br /><br />
                <input type="text" name="category" value={formData.category} onChange={handleChange}  className={inputclass}/><br /><br />
                <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} className={inputclass}/><br /><br />
                <label><input type="checkbox" name="completed" checked={formData.completed} onChange={handleChange}/>{" "}Completed</label><br /><br />
                <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Save</button>
                <button onClick={() => setIsEditing(false)} className="ml-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg">Cancel</button>
            </div>
        );
    }
    return (
        <div className="bg-white rounded-xl shadow-md p-5 mt-5 hover:shadow-lg transition duration-200 flex-col gap-y-4 justify-between">
            <h3 className="text-xl font-bold text-slate-800">{todo.title}</h3>
            <p className="text-slate-500 mt-2">{todo.description}</p>
            <p>
                <span className="font-semibold">Priority : </span> <span className={`px-3 py-1 rounded-full text-sm font-medium ${priorityClasses[todo.priority]}`}>{todo.priority}</span>
            </p>
            <p>
                <span className="font-semibold">Status : </span>{" "}
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${todo.completed?"bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}> {todo.completed ? "completed" : "Pending"}</span>
            </p>

            <p>
                <span className="font-semibold">Category : </span> {todo.category}
            </p>
            <button onClick={()=>setIsEditing(true)} className={editbtnclass}>Edit</button> {" "}
            <button onClick={()=> onDelete(todo._id)} className={deletebtnclass}>Delete</button>

        </div>
    );
}

export default TodoCard;