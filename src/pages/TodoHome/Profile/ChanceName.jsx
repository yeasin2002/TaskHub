import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { useUpdateUserMutation } from "../../../Redux/feature/API/userApiSlice/userApiSlice";

//  temporary image
let tempImg =
  "https://th.bing.com/th/id/R.677d3abf75ddc6139ac411467c792eef?rik=Lqi7AtlZe%2fFXbw&pid=ImgRaw&r=0";

const ChanceName = ({ img }) => {
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("");
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const updateServerState = await updateUser({
        name,
        // avatar: avatar,
      });
      setAvatar(null);
      setName("");
      console.log(updateServerState);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form className="my-4" onSubmit={submitHandler}>
      <div className="into-center">
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
      </div>
      <p className="text-blackens mb-6 text-lg font-bold">Full Name </p>
      <Input
        label="Username"
        variant="outlined"
        required
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Button type="submit" className="w-full my-2">
        {isLoading ? " updating  " : "update"}
      </Button>
    </form>
  );
};

export default ChanceName;
