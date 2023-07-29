import { Outlet } from "react-router-dom";

//  components
import TodoHomeSidebar from "./TodoHomeSidebar";
import TodoHomeBottomMobileNav from "./TodoHomeBottomMobileNav";

const HomeIndex = () => {
  return (
    <main>
      <div className=" flex-col justify-between h-screen">
        <div className="flex h-screen">
          <TodoHomeSidebar />
          {/* outlets */}
          <div className="flex-1 overflow-scroll">
            <Outlet />
          </div>
        </div>
      </div>

      {/*  bottom area mobile nav  */}
      <TodoHomeBottomMobileNav />
    </main>
  );
};

export default HomeIndex;
