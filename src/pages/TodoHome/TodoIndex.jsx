import { Outlet } from "react-router-dom";
import TodoHomeSidebar from "./TodoHomeSidebar";

const HomeIndex = () => {
  return (
    <>
      <div className=" flex flex-col justify-between">
        <div className="flex">
          <TodoHomeSidebar />

          {/* outlets */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default HomeIndex;
