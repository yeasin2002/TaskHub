import { useState } from "react"
import LogInOutAndSingInAndUpContainer from "../../components/LogInOutAndSingInAndUpContainer"

//  sub pages
import LogIn_Direect from "./LogIn_Direect"
import LogIn_ForgotPass from "./LogIn_ForgotPass"

const LogIn = () => {
  const [isConfirmPass, setIsConfirmPass] = useState(false)
  return (
    <div>
      <LogInOutAndSingInAndUpContainer>
        {!isConfirmPass ? (
          <LogIn_Direect setIsConfirmPass={setIsConfirmPass} />
        ) : (
          <LogIn_ForgotPass setIsConfirmPass={setIsConfirmPass} />
        )}
      </LogInOutAndSingInAndUpContainer>
    </div>
  )
}

export default LogIn
