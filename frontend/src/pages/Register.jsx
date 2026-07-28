import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

import AuthLayout from "../components/auth/AuthLayout";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";

import authService from "../services/auth.service";

function Register() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await authService.register(formData);

            alert(response.data?.message || "Registration successful");

            navigate("/login");
        } catch (error) {
            alert(
                error.response?.data?.message ||
                    "Registration failed"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout
            title="Create Account"
            subtitle="Start organizing your tasks today"
        >
            <form onSubmit={handleSubmit} className="space-y-5">
                <AuthInput
                    label="Full Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    icon={<FaUser />}
                />

                <AuthInput
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    icon={<FaEnvelope />}
                />

                <AuthInput
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    icon={<FaLock />}
                />

                <AuthButton loading={loading}>
                    Create Account
                </AuthButton>
            </form>

            <div className="mt-6 text-center">
                <p className="text-slate-600">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </AuthLayout>
    );
}

export default Register;