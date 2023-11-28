import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "../hooks/useLocalStorage"
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [value, setValue] = useState("")
  const { value: isLoggedIn, setLocalStorage: setIsLoggedIn } = useLocalStorage("isLoggedIn")
  const navigate = useNavigate()

  const logIn = (token, redirectTo = "/") => {
    localStorage.setItem("usersToken", token)
    setValue(token)
    setIsLoggedIn(true)
    navigate(redirectTo)
  }

  const logOut = (redirectTo) => {
    // removeLocalStorage()
    localStorage.removeItem("usersToken")
    setValue("")
    setIsLoggedIn(false)
   navigate(redirectTo)
  }

  const values = {
    token: value,
    logIn,
    logOut,
    isLoggedIn,
    setIsLoggedIn,
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
