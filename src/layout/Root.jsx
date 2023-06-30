import { Outlet } from "react-router-dom/dist/index";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div>
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default Root;
