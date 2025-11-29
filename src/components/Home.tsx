import { Link } from "react-router";



const Home = () => {

    return (
        <div className="relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20 px-4 sm:px-6 lg:px-8">
                    <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">Welcome to the</span>{' '}
                                <span className="block text-indigo-600 xl:inline">Public Home Page</span>
                            </h1>
                            <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                This is a professionally styled landing page using Tailwind CSS. It's clean, responsive, and ready for your SaaS application.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <Link
                                        to="/login"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg transition-all"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <Link
                                        to="/dashboard"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg transition-all"
                                    >
                                        View Dashboard
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            {/* Decorative Image/Shape */}
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-slate-100 flex items-center justify-center text-slate-300">
                [Hero Image Placeholder]
            </div>
        </div>
    );
};

export default Home;