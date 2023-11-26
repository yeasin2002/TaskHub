import whHiveLogo from "../../assets/logos/wdHive.png"
import DevelopersOfTodoProject from "../../data/DevelopersOfTodoProject"
import wdHiveContactInfo from "../../data/wdHiveContactInfo"
import LandingNav from "../LandingPage/LandingNav"
import Developers from "./Developers"

const AboutUs = () => {
  return (
    <>
      <section
        className="body-font overflow-hidden text-gray-600"
        style={{
          backgroundImage: ` linear-gradient(61deg, rgba(198,211,236,1) 0%, rgba(242,242,242,1) 27%, rgba(217,226,242,1) 37%, rgba(244,246,251,1) 56%, rgba(245,247,251,1) 62%, rgba(198,211,236,1) 76%)`,
        }}>
        <LandingNav />
        <div className="container mx-auto px-5 py-24">
          <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
            <img
              alt="whHive"
              className="h-64 w-full rounded object-cover object-center lg:h-auto lg:w-1/2"
              src={whHiveLogo}
            />
            <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
              <h1 className="title-font mb-1 text-3xl font-medium text-gray-900">Web Dev Hive</h1>
              <div className="mb-4 flex">
                <span className="flex items-center">
                  <span className="ml-3 text-gray-600"> 5 Members</span>
                </span>
                <span className="space-x-2s ml-3 flex gap-x-2 border-l-4 border-gray-200 py-2 pl-3">
                  {wdHiveContactInfo.map((val) => {
                    return (
                      <a key={val.name} href={val.link} target="_blank" rel="noreferrer">
                        {val.icons}
                      </a>
                    )
                  })}
                </span>
              </div>
              <p className="leading-relaxed">
                Web Dev Hive is a community of web developers. We are a group of people who are passionate about web
                development. We are working on different projects and we are learning new things every day.
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-center">Developers Of TaskHub</p>
          <div className=" my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {DevelopersOfTodoProject.map((dev) => {
              return (
                <Developers
                  key={dev.name}
                  name={dev.name}
                  fullName={dev.fullName}
                  Roll={dev.Roll}
                  contact={dev.contact}
                  image={dev.image}
                  workDetails={dev.workDetails}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
export default AboutUs
