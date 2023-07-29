import { Button } from "@material-tailwind/react";
import ChanceName from "./ChanceName";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import ChangeUserName from "./ChangeUserName";
import DeleteAccount from "./DeleteAccount";

import { TbLogout } from "react-icons/tb";
import logOut from "../../../utils/logOut";
import { useNavigate } from "react-router-dom";
import { useGetAllUserQuery } from "../../../Redux/feature/API/userApiSlice/userApiSlice";

const Profile = () => {
  const { data } = useGetAllUserQuery();

  const navigate = useNavigate();
  return (
    <section
      className="bg-[#ECF0F8] w-full  flex justify-center  py-6 px-6"
      id="profile"
    >
      <div className="md:w-6/12 container mb-20">
        <ChanceName img={data?.data?.avatar} />
        <div className="mt-12">
          <ChangeEmail />
          <ChangePassword />
          <ChangeUserName />
          <DeleteAccount />
        </div>
        <div>
          <Button
            onClick={() => {
              logOut();
              navigate("/");
            }}
            className="gap-x-2 group flex bg-red-700"
          >
            Log
            <TbLogout className="group-hover:translate-x-2 transition-all" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
