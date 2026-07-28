import { FaCheckCircle, FaSignOutAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Navbar(){
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () =>{
        logout();
        navigate("/login");
    };

    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-blue-600 text-2xl" />
                    <h1 className="text-2xl font-bold text-slate-800">AlignTask</h1>
                </div>
                <div className="flex items-center gap-5">
                    <p className="text-slate-600">
                        Hello, <span className="font-semibold">{user?.name}</span>
                    </p>
                    <button onClick={handleLogout} className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
                        <FaSignOutAlt /> Logout
                    </button>
                </div>
            </div>
            
        </header>
    );
}


export default Navbar;