import { useContext } from "react"
import { AuthContext } from "../context/authContext"

export const useAuth = () => {
  /**
   * @typedef {Object} AuthValues
   * @property {string} token
   * @property {function(): void} logIn
   * @property {function(): void} logOut
   * @property {function(string): void} setCustomValue
   * @property {boolean} isLoggedIn
   * @property {function(boolean): void} setIsLoggedIn
   */

  /** @type {AuthValues} */
  return useContext(AuthContext)
}
