import {atom} from "recoil";
import {UserType} from "../types/user.type";

export const userState = atom({
    default:{user:{} as UserType,isLoading:true},
    key:"userState",
})