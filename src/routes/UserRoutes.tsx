import LandingPage from "@/components/landing/Landing";
import {  Routes, Route } from "react-router-dom";

const UserRoutes = () => {
  <Routes>
    <Route path="/" element={<LandingPage />} />
  </Routes>;
};

export default UserRoutes;
