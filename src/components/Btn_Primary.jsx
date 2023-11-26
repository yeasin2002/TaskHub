import { Button } from "@material-tailwind/react"

const Btn_Primary = ({ children, className, type, ...rest }) => {
  return (
    <Button type={type} {...rest} className={`bg-accent capitalize  transition-all  hover:bg-blue-700 ${className}`}>
      {children}
    </Button>
  )
}

export default Btn_Primary
