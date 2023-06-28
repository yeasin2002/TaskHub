import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useState } from "react";

const DeleteAccount = () => {
  const [deleteAccount, setDeleteAccount] = useState(true);
  return (
    <div className="my-4">
      {deleteAccount ? (
        <Button onClick={() => setDeleteAccount(false)} className="w-full">
          Delete Account
        </Button>
      ) : (
        <div>
          <p className=" text-lg font-bold text-red-600">Delete Account </p>
          <div className="my-4">
            <Input label="password" variant="outlined" type="password" />
          </div>
          <div className=" gap-x-2 flex items-center">
            <Button className="w-full my-2">Save</Button>
            <Button
              variant="outlined"
              className="w-full my-2"
              onClick={() => setDeleteAccount(true)}
            >
              cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteAccount;
