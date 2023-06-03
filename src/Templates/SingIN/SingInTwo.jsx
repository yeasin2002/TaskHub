import { AiOutlineArrowLeft } from "react-icons/ai";

//  Components
import FormInput from "../Components/FormInputForOTP";
import Btn_Primary from "../Components/Btn_Primary";

const SingInTwo = () => {
  return (
    <>
      <div className=" p-14">
        <div className="flex justify-between">
          <AiOutlineArrowLeft className="text-Shades text-3xl font-bold" />
          <p className=" text-Shades text-2xl font-bold">Go Back </p>
        </div>

        <form className="mt-20">
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
            />
          </div>

          {/*  sent OTP */}
          <div>
            <p className="font-semibold">Code </p>
            <div className=" gap-x-2 grid grid-cols-6">
              <FormInput />
              <FormInput />
              <FormInput />
              <FormInput />
              <FormInput />
              <FormInput />
            </div>
          </div>

          <Btn_Primary className={"w-full mt-4 pt-3"}>Log in</Btn_Primary>
          <p className="mt-4 text-center"> Send again in 58 seconds </p>
        </form>
      </div>
    </>
  );
};

export default SingInTwo;
