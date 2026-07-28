import { FaCheckCircle } from "react-icons/fa";
function AuthLayout({ title, subtitle, children }){
    return (
         <div className="min-h-screen from-blue-100 via-slate-100 to-purple-100 flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

                <div className="text-center mb-8">

                    <FaCheckCircle
                        className="mx-auto text-blue-600 mb-4"
                        size={55}
                    />

                    <h1 className="text-3xl font-bold text-slate-800">
                        AlignTask
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Organize your work efficiently
                    </p>

                </div>

                <div className="mb-6 text-center">

                    <h2 className="text-2xl font-semibold text-slate-800">
                        {title}
                    </h2>

                    <p className="text-slate-500 mt-1">
                        {subtitle}
                    </p>

                </div>

                {children}

            </div>

        </div>
    )
}

export default AuthLayout;