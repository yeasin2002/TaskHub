import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useGetOTPMutation } from "../../../Redux/feature/API/accountApiSlice/accountApiSlice";

const ChangeEmail = ({ setIsUpdating, isUpdating }) => {
  const [Mail, setMail] = useState(false);
  const [newMailValue, setNewMailValue] = useState("");
  const dispatch = useDispatch();

  const mailChangeHandler = async () => {
    setIsUpdating(true);
  };

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
              setNewMailValue(e.target.value);
            }}
          />
          <div className=" gap-x-2 flex items-center">
            <Button className="w-full my-2" onClick={mailChangeHandler}>
              Save
            </Button>
            <Button
              variant="outlined"
              className="w-full my-2"
              onClick={() => setMail(false)}
            >
              cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangeEmail;
