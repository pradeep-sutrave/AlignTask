import api from "./api";

const register = async (userData) => {
    const response = await api.post("/user/register",userData);
    return response.data;
};

const login = async (credentials) => {
    const response = await api.post("/user/login",credentials);
    return response.data;
}

const authService = {
    register,
    login,
};

export default authService;