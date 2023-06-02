import { Button } from "@mui/material";

const Btn_Primary = ({ children, className, type }) => {
  return (
    <Button
      type={type}
      className={`bg-Shades-100 transition-all ${className}`}
      variant="contained"
    >
      {children}
    </Button>
  );
};

export default Btn_Primary;
