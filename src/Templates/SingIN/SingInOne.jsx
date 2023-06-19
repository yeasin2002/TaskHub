import { Link } from "react-router-dom";
import { AiFillCamera } from "react-icons/ai";

//   Components
import Btn_Primary from "../components/Btn_Primary";

const SingInOne = () => {
  return (
    <>
      <div className=" px-6 py-3">
        <h2 className="text-2xl font-bold text-blue-700">Sing In </h2>

        <form className="mt-1">
          <div>
            <input type="file" name="avatar" id="avatar" className="hidden" />
            <div>
              <label
                htmlFor="avatar"
                className="into-center w-16 h-16 mx-auto my-2 bg-blue-200 rounded-full cursor-pointer"
              >
                <AiFillCamera className="text-accent text-3xl" />
              </label>
            </div>
          </div>

          {/* name */}
          <div className="gap-x-2 flex justify-between flex-1">
            <div className="w-full">
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
                className="form-input w-full"
              />
            </div>
            <div className="w-full">
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
                className="form-input w-full"
              />
            </div>
          </div>

          {/* userName */}
          <div>
            <div className="mt-2">
              <label
                htmlFor="username"
                className=" block mb-4 text-sm font-medium text-gray-900"
              >
                username
              </label>
              <input
                type="text"
                id="userName"
                placeholder="john.doe@example.com"
                className="form-input"
              />
            </div>
          </div>

          {/* current password */}
          <div className="mt-2">
            <label
              htmlFor="currentPassword"
              className=" block mb-4 text-sm font-medium text-gray-900"
            >
              Current password
            </label>
            <input
              type="password"
              id="currentPassword"
              placeholder="******"
              className="form-input"
            />
          </div>

          {/* new password */}
          <div className="mt-2">
            <label
              htmlFor="confirmPassword"
              className=" block mb-4 text-sm font-medium text-gray-900"
            >
              confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="******"
              className="form-input"
            />
          </div>

          {/* form input end */}
          <p className="pl-1 mt-2 font-semibold text-blue-600">
            Forget Password
          </p>

          <Btn_Primary className={"w-full mt-4 pt-3"}>Log in</Btn_Primary>
          <div className="into-center gap-x-1 pt-4">
            <p className="text-slate-700">Already logged in?</p>
            <Link className="text-blue-600" to={"sing_in"}>
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SingInOne;
