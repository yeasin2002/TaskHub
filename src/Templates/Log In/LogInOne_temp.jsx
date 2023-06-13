import { Link } from "react-router-dom";
import Btn_Primary from "../Components/Btn_Primary";

const LogInOne_temp = () => {
  return (
    <div className=" p-14">
      <h2 className="text-2xl font-bold text-blue-700">Log In </h2>

      <form className="mt-20">
        <div className="my-10">
          <label
            htmlFor="userName"
            className=" block mb-4 text-sm font-medium text-gray-900"
          >
            Email or username
          </label>
          <input
            type="text"
            id="userName"
            placeholder="john.doe@example.com"
            className="form-input"
          />
        </div>

        <div className="mt-10">
          <label
            htmlFor="logInTempPassCode"
            className=" block mb-4 text-sm font-medium text-gray-900"
          >
            Email or username
          </label>
          <input
            type="password"
            id="logInTempPassCode"
            placeholder="**********"
            className="form-input"
          />
        </div>
        <p className="pl-1 mt-2 font-semibold text-blue-600">Forget Password</p>

        <Btn_Primary className={"w-full mt-4 pt-3"}>Log in</Btn_Primary>
        <div className="into-center gap-x-1 pt-4">
          <p className="text-slate-700">Already logged in?</p>
          <Link className="text-blue-600" to={"sing_in"}>
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};
export default LogInOne_temp;
