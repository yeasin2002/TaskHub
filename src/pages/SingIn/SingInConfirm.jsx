//  Components  and icons
import { useNavigate } from "react-router-dom";
import * as RouteTypes from "../../lib/RouteTypes";
import { useForm } from "react-hook-form";
import Btn_Primary from "../../components/Btn_Primary";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSingUpMutation } from "../../Redux/feature/API/accountApiSlice/accountApiSlice";
import { useSelector } from "react-redux";

//   react  toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//  util
import { setUserJWT } from "../../lib/usetJWT_Handler";

const SingInConfirm = ({ setIsConfirmStage }) => {
  const navigate = useNavigate();
  const { userAvatar, firstName, lastName, userMail, userPassword } =
    useSelector((state) => state?.singInInputsSlice);

  const [singUp, { isLoading }] = useSingUpMutation();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const handleForm = async (data) => {
    const finalSingUp = await singUp({
      email: userMail,
      username: data?.userName,
      name: `${firstName} ${lastName}`,
      avatar: userAvatar,
      password: userPassword,
      code: data?.provideCode,
    });
    console.log(finalSingUp);
    if (finalSingUp?.data?.data?.token) {
      setUserJWT(finalSingUp?.data?.data?.token);
      navigate(RouteTypes.todoHome);
    }
    if (finalSingUp?.error?.data?.status === "fail") {
      await toast(finalSingUp.error.data.message || "Something went wrong");
    }
  };
  return (
    <>
      <div className=" p-14">
        <div className="flex justify-between">
          <span
            className="cursor-pointer"
            onClick={() => {
              setIsConfirmStage(false);
            }}
          >
            <AiOutlineArrowLeft className="text-Shades text-3xl font-bold" />
          </span>
          <p className=" text-Shades text-2xl font-bold">Go Back </p>
        </div>

        {/* <HandleCodeAfterReceivingOTP setErrorState={setErrorState} /> */}

        <form className="mt-20" onSubmit={handleSubmit(handleForm)}>
          <div className="my-10">
            <label
              htmlFor="userName"
              className=" block mb-4 text-sm font-medium text-gray-900"
            >
              User Name
            </label>
            <input
              type="text"
              id="userName"
              placeholder="yeasin2002"
              className="form-input"
              {...register("userName", {
                required: "User Name is required",
              })}
            />
            {errors?.userName && (
              <p className="text-red-800">{errors?.userName?.message}</p>
            )}
          </div>

          {/* provide code */}
          <div className="my-10">
            <label
              htmlFor="provideCode"
              className=" block mb-4 text-sm font-medium text-gray-900"
            >
              code
            </label>
            <input
              type="text"
              id="provideCode"
              placeholder="Code from your mail "
              className="form-input"
              {...register("provideCode", {
                required: "provide a code that  you get from your mail",
                minLength: {
                  value: 6,
                  message: "code must be at least 6 characters",
                },
              })}
            />
            {errors?.provideCode && (
              <p className="text-red-800">{errors?.provideCode?.message}</p>
            )}
          </div>

          <Btn_Primary className={"w-full mt-4 pt-3"} type={"submit"}>
            {isLoading ? "Loading..." : "Sing In"}
          </Btn_Primary>
          <p className="mt-4 text-center"> Send again in 58 seconds </p>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default SingInConfirm;
