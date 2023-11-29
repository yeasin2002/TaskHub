import { Button } from "@material-tailwind/react"
import { toast } from "react-toastify"
import { useLogInMutation } from "../../Redux/feature/API/accountApiSlice/accountApiSlice"
import { Spinner } from "../../components/Icons/Spinner"
import { useAuth } from "../../hooks/useAuth"

export const GuestLogIn = () => {
  const [LogIn, { isLoading }] = useLogInMutation()
  const { logIn: loginAction } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const go = await LogIn({
        login: "yeasin.dev2002@gmail.com",
        password: "Guest2002",
      })

      if (go?.data?.status === "success") {
        await loginAction(go?.data?.data?.token)
        toast.error("Successfully logged in as Guest")
      }

      if (go?.error?.data?.status === "fail") {
        toast.error("Unable to log in")
      }
    } catch (error) {
      toast(error?.message || "Something went wrong")
      console.log(error?.message)
    }
  }
  return <Button onClick={handleSubmit}>{isLoading ? <Spinner /> : "Log in as Guest"}</Button>
}
