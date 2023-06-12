import { Button } from "@material-tailwind/react";
import { useResetPasswordMutation } from "./Redux/feature/API/accountApiSlice/accountApiSlice";

const Test = () => {
  const [ResetPassword] = useResetPasswordMutation();

  return (
    <div>
      <Button
        variant="filled"
        onClick={() => {
          ResetPassword({
            login: "mdkawsarislam2002@gmail.com",
            code: "123456",
            new_password: "Yeasin2002",
          });
        }}
      >
        click
      </Button>
    </div>
  );
};

export default Test;
