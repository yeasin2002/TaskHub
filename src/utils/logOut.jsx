const logOut = () => {
  localStorage.removeItem("userJWT")
  window.location.href = "/"
  return {
    done: true,
  }
}

export default logOut
