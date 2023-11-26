import { Input } from "@material-tailwind/react"
import { Button } from "@material-tailwind/react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useGetOTPMutation } from "../../../Redux/feature/API/accountApiSlice/accountApiSlice"

const ChangeEmail = ({ setIsUpdating, isUpdating }) => {
  const [Mail, setMail] = useState(false)
  const [newMailValue, setNewMailValue] = useState("")
  const dispatch = useDispatch()

  const mailChangeHandler = async () => {
    setIsUpdating(true)
  }

  return (
    <div className="my-4">
      {!Mail ? (
        <Button onClick={() => setMail(true)} className="w-full">
          Change Mail
        </Button>
      ) : (
        <div>
          <Input
            label="Email"
            variant="outlined"
            onChange={(e) => {
              setNewMailValue(e.target.value)
            }}
          />
          <div className=" flex items-center gap-x-2">
            <Button className="my-2 w-full" onClick={mailChangeHandler}>
              Save
            </Button>
            <Button variant="outlined" className="my-2 w-full" onClick={() => setMail(false)}>
              cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChangeEmail
