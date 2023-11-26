import { motion } from "framer-motion"
import { useState } from "react"
import { Link } from "react-router-dom"
import * as RouteTypes from "./../../lib/RouteTypes"
import sidebarItem from "./SidebarItems"

//  icons

import { AiFillPlusCircle } from "react-icons/ai"
import { BsArrowLeftSquare } from "react-icons/bs"

//  Querys
import { useGetAllUserQuery } from "../../Redux/feature/API/userApiSlice/userApiSlice"

const TodoHomeSidebar = () => {
  const [active, setActive] = useState("Home")
  const { data } = useGetAllUserQuery()
  const [isOpen, setIsOpen] = useState(false)

  let tempIng = "https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?pid=ImgDet&rs=1"

  return (
    <>
      <motion.aside
        initial={{ width: "5em" }}
        animate={{
          width: isOpen ? "16rem" : "5em",
        }}
        transition={{ duration: 0.2 }}
        className="hidden h-screen    flex-col overflow-hidden border-r bg-[#D9E2F2] px-4 py-8 rtl:border-l rtl:border-r-0 md:flex">
        {isOpen ? (
          <div className=" -mx-2 mt-6 flex flex-col items-center">
            <img
              className="mx-2 h-24 w-24 rounded-full object-cover"
              src={data?.data?.user?.avatar || tempIng}
              alt="avatar"
            />
            <h4 className=" title">{data?.data?.user?.name}</h4>
            <p className=" mx-2 mt-1 text-sm font-medium text-gray-600">{data?.data?.user?.mail}</p>
          </div>
        ) : (
          <div className="-mx-2 mt-6 flex flex-col items-center">
            <img
              className="mx-2 h-8 w-8 rounded-full object-cover"
              src={data?.data?.user?.avatar || tempIng}
              alt="avatar"
            />
            <Link to={RouteTypes.addTask}>
              <AiFillPlusCircle className=" mt-4 rounded-full text-4xl text-Shades" />
            </Link>
          </div>
        )}

        <div className={`flex flex-1 flex-col justify-between ${isOpen ? "mt-6" : "mt-24"} `}>
          <nav>
            <div className="flex flex-col gap-y-3">
              {sidebarItem.map((val) => {
                return (
                  <>
                    <Link
                      onClick={() => setActive(val.title)}
                      key={val.title}
                      to={val.route}
                      className={` flex items-start   justify-start rounded-lg   px-4  py-2 text-gray-700 transition-all duration-200 
                      ${active === val.title && "bg-gray-100"}`}>
                      <div>{val.icons}</div>
                      {isOpen && <span className="mx-4 font-medium">{val.title}</span>}
                    </Link>
                  </>
                )
              })}
            </div>
          </nav>
        </div>
        <div>
          <span
            className="inline-block cursor-pointer select-none rounded-full bg-blackens p-2 transition-all hover:bg-blue-gray-900"
            onClick={() => {
              setIsOpen(!isOpen)
            }}>
            <BsArrowLeftSquare className="text-white" />
          </span>
        </div>
      </motion.aside>
    </>
  )
}
export default TodoHomeSidebar
