import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function AuthInput({
    label,
    icon,
    type = "text",
    name,
    value,
    onChange,
    placeholder,
    error,
}) {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    return (
        <div className="mb-5">
            <label
                htmlFor={name}
                className="block text-sm font-medium text-slate-700 mb-2"
            >
                {label}
            </label>

            <div className="relative">
                {/* Left Icon */}
                {icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                        {icon}
                    </div>
                )}

                {/* Input */}
                <input
                    id={name}
                    type={
                        isPassword
                            ? showPassword
                                ? "text"
                                : "password"
                            : type
                    }
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`
                        w-full
                        rounded-xl
                        border
                        border-slate-300
                        bg-white
                        py-3
                        ${icon ? "pl-11" : "pl-4"}
                        ${isPassword ? "pr-11" : "pr-4"}
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:ring-2
                        focus:ring-blue-200
                        ${
                            error
                                ? "border-red-500 focus:ring-red-200"
                                : ""
                        }
                    `}
                />

                {/* Password Toggle */}
                {isPassword && (
                    <button
                        type="button"
                        onClick={() =>
                            setShowPassword((prev) => !prev)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                )}
            </div>

            {error && (
                <p className="text-red-500 text-sm mt-1">
                    {error}
                </p>
            )}
        </div>
    );
}

export default AuthInput;