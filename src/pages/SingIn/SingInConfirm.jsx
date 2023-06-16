import { useState } from "react";
import { useGetOTPMutation } from "../../Redux/feature/API/accountApiSlice/accountApiSlice";

//  Components  and icons

import Btn_Primary from "../../Components/Btn_Primary";
import { AiOutlineArrowLeft } from "react-icons/ai";
import HandleCodeAfterReceivingOTP from "./HandleCodeAfterReceivingOTP";

const SingInConfirm = ({ setIsConfirmStage, setErrorState }) => {
  const [MailState, SetMailState] = useState("");
  const [getOTP, { isSuccess, isLoading, isError, error }] =
    useGetOTPMutation();

  const formHandler = async (e) => {
    e.preventDefault();
    await getOTP(MailState);
  };
  isError && setErrorState({ isError: true, errorMsg: error.message });
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

        {isSuccess ? (
          <HandleCodeAfterReceivingOTP setErrorState={setErrorState} />
        ) : (
          <form className="mt-20" onSubmit={formHandler}>
            <div className="my-10">
              <label
                htmlFor="singIn_email"
                className=" block mb-4 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="text"
                id="singIn_email"
                placeholder="john.doe@example.com"
                className="form-input"
                value={MailState}
                onChange={(e) => {
                  SetMailState(e.target.value);
                }}
              />
            </div>

            {/*  sent OTP */}

            <Btn_Primary className={"w-full mt-4 pt-3"} type={"submit"}>
              {isLoading ? "Loading..." : "Send OTP"}
            </Btn_Primary>
            <p className="mt-4 text-center"> Send again in 58 seconds </p>
          </form>
        )}
      </div>
    </>
  );
};

export default SingInConfirm;
