import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import Developers from "../pages/Developers";
import Signup from "../pages/Signup";
import Notfound from "../pages/Notfound";
import UserStats from "../CMS/UserStats" ;
export default function AppRoutes() {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/developers" element={<Developers/>} />
        <Route path="/stats" element={<UserStats/>} />
        <Route path="*" element={<Notfound/>} />

    </Routes>
  )
}