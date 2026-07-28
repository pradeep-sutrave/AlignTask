function AuthButton({
    children,
    type = "submit",
    loading = false,
    disabled = false,
    onClick,
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={loading || disabled}
            className={`
                w-full
                flex
                items-center
                justify-center
                gap-2
                bg-blue-600
                hover:bg-blue-700
                active:scale-[0.98]
                text-white
                font-semibold
                py-3
                rounded-xl
                transition-all
                duration-200
                disabled:bg-slate-400
                disabled:cursor-not-allowed
            `}
        >
            {loading && (
                <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />

                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                </svg>
            )}

            {loading ? "Please wait..." : children}
        </button>
    );
}

export default AuthButton;