import * as RouteTypes from "./../../lib/RouteTypes";
//  icons
import { BiHomeAlt2 } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";

const TodoHomeSidebar = () => {
  return (
    <>
      <aside className="rtl:border-r-0 rtl:border-l flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r">
        <div className="flex flex-col items-center mt-6 -mx-2">
          <img
            className="object-cover w-24 h-24 mx-2 rounded-full"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="avatar"
          />
          <h4 className=" title">John Doe</h4>
          <p className=" mx-2 mt-1 text-sm font-medium text-gray-600">
            john@example.com
          </p>
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <Link
              to={RouteTypes.TodoHomeIndex}
              className=" flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
            >
              <BiHomeAlt2 />
              <span className="mx-4 font-medium">Home</span>
            </Link>

            <Link to={RouteTypes.search} className="sidebarMenu">
              <BsSearch />

              <span className="mx-4 font-medium">Search</span>
            </Link>

            <Link to={RouteTypes.notification} className="sidebarMenu">
              <AiOutlineBell />

              <span className="mx-4 font-medium">Notification</span>
            </Link>

            <Link to={RouteTypes.profile} className="sidebarMenu">
              <RxAvatar />
              <span className="mx-4 font-medium">Profile</span>
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default TodoHomeSidebar;
