import { Link, useNavigate } from "react-router-dom";
import * as RouteTypes from "../../lib/RouteTypes";
import Btn_Primary from "../../Components/Btn_Primary";
import { useLogInMutation } from "../../Redux/feature/API/accountApiSlice/accountApiSlice";
import { useState } from "react";

const LogIn_Direect = ({ setIsConfirmPass }) => {
  const [emailOrUserName, setEmailOrUserName] = useState("");
  const [password, setPassword] = useState("");
  const [LogIn, { isLoading }] = useLogInMutation();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const go = await LogIn({
      login: emailOrUserName,
      password,
    });
    if (go?.data?.status === "success") {
      navigate(RouteTypes.todoHome);
    }
  };
  return (
    <div className=" p-14">
      <h2 className="text-2xl font-bold text-blue-700">Log In </h2>

      <form className="mt-20" onSubmit={handleSubmit}>
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
            onChange={(e) => {
              setEmailOrUserName(e.target.value);
            }}
          />
        </div>

        <div className="mt-10">
          <label
            htmlFor="passCode"
            className=" block mb-4 text-sm font-medium text-gray-900"
          >
            password
          </label>
          <input
            type="password"
            id="passCode"
            placeholder="**********"
            className="form-input"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <p
          className="pl-1 mt-2 font-semibold text-blue-600"
          onClick={() => {
            setIsConfirmPass(true);
          }}
        >
          Forget Password
        </p>

        <Btn_Primary type={"submit"} className={"w-full mt-4 pt-3"}>
          {isLoading ? "Loading..." : "Log in"}
        </Btn_Primary>

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
export default LogIn_Direect;
