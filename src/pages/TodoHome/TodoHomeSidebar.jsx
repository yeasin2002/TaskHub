import { useLocalStorage } from "$hooks/useLocalStorage"
import { useGetAllUserQuery } from "../../Redux/feature/API/userApiSlice/userApiSlice"
import defaultUser from "../../assets/global/user.jpg"
import sidebarItem from "./SidebarItems"

import { ChevronRightSquare } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"

export const TodoHomeSidebar = ({ ...rest }) => {
  const { data } = useGetAllUserQuery()

  const [isOpen, setIsOpen] = useState(false)
  const { value: activeMenu, setLocalStorage: setActiveMenu } = useLocalStorage("sidebar-item")

  return (
    <aside
      {...rest}
      className={twMerge(
        "bg-slate-100 sticky left-0 top-0 flex   h-screen  flex-col items-center justify-between px-2 py-10 transition-all ",
        isOpen ? "w-56" : "w-24"
      )}>
      <Link to={"/"}>
        <img src={data?.data?.user?.avatar || defaultUser} alt="Home" className="h-14 w-14" />
      </Link>
      <div className="my-6 space-y-2 ">
        {sidebarItem.map((items) => {
          return (
            <Link
              onClick={() => setActiveMenu(items.title)}
              to={items.route}
              className={twMerge(
                `flex  cursor-pointer gap-x-2  border-b-4 border-white p-2 font-semibold
              text-gray-700 hover:text-gray-900 `,
                activeMenu === items.title && "border-brand-900"
              )}
              key={items.title + items.route}>
              {items.icons}
              {isOpen && items.title}
            </Link>
          )
        })}
      </div>
      <div
        className={twMerge("cursor-pointer rounded-full bg-gray-300 p-3", isOpen && "rotate-180")}
        onClick={() => setIsOpen(!isOpen)}>
        <ChevronRightSquare />
      </div>
    </aside>
  )
}

export default TodoHomeSidebar

/*

//  Querys
import { useGetAllUserQuery } from "../../Redux/feature/API/userApiSlice/userApiSlice"
const { data } = useGetAllUserQuery()
  <div className=" -mx-2 mt-6 flex flex-col items-center">
            <img
              className="mx-2 h-24 w-24 rounded-full object-cover"
              src={data?.data?.user?.avatar || tempIng}
              alt="avatar"
            />
            <h4 className=" title">{data?.data?.user?.name}</h4>
            <p className=" mx-2 mt-1 text-sm font-medium text-gray-600">{data?.data?.user?.mail}</p>
          </div>
*/
