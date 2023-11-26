//  Importable Dependencies
import { Link } from "react-router-dom"
import brand from "../assets/Brand.svg"
import cover from "../assets/cover/logInCover.svg"
import * as RouteTypes from "../lib/RouteTypes"

const LogInOutAndSingInAndUpContainer = ({ children }) => {
  return (
    <section className="flex h-screen w-full bg-Shades p-5 md:p-9">
      <div
        style={{ backgroundImage: `url(${cover})` }}
        className="relative hidden h-full w-full flex-1 bg-dim md:block">
        <div className=" absolute flex  h-full w-full flex-col justify-between bg-gray-900/70 px-4 py-4 ">
          <div>
            <Link to={RouteTypes.LandingPage}>
              <img src={brand} alt="logo" className=" w-56" />
            </Link>
            <h1 className=" mt-4 text-4xl font-bold text-white xl:text-5xl">
              Let us be a tiny
              <br />
              Little part of
              <br />
              Your life
            </h1>
          </div>
          <div>
            <ul className="flex gap-x-6 pb-8 font-bold text-white">
              <Link className="cursor-pointer" to={RouteTypes.LandingPage}>
                home
              </Link>
              <Link className="cursor-pointer" to={RouteTypes.about}>
                about
              </Link>
              <Link className="cursor-pointer" to={RouteTypes.helpAndSupport}>
                Help And Support{" "}
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className=" flex-1 bg-white">{children} </div>
    </section>
  )
}
export default LogInOutAndSingInAndUpContainer
