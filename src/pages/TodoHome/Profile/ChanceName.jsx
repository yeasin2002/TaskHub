/* eslint-disable no-constant-condition */
import { useState } from "react";
import { toast } from "react-toastify";
import { useUpdateUserMutation } from "../../../Redux/feature/API/userApiSlice/userApiSlice";

import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

import ImgLoader from "../../../components/ImgLoader";
import WifiFade from "../../../components/Icons/WifiFade";

//  temporary image
let tempImg =
  "https://th.bing.com/th/id/R.677d3abf75ddc6139ac411467c792eef?rik=Lqi7AtlZe%2fFXbw&pid=ImgRaw&r=0";

const ChanceName = ({ img, isUpdating, setIsUpdating }) => {
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("");
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      const updateServerState = await updateUser({
        name,
        // avatar: avatar,
      });
      setName("");
      await setIsUpdating(false);
      console.log(updateServerState);
      if (updateServerState?.data?.status === "success") {
        toast.success("Profile Updates");
      } else if (updateServerState?.error?.data?.status === "fail") {
        toast.error(updateServerState?.error.data?.message);
      }
    } catch (error) {
      toast.error("something went wrong, please try again");
      setIsUpdating(false);
    }
  };

  return (
    <form className="my-4" onSubmit={submitHandler}>
      <div className="into-center my-3">
        {isUpdating ? (
          <ImgLoader />
        ) : (
          <>
            <label htmlFor="img">
              <img
                src={img || tempImg}
                className="avatar w-20 h-20 cursor-pointer"
                alt="Profile Picture "
              />
            </label>
            <input
              className="hidden"
              type="file"
              name="img"
              id="img"
              multiple={false}
              onChange={(e) => {
                setAvatar(e.target.files);
              }}
            />
          </>
        )}
      </div>

      <Input
        label="Full Name"
        variant="outlined"
        required
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Button type="submit" className="w-full my-2">
        {isLoading ? (
          <div className="gap-x-1 flex justify-center">
            <p>Updating..</p>
            <WifiFade />
          </div>
        ) : (
          "update"
        )}
      </Button>
    </form>
  );
};

export default ChanceName;
