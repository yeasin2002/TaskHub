import Btn_Primary from "../components/Btn_Primary";
import { AiOutlineArrowLeft } from "react-icons/ai";

const LogInTwo_temp = () => {
  return (
    <>
      <div className=" p-14">
        <div className="flex justify-between">
          <AiOutlineArrowLeft className="text-Shades text-3xl font-bold" />
          <p className=" text-Shades text-2xl font-bold">Go Back </p>
        </div>

        <form className="mt-20">
          <div className="mt-10">
            <label
              htmlFor="logInTwoPassCode"
              className=" block mb-4 text-sm font-medium text-gray-900"
            >
              New password
            </label>
            <input
              type="password"
              id="logInTwoPassCode"
              placeholder="**********"
              className="form-input"
            />
          </div>

          <div className="mt-10">
            <label
              htmlFor="NewPassCode"
              className=" block mb-4 text-sm font-medium text-gray-900"
            >
              Confirm new password
            </label>
            <input
              type="password"
              id="NewPassCode"
              placeholder="**********"
              className="form-input"
            />
          </div>

          <Btn_Primary className={"w-full mt-7 pt-3"}>
            Change Password
          </Btn_Primary>
        </form>
      </div>
    </>
  );
};

export default LogInTwo_temp;
