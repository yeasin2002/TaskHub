import { useState } from "react";
import LogInOutAndSingInAndUp_temp from "../../Templates/Components/LogInOutAndSingInAndUp_temp";
// import SingIn_temp from "../../Templates/SingIN/SingIn_temp";
import SingInConfirm from "./SingInConfirm";
import SingInForm from "./SingInForm";

const SingIn = () => {
  const [IsConfirmStage, setIsConfirmStage] = useState(false);
  const [errorState, setErrorState] = useState({
    isError: false,
    errorMsg: "",
  });

  return (
    <div>
      <LogInOutAndSingInAndUp_temp>
        {IsConfirmStage ? (
          <SingInConfirm
            setErrorState={setErrorState}
            setIsConfirmStage={setIsConfirmStage}
          />
        ) : (
          <SingInForm setIsConfirmStage={setIsConfirmStage} />
        )}

        <div className="px-14">
          {errorState.isError && <p>{errorState.errorMsg} </p>}
        </div>
      </LogInOutAndSingInAndUp_temp>
    </div>
  );
};

export default SingIn;
