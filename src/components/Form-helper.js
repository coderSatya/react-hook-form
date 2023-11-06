import * as yup from "yup";

export const Schema = yup.object({
  username: yup
    .string()
    .required("")
    // .min(4)
    .strict(true)
    .trim("White spaces before/after name are not allowed"),

  email: yup.string().email().required(),

  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One lowercase, One Number and one space"
    ),
  confirmpassword: yup
    .string()
    .required("confirm password is a required field")
    .oneOf([yup.ref("password")], "Password and confirm password must match"),
  phone: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only disgits")
    .min(8)
    .max(10),
    address:yup.string().required()
});
