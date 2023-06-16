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
        {!IsConfirmStage ? (
          <SingInForm setIsConfirmStage={setIsConfirmStage} />
        ) : (
          <SingInConfirm setIsConfirmStage={setIsConfirmStage} />
        )}

        <div className="px-14">{/* error state */}</div>
      </LogInOutAndSingInAndUp_temp>
    </div>
  );
};

export default SingIn;
