import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import Notfound from "../pages/Notfound";
import Signup from "../pages/Signup";

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />     
      <Route path="/login" element={<Login />} />     
      <Route path="/signup" element={<Signup />} />     
      <Route path="*" element={<Notfound />} />     

    </Routes>
  );
}