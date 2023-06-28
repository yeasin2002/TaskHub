import { useState } from "react";
import { Link } from "react-router-dom";
import * as RouteTypes from "./../../lib/RouteTypes";

//  icons
import { BiHomeAlt2 } from "react-icons/bi";
import { BsSearch, BsArrowLeftSquare } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlineBell } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { useGetAllUserQuery } from "../../Redux/feature/API/userApiSlice/userApiSlice";

const TodoHomeSidebar = () => {
  const { data } = useGetAllUserQuery();
  const [isOpen, setIsOpen] = useState(false);

  let tempIng =
    "https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?pid=ImgDet&rs=1";
  return (
    <>
      <aside
        style={{
          width: isOpen ? "16rem" : "5em",
        }}
        className="rtl:border-r-0 rtl:border-l md:flex flex-col hidden h-screen px-4 py-8 overflow-y-auto bg-[#D9E2F2] border-r"
      >
        {isOpen ? (
          <div className=" flex flex-col items-center mt-6 -mx-2">
            <img
              className="object-cover w-24 h-24 mx-2 rounded-full"
              src={data?.data?.user?.avatar || tempIng}
              alt="avatar"
            />
            <h4 className=" title">{data?.data?.user?.name}</h4>
            <p className=" mx-2 mt-1 text-sm font-medium text-gray-600">
              {data?.data?.user?.mail}
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center mt-6 -mx-2">
            <img
              className="object-cover w-8 h-8 mx-2 rounded-full"
              src={data?.data?.user?.avatar || tempIng}
              alt="avatar"
            />
            <Link to={RouteTypes.addTask}>
              <AiFillPlusCircle className=" text-Shades mt-4 text-4xl rounded-full" />
            </Link>
          </div>
        )}

        <div
          className={`flex flex-col justify-between flex-1 ${
            isOpen ? "mt-6" : "mt-24"
          } `}
        >
          <nav>
            <Link
              to={RouteTypes.TodoHomeIndex}
              className=" flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
            >
              <BiHomeAlt2 />
              {isOpen && <span className="mx-4 font-medium">Home</span>}
            </Link>

            <Link to={RouteTypes.search} className="sidebarMenu">
              <BsSearch />
              {isOpen && <span className="mx-4 font-medium">Search</span>}
            </Link>

            <Link to={RouteTypes.notification} className="sidebarMenu">
              <AiOutlineBell />
              {isOpen && <span className="mx-4 font-medium">Notification</span>}
            </Link>

            <Link to={RouteTypes.profile} className="sidebarMenu">
              <RxAvatar />
              {isOpen && <span className="mx-4 font-medium">Profile</span>}
            </Link>
          </nav>
        </div>
        <div>
          <span
            className="bg-blackens hover:bg-blue-gray-900 inline-block p-2 transition-all rounded-full cursor-pointer"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <BsArrowLeftSquare className="text-white" />
          </span>
        </div>
      </aside>
    </>
  );
};
export default TodoHomeSidebar;
