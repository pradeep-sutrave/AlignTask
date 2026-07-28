import { useState } from "react";

function TodoForm({ onCreate }){
    const inputclass="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";
    const textareaclass="w-full border border-slate-300 rounded-lg px-4 py-2 h-28 resize-none";
    const btnclass="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transitoin";
    const [formData, setFormData] = useState({
        title : "",
        description : "",
        priority : "medium",
        category : "",
        dueDate : "",
    });

    const handleChange=(e)=>{
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]:value,
        }));
    };
    const handleSubmit= (e) => {
        e.preventDefault();

        onCreate(formData);

        setFormData({
            title:"",
            description:"",
            priority:"medium",
            category:"",
            dueDate:"",
        });
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Create New Todo</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required className={inputclass} /><br /><br />
                <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className={textareaclass} /><br /><br />
                <select name="priority" value={formData.priority} onChange={handleChange} className="border border-slate-300 rounded-lg">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select><br /><br />
                <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} className={inputclass} /><br /><br />
                <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} className={inputclass} /><br /><br />
                <button type="submit" className={btnclass}>Create Todo</button>
            </form>
        </div>
    );
}

export default TodoForm;