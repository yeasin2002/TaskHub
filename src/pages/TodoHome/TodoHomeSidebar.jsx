import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as RouteTypes from "./../../lib/RouteTypes";
import sidebarItem from "./SidebarItems";

//  icons

import { AiFillPlusCircle } from "react-icons/ai";
import { BsArrowLeftSquare } from "react-icons/bs";

//  Querys
import { useGetAllUserQuery } from "../../Redux/feature/API/userApiSlice/userApiSlice";

const TodoHomeSidebar = () => {
  const [active, setActive] = useState("Home");
  const { data } = useGetAllUserQuery();
  const [isOpen, setIsOpen] = useState(false);

  let tempIng =
    "https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?pid=ImgDet&rs=1";

  return (
    <>
      <motion.aside
        initial={{ width: "5em" }}
        animate={{
          width: isOpen ? "16rem" : "5em",
        }}
        transition={{ duration: 0.2 }}
        className="rtl:border-r-0 rtl:border-l    md:flex flex-col hidden h-screen px-4 py-8 overflow-hidden bg-[#D9E2F2] border-r"
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
            <div className="gap-y-3 flex flex-col">
              {sidebarItem.map((val) => {
                return (
                  <>
                    <Link
                      onClick={() => setActive(val.title)}
                      key={val.title}
                      to={val.route}
                      className={` px-4 flex   items-start justify-start   transition-all  py-2 duration-200 text-gray-700 rounded-lg 
                      ${active === val.title && "bg-gray-100"}`}
                    >
                      <div>{val.icons}</div>
                      {isOpen && (
                        <span className="mx-4 font-medium">{val.title}</span>
                      )}
                    </Link>
                  </>
                );
              })}
            </div>
          </nav>
        </div>
        <div>
          <span
            className="bg-blackens hover:bg-blue-gray-900 inline-block p-2 transition-all rounded-full cursor-pointer select-none"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <BsArrowLeftSquare className="text-white" />
          </span>
        </div>
      </motion.aside>
    </>
  );
};
export default TodoHomeSidebar;
