import { Navigate, Outlet } from "react-router-dom";
import { todoHome } from "../lib/RouteTypes";

const PublicRoute = () => {
  let isAuth = localStorage.getItem("userJWT");

  return isAuth ? <Navigate to={todoHome} /> : <Outlet />;
};

export default PublicRoute;
