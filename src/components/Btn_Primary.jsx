import { Button } from "@material-tailwind/react";

const Btn_Primary = ({ children, className, type, ...rest }) => {
  return (
    <Button
      type={type}
      {...rest}
      className={`bg-accent hover:bg-blue-700  transition-all  capitalize ${className}`}
    >
      {children}
    </Button>
  );
};

export default Btn_Primary;
