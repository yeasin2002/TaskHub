import * as yup from "yup";

const schema = yup
  .object({
    userAvatar: yup.mixed(),
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    userMail: yup
      .string()
      .email("Invalid email address")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
        "Invalid email address"
      )
      .required("Email is required"),

    userPassword: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("userPassword"), null],
        "confirm  passwords should  match with password"
      )
      .required("Confirm Password is required"),
  })
  .required();

export default schema;
