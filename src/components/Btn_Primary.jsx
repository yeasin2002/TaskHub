import { Button } from "@material-tailwind/react";

const Btn_Primary = ({ children, className, type, ...rest }) => {
  return (
    <Button
      type={type}
      {...rest}
      className={`bg-accent transition-all  ${className}`}
      variant="filled"
    >
      {children}
    </Button>
  );
};

export default Btn_Primary;
