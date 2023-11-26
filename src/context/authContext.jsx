import { createContext } from "react"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "../hooks/useLocalStorage"
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const { value, setLocalStorage, removeLocalStorage, setCustomValue } = useLocalStorage("usersToken")
  const { value: isLoggedIn, setLocalStorage: setIsLoggedIn } = useLocalStorage("isLoggedIn")
  const navigate = useNavigate()

  const logIn = (token, redirectTo) => {
    setLocalStorage(token)
    setIsLoggedIn(true)
    navigate(redirectTo)
  }

  const logOut = (redirectTo) => {
    removeLocalStorage()
    setCustomValue(false)
    setIsLoggedIn(false)
    navigate(redirectTo)
  }

  /**
   * @typedef {Object} AuthValues
   * @property {string} token
   * @property {function(): void} logIn
   * @property {function(): void} logOut
   * @property {function(any): void} setCustomValue
   * @property {boolean} isLoggedIn
   * @property {function(boolean): void} setIsLoggedIn
   */

  /** @type {AuthValues} */

  const values = {
    token: value,
    logIn,
    logOut,
    setCustomValue,
    isLoggedIn,
    setIsLoggedIn,
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
