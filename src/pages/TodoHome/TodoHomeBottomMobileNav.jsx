import * as RouteTypes from "./../../lib/RouteTypes";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineBell,
  AiFillPlusCircle,
} from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const TodoHomeBottomMobileNav = () => {
  return (
    <nav className="gap-x-1 md:hidden fixed bottom-0 left-0 flex items-end justify-between w-full px-4 py-4 bg-white">
      <Link
        to={RouteTypes.todoHome}
        className=" into-center flex-col cursor-pointer"
      >
        <AiFillHome className="text-accent hover:text-Shades w-6 h-6 transition-all" />
        <p>Home</p>
      </Link>

      <Link
        to={RouteTypes.search}
        className=" into-center flex-col cursor-pointer"
      >
        <AiOutlineSearch className="text-accent hover:text-Shades w-6 h-6 transition-all" />
        <p> Search</p>
      </Link>

      <Link
        to={RouteTypes.addTask}
        className=" into-center flex-col cursor-pointer"
      >
        <AiFillPlusCircle className="text-Shades w-16 h-16" />
      </Link>
      <Link
        to={RouteTypes.notification}
        className=" into-center flex-col cursor-pointer"
      >
        <AiOutlineBell className="text-accent hover:text-Shades w-6 h-6 transition-all" />
        <p> Notification</p>
      </Link>

      <Link
        to={RouteTypes.profile}
        className=" into-center flex-col cursor-pointer"
      >
        <BsFillPersonFill className="text-accent hover:text-Shades w-6 h-6 transition-all" />
        <p>Profile</p>
      </Link>
    </nav>
  );
};
export default TodoHomeBottomMobileNav;
