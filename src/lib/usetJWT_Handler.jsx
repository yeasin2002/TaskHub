export const setUserJWT = (token) => {
  return localStorage.setItem("usersToken", token)
}

export const removeUserToken = () => {
  return localStorage.removeItem("usersToken")
}

export const getJWT = () => {
  return localStorage.getItem("usersToken")
}
