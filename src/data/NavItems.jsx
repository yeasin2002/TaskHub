//  icons
import { AiOutlineQuestionCircle, AiOutlineTeam } from "react-icons/ai"
import { BiHomeAlt2 } from "react-icons/bi"
import * as RouteTypes from "../lib/RouteTypes"

export const LandingNavItem = [
  {
    name: "Home",
    url: RouteTypes.LandingPage,
    Icon: <BiHomeAlt2 className="h-6 w-6" />,
  },
  {
    name: "About Us",
    url: RouteTypes.about,
    Icon: <AiOutlineQuestionCircle className="h-6 w-6" />,
  },
  {
    name: "Help And Support",
    url: RouteTypes.helpAndSupport,
    Icon: <AiOutlineTeam className="h-6 w-6" />,
  },
]
