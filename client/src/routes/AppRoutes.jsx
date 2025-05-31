import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import Developers from "../pages/Developers";
import Signup from "../pages/Signup";
import Notfound from "../pages/Notfound";
import DashboardLayouts from "../layouts/DashboardLayouts";
import Guidelines from "../dashboard/Guidelines";
import UserForm from "../dashboard/UserForm";
import PetsProf from "../dashboard/PetsProf";
import PrivateRoute from "./PrivateRoutes";

export default function AppRoutes() {
  return (
    <Routes>

        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="*" element={<Notfound />} />
      <Route
				path="/dashboard"
				element={
					<PrivateRoute>
						<DashboardLayouts />
					</PrivateRoute>
				}
			></Route>
    
        <Route path="/dashboard" element={<DashboardLayouts />} />
        <Route path="/dashboard/Guidelines" element={<Guidelines />} />
        <Route path="/dashboard/form" element={<UserForm />} />
        <Route path="/dashboard/profile" element={<PetsProf />} />
      </Routes>
  );
}
