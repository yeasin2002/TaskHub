import { Outlet } from "react-router-dom/dist/index";
// import WindowNav from "./WindowNav";

const Root = () => {
  return (
    <div>
      {/* <WindowNav /> */}
      <Outlet />
    </div>
  );
};

export default Root;
