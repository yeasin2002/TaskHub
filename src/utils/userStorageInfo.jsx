export const setUserToken = (key, value) => {
  return localStorage.setItem("usersToken", JSON.stringify(value))
}
export const getUserToken = () => {
  return localStorage.getItem("usersToken")
}
