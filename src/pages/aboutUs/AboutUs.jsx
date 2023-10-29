import whHiveLogo from "../../assets/logos/wdHive.png";
import DevelopersOfTodoProject from "../../data/DevelopersOfTodoProject";
import wdHiveContactInfo from "../../data/wdHiveContactInfo";
import LandingNav from "../LandingPage/LandingNav";
import Developers from "./Developers";

const AboutUs = () => {
  return (
    <>
      <section
        className="body-font overflow-hidden text-gray-600"
        style={{
          backgroundImage: ` linear-gradient(61deg, rgba(198,211,236,1) 0%, rgba(242,242,242,1) 27%, rgba(217,226,242,1) 37%, rgba(244,246,251,1) 56%, rgba(245,247,251,1) 62%, rgba(198,211,236,1) 76%)`,
        }}
      >
        <LandingNav />
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 flex flex-wrap items-center mx-auto">
            <img
              alt="whHive"
              className="lg:w-1/2 lg:h-auto object-cover object-center w-full h-64 rounded"
              src={whHiveLogo}
            />
            <div className="lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0 w-full mt-6">
              <h1 className="title-font mb-1 text-3xl font-medium text-gray-900">
                Web Dev Hive
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <span className="ml-3 text-gray-600"> 5 Members</span>
                </span>
                <span className="space-x-2s gap-x-2 flex py-2 pl-3 ml-3 border-l-4 border-gray-200">
                  {wdHiveContactInfo.map((val) => {
                    return (
                      <a
                        key={val.name}
                        href={val.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {val.icons}
                      </a>
                    );
                  })}
                </span>
              </div>
              <p className="leading-relaxed">
                Web Dev Hive is a community of web developers. We are a group of
                people who are passionate about web development. We are working
                on different projects and we are learning new things every day.
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-center">Developers Of TaskHub</p>
          <div className=" sm:grid-cols-2 md:grid-cols-3 grid grid-cols-1 my-4">
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
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutUs;
