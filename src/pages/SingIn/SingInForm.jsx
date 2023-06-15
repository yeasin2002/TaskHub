/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { AiFillCamera } from "react-icons/ai";

// form validation
import { DevTool } from "@hookform/devtools";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//   Components
import Btn_Primary from "../../Components/Btn_Primary";
import { useForm } from "react-hook-form";

//  form schema
const schema = yup
  .object({
    userAvatar: yup.mixed().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    userName: yup.string().required(),
    userPassword: yup.string().required(),
    confirmPassword: yup.string().required(),
  })
  .required();

const SingInForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className=" px-6 py-3">
        <h2 className="text-2xl font-bold text-blue-700">Sing In </h2>

        <form className="mt-1" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="file"
              name="avatar"
              id="avatar"
              className="hidden"
              {...register("userAvatar")}
            />
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
                htmlFor="firstName"
                className=" block mb-4 text-sm font-medium text-gray-900"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Md "
                className="form-input w-full"
                {...register("firstName")}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="lastName"
                className=" block mb-4 text-sm font-medium text-gray-900"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Yeasin"
                className="form-input w-full"
                {...register("lastName")}
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
                placeholder="yeasin2002"
                className="form-input"
                {...register("userName")}
              />
            </div>
          </div>

          {/* current password */}
          <div className="mt-2">
            <label
              htmlFor="userPassword"
              className=" block mb-4 text-sm font-medium text-gray-900"
            >
              password
            </label>
            <input
              type="password"
              id="userPassword"
              placeholder="******"
              className="form-input"
              {...register("userPassword")}
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
              {...register("confirmPassword")}
            />
          </div>

          {/* form input end */}

          <Btn_Primary className={"w-full mt-8 pt-3"} type={"submit"}>
            Log in
          </Btn_Primary>
          <div className="into-center gap-x-1 pt-4">
            <p className="text-slate-700">Already logged in?</p>
            <Link className="text-blue-600" to={"sing_in"}>
              Sign Up
            </Link>
          </div>
          <DevTool control={control} />
        </form>
        <div className="px-8 mt-2">
          {errors.firstName && (
            <p className="text-red-500">first Name is required</p>
          )}
          {errors.lastName && (
            <p className="text-red-500">last Name is required</p>
          )}
          {errors.userName && (
            <p className="text-red-500">user Name is required</p>
          )}
          {errors.userPassword && (
            <p className="text-red-500">user Password is required</p>
          )}
          {errors.confirmPassword && (
            <p className="text-red-500">confirm Password is required</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SingInForm;
