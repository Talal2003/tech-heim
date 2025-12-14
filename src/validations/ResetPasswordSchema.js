import * as yup from 'yup'

export const ResetPasswordSchema = yup.object({
    code:yup.string().required("Code is Required"),
    email:yup.string().email("Invalid Email Format").required("Email is Required"),
    newPassword:yup.string().required("New Password is Required")
    .min(8,"Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/[\d]/, "Must contain at least one number")
    .matches(/[@#$&?&!]/, "Must contain at least one special character")
})