import { Link, useNavigate } from "react-router-dom";
import * as RouteTypes from "../../lib/RouteTypes";
import Btn_Primary from "../../components/Btn_Primary";
import { useLogInMutation } from "../../Redux/feature/API/accountApiSlice/accountApiSlice";
import { useState } from "react";
import { setUserJWT } from "../../lib/usetJWT_Handler";

//  toast
// import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

import SvgSpinnersBarsFade from "../../components/Icons/SvgSpinnersBarsFade";

const LogIn_Direect = ({ setIsConfirmPass }) => {
  const [emailOrUserName, setEmailOrUserName] = useState("");
  const [password, setPassword] = useState("");
  const [LogIn, { isLoading }] = useLogInMutation();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const go = await LogIn({
        login: emailOrUserName,
        password,
      });
      if (go?.data?.status === "success") {
        setUserJWT(go?.data?.data?.token);
        navigate(RouteTypes?.todoHome);
        window.location.href = "/";
      }

      if (go?.error?.data?.status === "fail") {
        toast(go?.error?.data?.message || "Something went wrong");
      }
    } catch (error) {
      toast(error?.message || "Something went wrong");
      console.log(error?.message);
    }
  };
  return (
    <div className="md:p-14 px-4 py-10">
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
            id="logIN_userName"
            placeholder="john.doe@example.com"
            className="form-input"
            required
            onChange={(e) => {
              setEmailOrUserName(e.target.value);
            }}
          />
        </div>

        <div className="mt-10">
          <label
            htmlFor="logIg_passCode"
            className=" block mb-4 text-sm font-medium text-gray-900"
          >
            password
          </label>
          <input
            type="password"
            id="logIg_passCode"
            placeholder="**********"
            className="form-input"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <p
          className="text-Shades hover:text-blue-700 pl-1 mt-8 font-semibold transition-all cursor-pointer"
          onClick={() => {
            setIsConfirmPass(true);
          }}
        >
          Forget Password
        </p>

        <Btn_Primary type={"submit"} className={"w-full mt-4 pt-3"}>
          {isLoading ? (
            <span className=" into-center gap-x-2">
              <p>Loading...</p>
              <SvgSpinnersBarsFade className={`text-green-700`} />
            </span>
          ) : (
            "Log in"
          )}
          {/* <SvgSpinnersBarsFade /> */}
        </Btn_Primary>

        <div className="into-center gap-x-1 pt-4">
          <p className="text-slate-700">Already logged in?</p>
          <Link className="text-blue-600" to={RouteTypes.singIn}>
            Sign Up
          </Link>
        </div>
      </form>
      <ToastContainer position="top-right" />
    </div>
  );
};
export default LogIn_Direect;
