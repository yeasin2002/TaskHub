import { Button, Drawer } from "@material-tailwind/react"
import React from "react"
import Btn_Primary from "../../components/Btn_Primary"
import * as RouteTypes from "../../lib/RouteTypes"

// icons
import { AiOutlineMenu, AiOutlineTeam } from "react-icons/ai"
import { BiHelpCircle, BiHomeAlt2 } from "react-icons/bi"
import { RxCross2 } from "react-icons/rx"
import { Link } from "react-router-dom"

export default function Example() {
  const [open, setOpen] = React.useState(false)
  const openDrawer = () => setOpen(true)
  const closeDrawer = () => setOpen(false)

  return (
    <>
      <Button onClick={openDrawer} className=" p-2">
        <AiOutlineMenu className=" text-xl" />
      </Button>

      <Drawer open={open} onClose={closeDrawer} className="bg-Amber p-4" placement="right">
        <div className=" flex w-full justify-end">
          <button onClick={closeDrawer} className=" p-2">
            <RxCross2 className=" text-2xl" />
          </button>
        </div>

        <div className="mt-8">
          <Link to={RouteTypes.todoHome}>
            <div className="flex items-center gap-x-1 rounded-lg bg-accent p-2 text-gray-200 transition-all hover:bg-Shades">
              <BiHomeAlt2 />
              <p>Home</p>
            </div>
          </Link>

          <Link to={RouteTypes.about}>
            <div className="mt-2 flex items-center gap-x-1 rounded-lg bg-[#e9f0ff] p-2 text-blackens transition-all hover:bg-[#f7f7f9]">
              <AiOutlineTeam />
              <p>About </p>
            </div>
          </Link>

          <Link to={RouteTypes.helpAndSupport}>
            <div className="first-line: mt-2   flex items-center gap-x-1 rounded-lg bg-[#ECF0F9] p-2 text-blackens transition-all hover:bg-[#f7f7f9]">
              <BiHelpCircle />
              <p>Help And Support </p>
            </div>
          </Link>
        </div>

        <div className="mt-20 flex w-full flex-col gap-y-2">
          <Btn_Primary>
            <Link to={RouteTypes.singIn}>Start For Free</Link>
          </Btn_Primary>
          <Link
            to={RouteTypes.login}
            className={"rounded-md bg-white py-3 text-center text-blackens transition-all hover:bg-[#ECF0F9]"}>
            Log In
          </Link>
        </div>
      </Drawer>
    </>
  )
}
