import { useState } from "react"
import { Link } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import { useLogInMutation } from "../../Redux/feature/API/accountApiSlice/accountApiSlice"

import Btn_Primary from "../../components/Btn_Primary"
import SvgSpinnersBarsFade from "../../components/Icons/SvgSpinnersBarsFade"
import { useAuth } from "../../hooks/useAuth"
import * as RouteTypes from "../../lib/RouteTypes"

const LogIn_Direect = ({ setIsConfirmPass }) => {
  const [emailOrUserName, setEmailOrUserName] = useState("")
  const [password, setPassword] = useState("")
  const [LogIn, { isLoading }] = useLogInMutation()
  const { logIn: loginAction } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const go = await LogIn({
        login: emailOrUserName,
        password,
      })

      if (go?.data?.status === "success") {
        await loginAction(go?.data?.data?.token)
      }

      if (go?.error?.data?.status === "fail") {
        toast(go?.error?.data?.message || "Something went wrong")
      }
    } catch (error) {
      toast(error?.message || "Something went wrong")
      console.log(error?.message)
    }
  }
  return (
    <div className="px-4 py-10 md:p-14">
      <h2 className="text-2xl font-bold text-blue-700">Log In </h2>

      <form className="mt-20" onSubmit={handleSubmit}>
        <div className="my-10">
          <label htmlFor="userName" className=" mb-4 block text-sm font-medium text-gray-900">
            Email or username
          </label>
          <input
            type="text"
            id="logIN_userName"
            placeholder="john.doe@example.com"
            className="form-input"
            required
            onChange={(e) => {
              setEmailOrUserName(e.target.value)
            }}
          />
        </div>

        <div className="mt-10">
          <label htmlFor="logIg_passCode" className=" mb-4 block text-sm font-medium text-gray-900">
            password
          </label>
          <input
            type="password"
            id="logIg_passCode"
            placeholder="**********"
            className="form-input"
            required
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>
        <p
          className="mt-8 cursor-pointer pl-1 font-semibold text-Shades transition-all hover:text-blue-700"
          onClick={() => {
            setIsConfirmPass(true)
          }}>
          Forget Password
        </p>

        <Btn_Primary type={"submit"} className={"mt-4 w-full pt-3"}>
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
  )
}
export default LogIn_Direect
