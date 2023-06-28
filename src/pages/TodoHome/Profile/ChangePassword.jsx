import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useState } from "react";

const ChangePassword = () => {
  const [password, setPassword] = useState(false);
  return (
    <div className="my-4">
      {!password ? (
        <Button onClick={() => setPassword(true)} className="w-full">
          Change password
        </Button>
      ) : (
        <div>
          <p className="text-blackens text-lg font-semibold">
            Change password{" "}
          </p>

          <div className="gap-y-3 flex flex-col my-4">
            <Input label="Current password" variant="outlined" />
            <Input label=" New password" variant="outlined" />
            <Input label=" Confirm new  password" variant="outlined" />
          </div>

          <div className=" gap-x-2 flex items-center">
            <Button className="w-full my-2">Save</Button>
            <Button
              variant="outlined"
              className="w-full my-2"
              onClick={() => setPassword(false)}
            >
              cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangePassword;
