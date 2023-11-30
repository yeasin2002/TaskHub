import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import * as routes from "../lib/RouteTypes"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [value, setValue] = useState(() => {
    const token = localStorage.getItem("usersToken")
    return token || ""
  })
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const loggedIn = localStorage.getItem("isLoggedIn")
    return loggedIn || false
  })
  const navigate = useNavigate()

  const logIn = (token, redirectTo = routes.todoHome) => {
    localStorage.setItem("usersToken", token)
    localStorage.setItem("isLoggedIn", true)

    setValue(token)
    setIsLoggedIn(true)

    navigate(redirectTo)
  }

  const logOut = (redirectTo = routes.LandingPage) => {
    localStorage.setItem("isLoggedIn", false)
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
