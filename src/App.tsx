// App.tsx
import { Routes, Route } from "react-router";
import Navigation from "./components/Navigation.tsx";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard.tsx";
import NoMatch from "./components/NoMatch.tsx";

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto px-4 py-8">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">React Router</h1>
                    <Navigation />
                </header>

                <main className="max-w-4xl mx-auto">
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="*" element={<NoMatch />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default App;