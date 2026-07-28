import { useEffect, useState } from 'react';
import userService from "../services/user.service";

import { AuthContext } from './AuthContext';

function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const login = (userData) => {
        setUser(userData);
    };
    const logout = () => {
        setUser(null);
        localStorage.removeItem("accessToken");
    };
    useEffect(()=>{
        const restoreUser = async()=>{
            const token=localStorage.getItem("accessToken");
            if(!token) return ;
            try{
                const response = await userService.getCurrentUser();
                login(response.data);
            }
            catch(error){
                console.error(error);
                logout();
            }
        };
        restoreUser();
    },[]);

    
    return (
        <AuthContext.Provider 
            value={{user,login,logout,}}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;