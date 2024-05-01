import {
  TbDeviceDesktopAnalytics,
  TbPlusMinus,
  TbUserQuestion,
} from "react-icons/tb";
import { FaClinicMedical, FaRegCalendar } from "react-icons/fa";
import { ImUserPlus } from "react-icons/im";
import {
  BsFillBellFill,
  BsPersonBoundingBox,
  BsFillPeopleFill,
} from "react-icons/bs";
import { PiShootingStarThin } from "react-icons/pi";
import { MdMedicalServices } from "react-icons/md";
import { GiGiftOfKnowledge, GiLifeTap, GiTwoCoins } from "react-icons/gi";
import { HiSpeakerphone } from "react-icons/hi";
import DOCTOR_PERMISSIONS from "@constants/permissionConstants/doctor";
import { RiUserVoiceLine } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";
import CONST from "@constants/constant";

const iconStyling =
  "flex-shrink-0 transition duration-75 group-hover:text-gray-400";

const doctorRoutes = [
  {
    collapse: false,
    name: "Dashboard",
    icon: <TbDeviceDesktopAnalytics className={iconStyling} size={19} />,
    state: "",
    views: [
      {
        path: "/dashboard",
        name: "Dashboard",
      },
    ],
  },
  {
    collapse: false,
    name: "Purchase Coins",
    icon: <GiTwoCoins className={iconStyling} size={19} />,
    state: "",
    views: [
      {
        path: "/coin/stripe",
        name: "Purchase Coins",
      },
    ],
  },
  {
    collapse: false,
    name: "Market",
    icon: <LuShoppingCart className={iconStyling} size={19} />,
    state: "",
    views: [
      {
        path: "/coin/market",
        name: "Market",
      },
    ],
  },
];

export default doctorRoutes;
