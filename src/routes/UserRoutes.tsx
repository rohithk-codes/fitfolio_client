import { SignupForm } from "@/components/Signup";
import LandingPage from "../components/landing/Landing";
import {  Routes, Route } from "react-router-dom";

export const UserRoutes = () => {
  return(
  <Routes>
    <Route path="/home" element={<LandingPage />} />
    <Route path="/login" element={<SignupForm/>}/>
  </Routes>
  )
  
};

 export default UserRoutes;
