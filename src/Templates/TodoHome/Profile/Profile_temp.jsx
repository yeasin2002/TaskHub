import { RxAvatar } from "react-icons/rx";
import { CgDetailsMore } from "react-icons/cg";

const Profile_temp = () => {
  return (
    <div className="bg-Light w-full">
      <div className="navArea md:justify-start bg-dim md:gap-x-10 flex justify-around px-2 pt-4">
        <div
          className={`gap-x-2 flex items-center ${" border-b-4  border-Shades  "}`}
        >
          <RxAvatar />
          <p>Account</p>
        </div>

        <div className=" gap-x-2 flex items-center">
          <CgDetailsMore />
          <p>Preferance</p>
        </div>
      </div>

      <div>render Data</div>
    </div>
  );
};

export default Profile_temp;
