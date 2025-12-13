import * as yup from 'yup'

export const RegisterSchema = yup.object({
  fullName:yup.string().required("Full Name is Required"),
  email:yup.string().email("Invalid Email Format").required("Email is Required"),
  userName:yup.string().matches(/^[a-zA-Z0-9._-]+$/,"Invalid Username")
  .min(4,"Username must be at least 4 characters")
  .required("Username is Required"),
  phoneNumber:yup.string().required("Phone Number is Required"),
  password:yup.string().required("Password is Required")
  .min(8,"Password must be at least 8 characters")
  .matches(/[A-Z]/, "Must contain at least one uppercase letter")
  .matches(/[a-z]/, "Must contain at least one lowercase letter")
  .matches(/[\d]/, "Must contain at least one number")
  .matches(/[@#$&?&!]/, "Must contain at least one special character")
})