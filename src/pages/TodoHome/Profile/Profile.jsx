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
import { useState } from "react";

const Profile = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const { data } = useGetAllUserQuery();

  const navigate = useNavigate();
  return (
    <section
      className=" flex justify-center w-full h-full px-6 py-6"
      id="profile"
      style={{
        backgroundImage: ` linear-gradient(40deg, rgba(198,211,236,1) 0%, rgba(242,242,242,1) 30%, rgba(217,226,242,1) 45%, rgba(244,246,251,1) 56%, rgba(245,247,251,1) 62%, rgba(198,211,236,1) 76%)`,
      }}
    >
      <div className="md:w-6/12 container mb-20">
        <ChanceName
          img={data?.data?.avatar}
          isUpdating={isUpdating}
          setIsUpdating={setIsUpdating}
        />
        <div className="mt-12">
          <ChangeEmail isUpdating={isUpdating} setIsUpdating={setIsUpdating} />
          <ChangePassword
            isUpdating={isUpdating}
            setIsUpdating={setIsUpdating}
          />
          <ChangeUserName
            isUpdating={isUpdating}
            setIsUpdating={setIsUpdating}
          />
          <DeleteAccount
            isUpdating={isUpdating}
            setIsUpdating={setIsUpdating}
          />
        </div>
        <div>
          <Button
            onClick={async () => {
              const { done } = await logOut();
              if (done) await navigate("/");
              window.location.href = "/";
              // await window.location.reload("/
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
