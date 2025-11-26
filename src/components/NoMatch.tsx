// NoMatch.tsx
const NoMatch = () => {
    return (
        <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-4">Page Not Found</p>
                <p className="text-gray-500">The page you're looking for doesn't exist.</p>
            </div>
        </div>
    );
};

export default NoMatch;