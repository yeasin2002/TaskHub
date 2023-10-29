import { Link, NavLink } from "react-router-dom";
import { LandingNavItem } from "../../data/NavItems";
import * as RouteTypes from "../../lib/RouteTypes";
//  components lib
import { Button } from "@material-tailwind/react";
import Drawer from "./Drawer";

//  assets
import logo from "../../assets/logo.svg";

const LandingNav = ({ ExtraStyles }) => {
  return (
    <>
      <nav
        className={`  ${ExtraStyles}`}
        style={{
          backgroundImage: ` linear-gradient(61deg, rgba(198,211,236,1) 0%, rgba(255,255,255,1) 44%, rgba(217,226,242,1) 92%)`,
        }}
      >
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <Link to={"/"} className="flex items-center flex-1">
            <img src={logo} className="md:w-52 w-40" />
          </Link>
          <div className="xl:order-2 flex">
            <div className="xl:block xl:into-center relative hidden">
              <Link to={RouteTypes.login}>
                <Button className="ml-12 mr-3 bg-blue-600">Log In</Button>
              </Link>
              {/* <Link to={RouteTypes.todoHome}> */}
              <Link to={RouteTypes.singIn}>
                <Button className="mx-1 bg-blue-600">Sing In </Button>
              </Link>
            </div>

            {/*  open menu on mobile mode  */}

            {/* drawer start */}
            <div className="md:hidden block">
              <Drawer />
            </div>

            {/* drawer end */}
          </div>
          <div
            className="md:flex md:w-auto md:order-1 items-center justify-between hidden w-full"
            id="navbar-search"
          >
            <div className="md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg">
              {LandingNavItem.map((item) => {
                return (
                  <NavLink
                    key={item.name}
                    to={item.url}
                    className="md:bg-transparent gap-x-1 md:text-blue-700 md:p-0 flex items-center justify-center py-2 pl-3 pr-4 text-white bg-blue-700 rounded"
                  >
                    {item.Icon}
                    <p className="font-semibold text-blue-700">{item.name}</p>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default LandingNav;
