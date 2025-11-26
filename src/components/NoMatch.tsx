import { Link } from "react-router";

const NoMatch = () => {
    return (
        <div className="min-h-[calc(100vh-4rem)] bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8 items-center text-center">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">404 Error</p>
            <h1 className="mt-2 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
                Page not found
            </h1>
            <p className="mt-2 text-lg text-slate-500 max-w-lg">
                Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
            </p>
            <div className="mt-6">
                <Link
                    to="/"
                    className="text-base font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
                >
                    Go back home <span aria-hidden="true"> &rarr;</span>
                </Link>
            </div>
        </div>
    );
};

export default NoMatch;