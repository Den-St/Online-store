import Cookies from "js-cookie";

export const setToken = (token?:string) => {
    token && Cookies.set("token",token);
}
