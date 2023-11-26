import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { setSingInInputs } from "../../Redux/feature/singInInputs/singInInputs"
import * as RouteTypes from ".././../lib/RouteTypes"

import { yupResolver } from "@hookform/resolvers/yup"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import schema from "./FormSchema"

//   Components and icons
import { AiFillCamera } from "react-icons/ai"
import { useGetOTPMutation } from "../../Redux/feature/API/accountApiSlice/accountApiSlice"
import Btn_Primary from "../../components/Btn_Primary"

const SingInForm = ({ setIsConfirmStage }) => {
  const [getOTP, { isLoading }] = useGetOTPMutation()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    const req = await getOTP(data?.userMail)

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
      )
      await setIsConfirmStage(true)
    }

    if (req?.error?.data?.status === "fail") {
      await toast(req.error.data.message || "Something went wrong")
    }
  }
  return (
    <>
      <div className=" px-6 py-3">
        <h2 className="text-2xl font-bold text-blue-700">Sing In </h2>

        <form className="mt-1" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input type="file" name="avatar" id="avatar" className="hidden" {...register("userAvatar")} />
            <div>
              <label
                htmlFor="avatar"
                className="into-center mx-auto my-2 h-16 w-16 cursor-pointer rounded-full bg-blue-200">
                <AiFillCamera className="text-3xl text-accent" />
              </label>
            </div>
          </div>

          {/* name */}
          <div className="flex flex-1 justify-between gap-x-2">
            <div className="w-full">
              <label htmlFor="firstName" className=" mb-4 block text-sm font-medium text-gray-900">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Jon "
                className="form-input w-full"
                {...register("firstName")}
              />
            </div>
            <div className="w-full">
              <label htmlFor="lastName" className=" mb-4 block text-sm font-medium text-gray-900">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Doe"
                className="form-input w-full"
                {...register("lastName")}
              />
            </div>
          </div>

          <div className="grid grid-cols-2">
            {errors?.firstName && <p className="text-red-500">{errors?.firstName?.message}</p>}
            {errors?.lastName && <p className="text-red-500">{errors?.lastName?.message}</p>}
          </div>

          {/* userMail */}
          <div>
            <div className="mt-2">
              <label htmlFor="userMail" className=" mb-4 block text-sm font-medium text-gray-900">
                E-mail
              </label>
              <input
                type="text"
                id="userMail"
                placeholder="example@gmail.com"
                className="form-input"
                {...register("userMail")}
              />
            </div>
            <div className="my-1">
              {errors?.userMail && <p className="text-red-500">{errors?.userMail?.message}</p>}
            </div>
          </div>

          {/* current password */}
          <div className="mt-2">
            <label htmlFor="userPassword" className=" mb-4 block text-sm font-medium text-gray-900">
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
              {errors?.userPassword && <p className="text-red-500">{errors?.userPassword?.message}</p>}
            </div>
          </div>

          {/* new password */}
          <div className="mt-2">
            <label htmlFor="confirmPassword" className=" mb-4 block text-sm font-medium text-gray-900">
              confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="******"
              className="form-input"
              {...register("confirmPassword")}
            />
            <div>{errors?.confirmPassword && <p className="text-red-500">{errors?.confirmPassword?.message}</p>}</div>
          </div>

          {/* form input end */}

          <Btn_Primary className={"mt-8 w-full pt-3"} type={"submit"}>
            {isLoading ? "Loading..." : "Sing In"}
          </Btn_Primary>
          <div className="into-center gap-x-1 pt-4">
            <p className="text-slate-700">Already logged in?</p>
            <Link className="text-blue-600" to={RouteTypes.login}>
              Sing in
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default SingInForm
