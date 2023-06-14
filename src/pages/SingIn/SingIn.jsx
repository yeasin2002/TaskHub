import { useState } from "react";
import LogInOutAndSingInAndUp_temp from "../../Templates/Components/LogInOutAndSingInAndUp_temp";
// import SingIn_temp from "../../Templates/SingIN/SingIn_temp";
import SingInConfirm from "./SingInConfirm";
import SingInForm from "./SingInForm";

const SingIn = () => {
  const [IsConfirmStage, setIsConfirmStage] = useState(false);
  return (
    <div>
      <LogInOutAndSingInAndUp_temp>
        {IsConfirmStage ? (
          <SingInConfirm />
        ) : (
          <SingInForm setIsConfirmStage={setIsConfirmStage} />
        )}
      </LogInOutAndSingInAndUp_temp>
    </div>
  );
};

export default SingIn;
