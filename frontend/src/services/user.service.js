import api from "./api";

const getCurrentUser = async () => {
    const response = await api.get("/user/me");
    return response.data;
};

const userService = {
    getCurrentUser,
};

export default userService;