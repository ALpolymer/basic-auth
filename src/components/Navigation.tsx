// Navigation.tsx
import { Link } from "react-router";

const Navigation = () => {
    return (
        <nav className="flex justify-center space-x-8">
            <Link
                to="/"
                className="px-6 py-3 rounded-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md"
            >
                Home
            </Link>
            <Link
                to="/dashboard"
                className="px-6 py-3 rounded-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md"
            >
                Dashboard
            </Link>
        </nav>
    );
};

export default Navigation;