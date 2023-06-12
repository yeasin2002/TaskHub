import { Link } from "react-router-dom";

//  icons
import {
  AiOutlineMenu as Menu,
  AiOutlineTeam,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";

//  components lib
import { Button } from "@material-tailwind/react";

//  assets

import logo from "../../assets/logo.svg";

const LandingNav = () => {
  return (
    <>
      <nav className=" bg-white border-gray-200">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <Link to={"/"} className="flex items-center">
            <img src={logo} className="w-52" />
          </Link>
          <div className="md:order-2 flex">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500  hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200  rounded-lg text-sm p-2.5 mr-1"
            ></button>
            <div className="md:block md:into-center relative hidden">
              <Button variant="contained" className="mx-1 bg-blue-600">
                Contained
              </Button>
              <Button variant="contained" className="mx-1 bg-blue-600">
                Log In
              </Button>
            </div>

            {/*  open menu on mobile mode  */}
            <Button
              type="button"
              className="md:hidden inline-flex items-center p-2 text-sm rounded-lg"
            >
              <span className="sr-only">Open menu</span>
              <Menu className=" w-6 h-6" />
            </Button>
          </div>
          <div
            className="md:flex md:w-auto md:order-1 items-center justify-between hidden w-full"
            id="navbar-search"
          >
            <div className="md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg">
              <Link
                to={"/"}
                className="md:bg-transparent gap-x-1 md:text-blue-700 md:p-0 flex items-center justify-center py-2 pl-3 pr-4 text-white bg-blue-700 rounded"
              >
                <BiHomeAlt2 className="w-6 h-6" />
                Home
              </Link>
              <Link
                to={"/todo_home"}
                className="md:bg-transparent gap-x-1 md:text-blue-700 md:p-0 flex items-center justify-center py-2 pl-3 pr-4 text-white bg-blue-700 rounded"
              >
                <AiOutlineTeam className="w-6 h-6" />
                Todo Home
              </Link>

              <Link
                to={"/"}
                className="md:bg-transparent gap-x-1 md:text-blue-700 md:p-0 flex items-center justify-center py-2 pl-3 pr-4 text-white bg-blue-700 rounded"
              >
                <AiOutlineQuestionCircle className="w-6 h-6" />
                Help And Support
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default LandingNav;
