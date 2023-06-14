import { Navigate, Outlet } from "react-router-dom";
import { login } from "../lib/RouteTypes";

const PrivetRoues = () => {
  let isAuth = localStorage.getItem("userJWT");

  return isAuth ? <Outlet /> : <Navigate to={login} />;
};

export default PrivetRoues;
