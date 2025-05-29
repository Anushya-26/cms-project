import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AboutUS from "../pages/AboutUs";
import Developers from "../pages/Developers"; 


export default function AppRoutes() {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/Aboutus" element={<AboutUS/>} />
        <Route path="/developer" element={<Developers/>} />
  
      
    </Routes>
  )
}