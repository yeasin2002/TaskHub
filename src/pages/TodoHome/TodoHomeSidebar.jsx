import { ChevronRightSquare, PlusCircle } from "lucide-react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { twMerge } from "tailwind-merge"
import { cn } from "../.././utils/cn"
import { useGetAllUserQuery } from "../../Redux/feature/API/userApiSlice/userApiSlice"
import defaultUser from "../../assets/global/user.jpg"
import sidebarItem from "./SidebarItems"

export const TodoHomeSidebar = ({ ...rest }) => {
  const { data } = useGetAllUserQuery()
  const location = useLocation()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <aside
      {...rest}
      className={twMerge(
        "bg-slate-100 sticky left-0 top-0 flex   h-screen  flex-col items-center justify-between px-2 py-10 transition-all ",
        isOpen ? "w-48" : "w-20"
      )}>
      <div className="flex flex-col items-center justify-center gap-y-2">
        <img src={data?.data?.user?.avatar || defaultUser} alt="Home" className="h-14 w-14" />
        {isOpen && <h3 className=" ">{data?.data?.user?.name}</h3>}

        <Link to={"/todo/add_task"} className="my-8 flex gap-x-2 rounded-md px-2  py-2 transition-all hover:bg-dim">
          <PlusCircle />
          {isOpen && "Add Todo"}
        </Link>
      </div>
      <div className="my-6 flex flex-col place-items-start  gap-y-2 ">
        {sidebarItem.map((items) => {
          return (
            <Link
              to={items.route}
              className={cn(
                `flex   cursor-pointer   gap-x-2 rounded-lg border-b-4 border-white p-3
              font-semibold text-gray-700 hover:text-gray-900 `,
                {
                  "bg-dim": items.route === location.pathname.split("/")[2] || items.route === location.pathname,
                }
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
