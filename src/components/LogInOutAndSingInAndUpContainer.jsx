//  Importable Dependencies
import cover from "../assets/cover/logInCover.svg";
import brand from "../assets/Brand.svg";
import { Link } from "react-router-dom";
import * as RouteTypes from "../lib/RouteTypes";

const LogInOutAndSingInAndUpContainer = ({ children }) => {
  return (
    <section className="md:p-9 bg-Shades flex w-full h-screen p-5">
      <div
        style={{ backgroundImage: `url(${cover})` }}
        className="bg-dim md:block relative flex-1 hidden"
      >
        <div className=" bg-slate-900/70 flex flex-col justify-between w-full h-full px-4 py-4">
          <div>
            <img src={brand} alt="logo" className=" w-56" />
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
              <Link to={RouteTypes.LandingPage}>home</Link>
              <Link to={RouteTypes.about}>about</Link>
              <Link to={RouteTypes.helpAndSupport}>Help And Support </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className=" flex-1 bg-white">{children} </div>
    </section>
  );
};
export default LogInOutAndSingInAndUpContainer;
