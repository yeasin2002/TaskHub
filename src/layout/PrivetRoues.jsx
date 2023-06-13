import { Navigate, Outlet } from "react-router-dom";
import { login } from "../lib/RouteTypes";

let isAuth = localStorage.getItem("userJWT");

const PrivetRoues = () => {
  return isAuth ? <Outlet /> : <Navigate to={login} />;
};

export default PrivetRoues;
