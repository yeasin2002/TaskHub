import { useState } from "react";
import LogInOutAndSingInAndUpContainer from "../../components/LogInOutAndSingInAndUpContainer";

//  sub pages
import LogIn_GetJWT from "./LogIn_GetJWT";
import LogIn_providePass from "./LogIn_providePass";

const LogIn = () => {
  const [isConfirmPass, setIsConfirmPass] = useState(false);
  return (
    <div>
      <LogInOutAndSingInAndUpContainer>
        {!isConfirmPass ? (
          <LogIn_GetJWT setIsConfirmPass={setIsConfirmPass} />
        ) : (
          <LogIn_providePass setIsConfirmPass={setIsConfirmPass} />
        )}
      </LogInOutAndSingInAndUpContainer>
    </div>
  );
};

export default LogIn;
