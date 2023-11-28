// import { useAuth } from "../../../hooks/useAuth"

import { Button } from "@material-tailwind/react"
import ChanceName from "./ChanceName"
import ChangeEmail from "./ChangeEmail"
import ChangePassword from "./ChangePassword"
import ChangeUserName from "./ChangeUserName"
import DeleteAccount from "./DeleteAccount"

import { useState } from "react"
import { TbLogout } from "react-icons/tb"
import { useGetAllUserQuery } from "../../../Redux/feature/API/userApiSlice/userApiSlice"
const Profile = () => {
  const [isUpdating, setIsUpdating] = useState(false)
  // const { logOut } = useAuth();

  const { data } = useGetAllUserQuery()

  return (
    <section
      className=" flex h-full w-full justify-center px-6 py-6"
      id="profile"
      style={{
        backgroundImage: ` linear-gradient(40deg, rgba(198,211,236,1) 0%, rgba(242,242,242,1) 30%, rgba(217,226,242,1) 45%, rgba(244,246,251,1) 56%, rgba(245,247,251,1) 62%, rgba(198,211,236,1) 76%)`,
      }}>
      <div className="container mb-20 md:w-6/12">
        <ChanceName img={data?.data?.avatar} isUpdating={isUpdating} setIsUpdating={setIsUpdating} />
        <div className="mt-12">
          <ChangeEmail isUpdating={isUpdating} setIsUpdating={setIsUpdating} />
          <ChangePassword isUpdating={isUpdating} setIsUpdating={setIsUpdating} />
          <ChangeUserName isUpdating={isUpdating} setIsUpdating={setIsUpdating} />
          <DeleteAccount isUpdating={isUpdating} setIsUpdating={setIsUpdating} />
        </div>
        <div>
          <Button
            onClick={async () => {
              // await logOut("/");
            }}
            className="group flex gap-x-2 bg-red-700">
            Log
            <TbLogout className="transition-all group-hover:translate-x-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
export default Profile
