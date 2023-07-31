import { Navigate, Outlet } from "react-router-dom";
import { LandingPage } from "../lib/RouteTypes";

const PrivetRoues = () => {
  let isAuth = localStorage.getItem("userJWT");
  return isAuth ? <Outlet /> : <Navigate to={LandingPage} />;
};

export default PrivetRoues;
