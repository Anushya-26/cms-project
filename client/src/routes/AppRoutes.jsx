import { Route, Routes,BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
// import Login from "../pages/Login";
import AboutUS from "../pages/AboutUs";
// import DevelopersPage from "../pages/DevelopersPage";


export default function AppRoutes() {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/about" element={<AboutUS/>} />
        {/* <Route path="/developerpage" element={<DevelopersPage/>} /> */}
  
    </Routes>
  )
}