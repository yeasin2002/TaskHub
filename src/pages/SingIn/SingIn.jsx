import { useState } from "react";

import SingInConfirm from "./SingInConfirm";
import SingInForm from "./SingInForm";
import LogInOutAndSingInAndUpContainer from "../../components/LogInOutAndSingInAndUpContainer";

const SingIn = () => {
  const [IsConfirmStage, setIsConfirmStage] = useState(false);

  return (
    <div>
      <LogInOutAndSingInAndUpContainer>
        {!IsConfirmStage ? (
          <SingInForm setIsConfirmStage={setIsConfirmStage} />
        ) : (
          <SingInConfirm setIsConfirmStage={setIsConfirmStage} />
        )}

        <div className="px-14">{/* error state */}</div>
      </LogInOutAndSingInAndUpContainer>
    </div>
  );
};

export default SingIn;
