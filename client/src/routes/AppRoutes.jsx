import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import AboutUS from "../pages/AboutUs";
import DevelopersPage from "../pages/DevelopersPage";


export default function AppRoutes() {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/Aboutus" element={<AboutUS/>} />
        {/* <Route path="/developerpage" element={<DevelopersPage/>} /> */}
  
      
    </Routes>
  );
}