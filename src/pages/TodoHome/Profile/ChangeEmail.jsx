import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useState } from "react";

const ChangeEmail = () => {
  const [Mail, setMail] = useState(false);
  return (
    <div className="my-4">
      {!Mail ? (
        <Button onClick={() => setMail(true)} className="w-full">
          Change Mail
        </Button>
      ) : (
        <div>
          {/* <p className="text-blackens text-lg font-bold">Change Email </p> */}
          <Input label="Email" variant="outlined" />
          <div className=" gap-x-2 flex items-center">
            <Button className="w-full my-2">Save</Button>
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
