import React from "react";
import { Drawer, Button } from "@material-tailwind/react";
import Btn_Primary from "../../components/Btn_Primary";
import * as RouteTypes from "../../lib/RouteTypes";

// icons
import { AiOutlineMenu, AiOutlineTeam } from "react-icons/ai";
import { BiHelpCircle, BiHomeAlt2 } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Example() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <Button onClick={openDrawer} className=" p-2">
        <AiOutlineMenu className=" text-xl" />
      </Button>

      <Drawer
        open={open}
        onClose={closeDrawer}
        className="bg-Amber p-4"
        placement="right"
      >
        <div className=" flex justify-end w-full">
          <button onClick={closeDrawer} className=" p-2">
            <RxCross2 className=" text-2xl" />
          </button>
        </div>

        <div className="mt-8">
          <Link to={RouteTypes.todoHome}>
            <div className="gap-x-1 bg-accent hover:bg-Shades flex items-center p-2 text-gray-200 transition-all rounded-lg">
              <BiHomeAlt2 />
              <p>Home</p>
            </div>
          </Link>

          <Link to={RouteTypes.about}>
            <div className="gap-x-1 text-blackens bg-[#e9f0ff] transition-all hover:bg-[#f7f7f9] mt-2 flex items-center p-2 rounded-lg">
              <AiOutlineTeam />
              <p>About </p>
            </div>
          </Link>

          <Link to={RouteTypes.helpAndSupport}>
            <div className="gap-x-1 bg-[#ECF0F9]   transition-all hover:bg-[#f7f7f9] text-blackens first-line: mt-2 flex items-center p-2 rounded-lg">
              <BiHelpCircle />
              <p>Help And Support </p>
            </div>
          </Link>
        </div>

        <div className="gap-y-2 flex flex-col w-full mt-20">
          <Btn_Primary>
            <Link to={RouteTypes.singIn}>Start For Free</Link>
          </Btn_Primary>
          <Btn_Primary
            className={
              "bg-white text-blackens transition-all hover:bg-[#ECF0F9] "
            }
          >
            <Link to={RouteTypes.login}>Log In </Link>
          </Btn_Primary>
        </div>
      </Drawer>
    </>
  );
}
