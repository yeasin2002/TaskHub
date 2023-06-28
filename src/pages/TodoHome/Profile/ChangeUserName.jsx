import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useState } from "react";

const ChangeUserName = () => {
  const [username, setUsername] = useState(false);
  return (
    <div className="my-4">
      {!username ? (
        <Button onClick={() => setUsername(true)} className="w-full">
          Change username
        </Button>
      ) : (
        <div>
          <p className="text-blackens text-lg font-bold">Change username </p>
          <div className="gap-y-3 flex flex-col my-4">
            <Input label="Username" variant="outlined" />
            <Input label="current password" variant="outlined" />
          </div>
          <div className=" gap-x-2 flex items-center">
            <Button className="w-full my-2">Save</Button>
            <Button
              variant="outlined"
              className="w-full my-2"
              onClick={() => setUsername(false)}
            >
              cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangeUserName;
