import {Routes, Route} from "react-router";
import Navigation from "./components/Navigation.tsx";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard.tsx";
import NoMatch from "./components/NoMatch.tsx";
import LoginPage from "./components/LoginPage.tsx";

function App() {


  return (
    <>
        <Navigation />
        <Routes>
            <Route index element=<Home/>/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="*" element={<NoMatch/>}/>
        </Routes>
    </>
  )
}



export default App
