//  Importable Dependencies
import { Link } from "react-router-dom";
import brand from "../assets/Brand.svg";
import cover from "../assets/cover/logInCover.svg";
import * as RouteTypes from "../lib/RouteTypes";

const LogInOutAndSingInAndUpContainer = ({ children }) => {
  return (
    <section className="md:p-9 bg-Shades flex w-full h-screen p-5">
      <div
        style={{ backgroundImage: `url(${cover})` }}
        className="bg-dim md:block relative flex-1 hidden w-full h-full"
      >
        <div className=" bg-gray-900/70 absolute  flex flex-col justify-between w-full h-full px-4 py-4 ">
          <div >
            <Link
            to={RouteTypes.LandingPage}
            >
            <img src={brand} alt="logo" className=" w-56" /></Link>
            <h1 className=" xl:text-5xl mt-4 text-4xl font-bold text-white">
              Let us be a tiny
              <br />
              Little part of
              <br />
              Your life
            </h1>
          </div>
          <div>
            <ul className="gap-x-6 flex pb-8 font-bold text-white">
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
  );
};
export default LogInOutAndSingInAndUpContainer;
