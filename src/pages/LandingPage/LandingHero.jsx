import { Link } from "react-router-dom"
import { useGetAllUserCountQuery } from "../../Redux/feature/API/extraApiSlice/extraApiSlice"
import * as RouteTypes from "../../lib/RouteTypes"

import Btn_Primary from "../../components/Btn_Primary"
import { GuestLogIn } from "./GuestLogIn"
import LandingCarousel from "./LandingCarousel"

const LandingHero = () => {
  const { data, isSuccess } = useGetAllUserCountQuery()

  return (
    <>
      <section
        className="body-font h-screen max-h-screen w-full text-gray-600"
        style={{
          backgroundImage: ` linear-gradient(61deg, rgba(198,211,236,1) 0%, rgba(255,255,255,1) 44%, rgba(217,226,242,1) 92%)`,
        }}>
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
            <h1 className=" mb-4 font-serif text-3xl font-semibold text-gray-900 sm:text-4xl">
              Smash all of your ideas into one place
            </h1>
            <p className="mb-8 text-base leading-relaxed">
              Collaborate with your friends to help you make your journey of bringing them to live a bit more fun.
            </p>
            <div className="flex justify-center gap-x-2">
              <Link to={RouteTypes.singIn}>
                <Btn_Primary className="inline-flex rounded border-0 bg-indigo-500 px-4 py-2 text-base text-white hover:bg-indigo-600 focus:outline-none">
                  Start For Free
                </Btn_Primary>
              </Link>
              <GuestLogIn />
            </div>

            <p className="mt-4">
              {isSuccess && <span className="mx-2 font-semibold">{data?.data?.count}</span>}
              people are already enjoying our app
            </p>
          </div>
          <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
            <LandingCarousel />
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingHero
