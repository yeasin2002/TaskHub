import LandingNav from "../LandingPage/LandingNav";
import { ReactComponent as HelpAndSupportImg } from "../../assets/helpAndSupportIMg.svg";
import SupportText from "./SupportText";

const HelpAndSupport = () => {
  return (
    <section
      className="xl:w-screen xl:h-screen w-full h-full"
      style={{
        backgroundImage: ` linear-gradient(61deg, rgba(198,211,236,1) 0%, rgba(242,242,242,1) 27%, rgba(217,226,242,1) 37%, rgba(244,246,251,1) 56%, rgba(245,247,251,1) 62%, rgba(198,211,236,1) 76%)`,
      }}
    >
      <LandingNav ExtraStyles={"bg-transparent"} />

      <div className=" xl:flex-row 2xl:p-32 xl:p-10 flex flex-col items-center justify-center p-4">
        <div>
          <HelpAndSupportImg className={"w-4/5 drop-shadow-lg"} />
        </div>
        <SupportText />
      </div>
    </section>
  );
};
export default HelpAndSupport;
