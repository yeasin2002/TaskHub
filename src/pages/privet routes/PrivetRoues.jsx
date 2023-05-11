import { Navigate, Outlet } from "react-router-dom";
import { login } from "../../Route/RouteTypes";

let isAuth = false;

const PrivetRoues = () => {
  return isAuth ? <Outlet /> : <Navigate to={login} />;
};

export default PrivetRoues;
