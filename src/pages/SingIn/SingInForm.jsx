import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { setSingInInputs } from "../../Redux/feature/singInInputs/singInInputs";

// form validation
import { DevTool } from "@hookform/devtools";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//   Components and icons
import Btn_Primary from "../../Components/Btn_Primary";
import { AiFillCamera } from "react-icons/ai";
import { useDispatch } from "react-redux";

//  form schema
const schema = yup
  .object({
    userAvatar: yup.mixed(),
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    userName: yup.string().required("user name is required"),
    userPassword: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("userPassword"), null],
        "confirm  passwords should  match with password"
      )
      .required("Confirm Password is required"),
  })
  .required();
//  md.Yeasin@2002
const SingInForm = ({ setIsConfirmStage }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    //  request-email-verify - 2002 = code open else throw error
    // code = math = signup else throw error and show on the ui

    dispatch(
      setSingInInputs({
        userAvatar: data.userAvatar[0],
        firstName: data.firstName,
        lastName: data.lastName,
        userName: data.userName,
        userPassword: data.userPassword,
        confirmPassword: data.confirmPassword,
      })
    );

    await setIsConfirmStage(true);
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
            <div className="my-1">
              {errors?.userName && (
                <p className="text-red-500">{errors?.userName?.message}</p>
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
            Log in
          </Btn_Primary>
          <div className="into-center gap-x-1 pt-4">
            <p className="text-slate-700">Already logged in?</p>
            <Link className="text-blue-600" to={"sing_in"}>
              Sing in
            </Link>
          </div>
          <DevTool control={control} />
        </form>
        <div className="px-8 mt-2"></div>
      </div>
    </>
  );
};

export default SingInForm;
