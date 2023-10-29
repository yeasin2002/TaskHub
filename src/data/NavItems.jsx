//  icons
import { AiOutlineQuestionCircle, AiOutlineTeam } from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";
import * as RouteTypes from "../lib/RouteTypes";

export const LandingNavItem = [
  {
    name: "Home",
    url: RouteTypes.LandingPage,
    Icon: <BiHomeAlt2 className="w-6 h-6" />,
  },
  {
    name: "About Us",
    url: RouteTypes.about,
    Icon: <AiOutlineQuestionCircle className="w-6 h-6" />,
  },
  {
    name: "Help And Support",
    url: RouteTypes.helpAndSupport,
    Icon: <AiOutlineTeam className="w-6 h-6" />,
  },
];
