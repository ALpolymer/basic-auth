import {Routes, Route} from "react-router";
import Navigation from "./components/Navigation.tsx";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard.tsx";
import NoMatch from "./components/NoMatch.tsx";
import LoginPage from "./components/LoginPage.tsx";
import {users} from "./data/users.ts";
import {AuthProvider} from "./context/AuthProvider.tsx";

function App() {

 localStorage.setItem("users", JSON.stringify(users));
  return (
    <AuthProvider>
        <Navigation />
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="*" element={<NoMatch/>}/>
        </Routes>
    </AuthProvider>
  )
}



export default App
