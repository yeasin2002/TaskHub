import { Link, NavLink } from "react-router-dom"
import { LandingNavItem } from "../../data/NavItems"
import * as RouteTypes from "../../lib/RouteTypes"
//  components lib
import { Button } from "@material-tailwind/react"
import Drawer from "./Drawer"

//  assets
import logo from "../../assets/logo.svg"

const LandingNav = ({ ExtraStyles }) => {
  return (
    <>
      <nav
        className={`  ${ExtraStyles}`}
        style={{
          backgroundImage: ` linear-gradient(61deg, rgba(198,211,236,1) 0%, rgba(255,255,255,1) 44%, rgba(217,226,242,1) 92%)`,
        }}>
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link to={"/"} className="flex flex-1 items-center">
            <img src={logo} className="w-40 md:w-52" />
          </Link>
          <div className="flex xl:order-2">
            <div className="xl:into-center relative hidden xl:block">
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
            <div className="block md:hidden">
              <Drawer />
            </div>

            {/* drawer end */}
          </div>
          <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-search">
            <div className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
              {LandingNavItem.map((item) => {
                return (
                  <NavLink
                    key={item.name}
                    to={item.url}
                    className="flex items-center justify-center gap-x-1 rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700">
                    {item.Icon}
                    <p className="font-semibold text-blue-700">{item.name}</p>
                  </NavLink>
                )
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default LandingNav
