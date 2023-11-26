import { Input } from "@material-tailwind/react"
import { Button } from "@material-tailwind/react"
import { useState } from "react"
import { useUpdatePasswordMutation } from "../../../Redux/feature/API/accountApiSlice/accountApiSlice"
import { toast } from "react-toastify"

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [password, setPassword] = useState(false)

  //  api slice
  const [UpdatePassword, { isLoading }] = useUpdatePasswordMutation()

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const updatedPassword = await UpdatePassword({
        password: currentPassword,
        new_password: newPassword,
      })

      if (updatedPassword.error.status === 200) {
        console.log("change password successfully ")
      } else {
        toast.error(updatedPassword?.error?.data?.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <div className="my-4">
      {!password ? (
        <Button onClick={() => setPassword(true)} className="w-full">
          Change password
        </Button>
      ) : (
        <div>
          <p className="text-lg font-semibold text-blackens">Change password </p>

          <form onSubmit={submitHandler} className="my-4 flex flex-col gap-y-3">
            <Input
              label="Current password"
              variant="outlined"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <Input
              label=" New password"
              variant="outlined"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Input
              label=" Confirm new  password"
              variant="outlined"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className=" flex items-center gap-x-2">
              <Button className="my-2 w-full" type="submit">
                {isLoading ? "Loading..." : "Change password"}
              </Button>
              <Button variant="outlined" className="my-2 w-full" type="button" onClick={() => setPassword(false)}>
                cancel
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default ChangePassword
