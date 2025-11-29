import { Link } from "react-router"
import {useAuth} from "../context/useAuth.ts";

const Navigation = () => {

    const {token, onLogout} = useAuth()


    return (
        <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo Area */}
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-indigo-600">MyApp</span>
                    </div>

                    {/* Links */}
                    <div className="flex items-center space-x-8">
                        <Link
                            to="/"
                            className="text-slate-500 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                            Home
                        </Link>
                        <Link
                            to="/dashboard"
                            className="text-slate-500 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                            Dashboard
                        </Link>
                        {token ?
                            <button
                                className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-sm"
                                onClick={onLogout}
                            >
                                Logout
                            </button>
                            :
                            <Link
                            to="/login"
                            className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-sm"
                        >
                            Log In
                        </Link>}

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;