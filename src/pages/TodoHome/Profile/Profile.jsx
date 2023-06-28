import ChanceName from "./ChanceName";
import ChangeEmail from "./ChangeEmail";
import ChangeImg from "./ChangeImg";
import ChangePassword from "./ChangePassword";
import ChangeUserName from "./ChangeUserName";
import DeleteAccount from "./DeleteAccount";

const Profile = () => {
  return (
    <section
      className="bg-[#ECF0F8] w-full h-full flex justify-center py-10 px-6"
      id="profile"
    >
      <div className="md:w-6/12 container mb-40">
        <ChangeImg />

        <ChanceName />
        <div className="mt-12">
          <ChangeEmail />
          <ChangePassword />
          <ChangeUserName />
          <DeleteAccount />
        </div>
      </div>
    </section>
  );
};

export default Profile;
