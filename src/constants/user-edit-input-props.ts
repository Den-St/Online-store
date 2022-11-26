import { emailValidation } from "../components/LoginForm";

export const UserEditInputProps = {
    phoneNumber:{
        required: "Phone number is required",
        minLength:8,
        maxLength:8
    },
    name:{
        required: "Name is required",
        minLength:4,
    },
    email:{
        required: "Email is required",
        pattern:{
            value:emailValidation,
            message:"Please enter valid email"
        }
    }
}