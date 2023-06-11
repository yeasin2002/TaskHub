import { Navigate, Outlet } from "react-router-dom";
import { login } from "../lib/RouteTypes";

let isAuth = true;

const PrivetRoues = () => {
  return isAuth ? <Outlet /> : <Navigate to={login} />;
};

export default PrivetRoues;
