import * as RouteTypes from "./../../lib/RouteTypes"
import { AiFillHome, AiOutlineSearch, AiOutlineBell, AiFillPlusCircle } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { Link } from "react-router-dom"

const TodoHomeBottomMobileNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 flex w-full items-end justify-between gap-x-1 bg-white px-4 py-4 md:hidden">
      <Link to={RouteTypes.todoHome} className=" into-center cursor-pointer flex-col">
        <AiFillHome className="h-6 w-6 text-accent transition-all hover:text-Shades" />
        <p>Home</p>
      </Link>

      <Link to={RouteTypes.search} className=" into-center cursor-pointer flex-col">
        <AiOutlineSearch className="h-6 w-6 text-accent transition-all hover:text-Shades" />
        <p> Search</p>
      </Link>

      <Link to={RouteTypes.addTask} className=" into-center cursor-pointer flex-col">
        <AiFillPlusCircle className="h-16 w-16 text-Shades" />
      </Link>
      <Link to={RouteTypes.notification} className=" into-center cursor-pointer flex-col">
        <AiOutlineBell className="h-6 w-6 text-accent transition-all hover:text-Shades" />
        <p> Notification</p>
      </Link>

      <Link to={RouteTypes.profile} className=" into-center cursor-pointer flex-col">
        <BsFillPersonFill className="h-6 w-6 text-accent transition-all hover:text-Shades" />
        <p>Profile</p>
      </Link>
    </nav>
  )
}
export default TodoHomeBottomMobileNav
