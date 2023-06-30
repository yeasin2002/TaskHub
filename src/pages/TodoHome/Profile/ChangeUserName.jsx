import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { useUpdateUsernameMutation } from "../../../Redux/feature/API/accountApiSlice/accountApiSlice";

// react toast message
import { toast } from "react-toastify";

const ChangeUserName = () => {
  const [UpdateUsername, { isLoading }] = useUpdateUsernameMutation();
  const [password, setPassword] = useState("");
  const [new_username, setNew_username] = useState("");
  const [username, setUsername] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const updatedUsername = await UpdateUsername({
        password,
        new_username,
      });

      if (updatedUsername.error.status === 200) {
        toast.success("change username successfully ");
      } else {
        toast.error(updatedUsername?.error?.data?.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="my-4">
      {!username ? (
        <Button onClick={() => setUsername(true)} className="w-full">
          Change username
        </Button>
      ) : (
        <form onSubmit={submitHandler}>
          <p className="text-blackens text-lg font-bold">Change username </p>
          <div className="gap-y-3 flex flex-col my-4">
            <Input
              label="Username"
              variant="outlined"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              label="current password"
              type="password"
              variant="outlined"
              required
              value={new_username}
              onChange={(e) => setNew_username(e.target.value)}
            />
          </div>
          <div className=" gap-x-2 flex items-center">
            <Button className="w-full my-2" disabled={isLoading} type="submit">
              {isLoading ? "updating " : "Change username"}
            </Button>
            <Button
              type="button"
              variant="outlined"
              className="w-full my-2"
              onClick={() => setUsername(false)}
            >
              cancel
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ChangeUserName;
