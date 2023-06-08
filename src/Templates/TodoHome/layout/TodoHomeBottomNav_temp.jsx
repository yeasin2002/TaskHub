import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineBell,
  AiFillPlusCircle,
} from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const TodoHomeBottomNav_temp = () => {
  return (
    <nav className="gap-x-1 md:hidden fixed bottom-0 left-0 flex items-end justify-between w-full px-4 py-4 bg-white">
      <div className=" into-center flex-col cursor-pointer">
        <AiFillHome className="text-accent hover:text-Shades w-6 h-6 transition-all" />
        <p>Home</p>
      </div>
      <div className=" into-center flex-col cursor-pointer">
        <AiOutlineSearch className="text-accent hover:text-Shades w-6 h-6 transition-all" />
        <p> Search</p>
      </div>
      <div className=" into-center flex-col cursor-pointer">
        <AiFillPlusCircle className="text-Shades w-16 h-16" />
      </div>
      <div className=" into-center flex-col cursor-pointer">
        <AiOutlineBell className="text-accent hover:text-Shades w-6 h-6 transition-all" />
        <p> Notification</p>
      </div>
      <div className=" into-center flex-col cursor-pointer">
        <BsFillPersonFill className="text-accent hover:text-Shades w-6 h-6 transition-all" />
        <p>Profile</p>
      </div>
    </nav>
  );
};
export default TodoHomeBottomNav_temp;
