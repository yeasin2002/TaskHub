import { todoHome, search, notification, profile } from "../../lib/RouteTypes"

// icons
import { BiHomeAlt2 } from "react-icons/bi"
import { BsSearch } from "react-icons/bs"
import { AiOutlineBell } from "react-icons/ai"
import { RxAvatar } from "react-icons/rx"

const sidebarItem = [
  {
    title: "Home",
    icons: <BiHomeAlt2 className=" w-full text-2xl" />,
    route: todoHome,
  },
  {
    title: "Search",
    icons: <BsSearch className=" w-full text-2xl" />,
    route: search,
  },
  {
    title: "Notifications",
    icons: <AiOutlineBell className=" w-full text-2xl" />,
    route: notification,
  },
  {
    title: "Profile",
    icons: <RxAvatar className=" w-full text-2xl" />,
    route: profile,
  },
]

export default sidebarItem
