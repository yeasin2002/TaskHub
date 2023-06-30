import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { setSingInInputs } from "../../Redux/feature/singInInputs/singInInputs";

//  react  toastify
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// form validation

import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./FormSchema";

//   Components and icons
import Btn_Primary from "../../components/Btn_Primary";
import { AiFillCamera } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useGetOTPMutation } from "../../Redux/feature/API/accountApiSlice/accountApiSlice";

const SingInForm = ({ setIsConfirmStage }) => {
  const [getOTP, { isLoading }] = useGetOTPMutation();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const req = await getOTP(data?.userMail);

    if (req?.data?.status === "success") {
      dispatch(
        setSingInInputs({
          userAvatar: data?.userAvatar[0]?.name,
          firstName: data?.firstName,
          lastName: data?.lastName,
          userMail: data?.userMail,
          userPassword: data?.userPassword,
          confirmPassword: data?.confirmPassword,
        })
      );
      await setIsConfirmStage(true);
    }

    if (req?.error?.data?.status === "fail") {
      await toast(req.error.data.message || "Something went wrong");
    }
  };
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

          <div className="grid grid-cols-2">
            {errors?.firstName && (
              <p className="text-red-500">{errors?.firstName?.message}</p>
            )}
            {errors?.lastName && (
              <p className="text-red-500">{errors?.lastName?.message}</p>
            )}
          </div>

          {/* userMail */}
          <div>
            <div className="mt-2">
              <label
                htmlFor="userMail"
                className=" block mb-4 text-sm font-medium text-gray-900"
              >
                E-mail
              </label>
              <input
                type="text"
                id="userMail"
                placeholder="mdkawsarislam2002@gmail.com"
                className="form-input"
                {...register("userMail")}
              />
            </div>
            <div className="my-1">
              {errors?.userMail && (
                <p className="text-red-500">{errors?.userMail?.message}</p>
              )}
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
            <div className="mt-1">
              {errors?.userPassword && (
                <p className="text-red-500">{errors?.userPassword?.message}</p>
              )}
            </div>
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
            <div>
              {errors?.confirmPassword && (
                <p className="text-red-500">
                  {errors?.confirmPassword?.message}
                </p>
              )}
            </div>
          </div>

          {/* form input end */}

          <Btn_Primary className={"w-full mt-8 pt-3"} type={"submit"}>
            {isLoading ? "Loading..." : "Sing In"}
          </Btn_Primary>
          <div className="into-center gap-x-1 pt-4">
            <p className="text-slate-700">Already logged in?</p>
            <Link className="text-blue-600" to={"sing_in"}>
              Sing in
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SingInForm;
