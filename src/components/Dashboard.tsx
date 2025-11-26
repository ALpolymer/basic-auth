const Dashboard = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900">Dashboard</h2>
                <p className="mt-1 text-sm text-slate-500">Overview of your protected content.</p>
            </div>

            {/* Grid Layout for Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Card 1 */}
                <div className="bg-white overflow-hidden shadow rounded-xl border border-slate-100 p-6">
                    <dt className="text-sm font-medium text-slate-500 truncate">Total Users</dt>
                    <dd className="mt-1 text-3xl font-semibold text-indigo-600">1,204</dd>
                </div>

                {/* Card 2 */}
                <div className="bg-white overflow-hidden shadow rounded-xl border border-slate-100 p-6">
                    <dt className="text-sm font-medium text-slate-500 truncate">Avg. Open Rate</dt>
                    <dd className="mt-1 text-3xl font-semibold text-indigo-600">58.16%</dd>
                </div>

                {/* Card 3 */}
                <div className="bg-white overflow-hidden shadow rounded-xl border border-slate-100 p-6">
                    <dt className="text-sm font-medium text-slate-500 truncate">Revenue</dt>
                    <dd className="mt-1 text-3xl font-semibold text-indigo-600">$24,000</dd>
                </div>
            </div>

            {/* Content Area */}
            <div className="mt-8 bg-white shadow rounded-xl border border-slate-100 p-6 h-64 flex items-center justify-center text-slate-400 border-dashed border-2 border-slate-200">
                Chart or Table Content Goes Here
            </div>
        </div>
    );
};

export default Dashboard;