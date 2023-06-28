import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const ChanceName = () => {
  return (
    <div className="my-4">
      <p className="text-blackens mb-6 text-lg font-bold">Full Name </p>
      <Input label="Username" variant="outlined" />
      <Button className="w-full my-2">Save</Button>
    </div>
  );
};

export default ChanceName;
