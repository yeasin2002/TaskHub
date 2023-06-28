import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { useDeleteUserMutation } from "../../../Redux/feature/API/userApiSlice/userApiSlice";

// react toastify
import { toast, ToastContainer } from "react-toastify";

const DeleteAccount = () => {
  const [deleteAccount, setDeleteAccount] = useState(true);
  const [userPassword, setUserPassword] = useState("");
  const [deleteUser, { isLoading }] = useDeleteUserMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    const deleteIt = await deleteUser(userPassword);
    if (deleteIt.error.status === 400) {
      await toast.error(deleteIt.error.data.message);
    } else {
      await toast.success("Account Deleted Successfully");
      setDeleteAccount(true);
    }
  };
  return (
    <div className="my-4">
      {deleteAccount ? (
        <Button onClick={() => setDeleteAccount(false)} className="w-full">
          Delete Account
        </Button>
      ) : (
        <form onSubmit={submitHandler}>
          <p className=" text-lg font-bold text-red-600">Delete Account </p>
          <div className="my-4">
            <Input
              label="password"
              variant="outlined"
              type="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <div className=" gap-x-2 flex items-center">
            <Button className="w-full my-2" type="submit">
              {isLoading ? "Deleting..." : "Delete"}
            </Button>
            <Button
              variant="outlined"
              className="w-full my-2"
              onClick={() => setDeleteAccount(true)}
            >
              cancel
            </Button>
          </div>
        </form>
      )}

      <ToastContainer />
    </div>
  );
};

export default DeleteAccount;
