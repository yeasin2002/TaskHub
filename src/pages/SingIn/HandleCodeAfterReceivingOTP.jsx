import Btn_Primary from "../../Components/Btn_Primary";
import { useSingUpMutation } from "../../Redux/feature/API/accountApiSlice/accountApiSlice";

const HandleCodeAfterReceivingOTP = () => {
  const [{ isLoading }] = useSingUpMutation();
  const SingInformHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="mt-20" onSubmit={SingInformHandler}>
        <div className="my-10">
          <label
            htmlFor="singIn_email"
            className=" block mb-4 text-sm font-medium text-gray-900"
          >
            Code
          </label>
          <input
            type="text"
            id="singIn_email"
            placeholder="john.doe@example.com"
            className="form-input"
          />
        </div>

        {/*  sent OTP */}

        <Btn_Primary
          className={"w-full mt-4 pt-3" + isLoading && "bg-gray-700"}
          type={"submit"}
          disable={isLoading}
        >
          {isLoading ? "Loading..." : "Sing Up"}
        </Btn_Primary>
      </form>
    </>
  );
};

export default HandleCodeAfterReceivingOTP;
