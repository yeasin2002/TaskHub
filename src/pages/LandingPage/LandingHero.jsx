import { useGetAllUserCountQuery } from "../../Redux/feature/API/extraApiSlice/extraApiSlice";
import { Link } from "react-router-dom";
import * as RouteTypes from "../../lib/RouteTypes";

import Btn_Primary from "../../components/Btn_Primary";

import LandingCarousel from "./LandingCarousel";

const LandingHero = () => {
  const { data, isSuccess } = useGetAllUserCountQuery();

  return (
    <>
      <section
        className="body-font w-full h-[90vh] text-gray-600"
        style={{
          backgroundImage: ` linear-gradient(61deg, rgba(198,211,236,1) 0%, rgba(255,255,255,1) 44%, rgba(217,226,242,1) 92%)`,
        }}
      >
        <div className="md:flex-row container flex flex-col items-center px-5 py-24 mx-auto">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 flex flex-col items-center mb-16 text-center">
            <h1 className="title-font sm:text-4xl mb-4 text-3xl font-medium text-gray-900">
              Smash all of your ideas into one place
            </h1>
            <p className="mb-8 leading-relaxed">
              Collaborate with your friends to help you make your journey of
              bringing them to live a bit more fun.
            </p>
            <div className="flex justify-center">
              <Link to={RouteTypes.singIn}>
                <Btn_Primary className="focus:outline-none hover:bg-indigo-600 inline-flex px-4 py-2 text-base text-white bg-indigo-500 border-0 rounded">
                  Start For Free
                </Btn_Primary>
              </Link>
            </div>

            <p className="mt-4">
              {isSuccess && (
                <span className="mx-2 font-semibold">{data?.data?.count}</span>
              )}
              people are already enjoying our app
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <LandingCarousel />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingHero;
