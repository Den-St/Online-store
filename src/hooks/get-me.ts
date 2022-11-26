import {useQuery} from "@apollo/client";
import {GetMeQuery} from "../queries/get-me.query";
import {useRecoilState, useSetRecoilState} from "recoil";
import {userState} from "../atoms/user.atom";
import {useEffect, useState} from "react";
import {UserType} from "../types/user.type";
import {TokenType} from "../types/token.type";
import Cookies from "js-cookie";
import {GetMeInteface} from "../types/get-me.inteface";

export const useGetMe = () => {
    const token = Cookies.get("token");
    const [loading, setLoading] = useState(true);
    const {data, refetch} = useQuery<GetMeInteface,TokenType>(GetMeQuery,{variables:{token:token}});
    const setUser = useSetRecoilState(userState);


    const fetch = async () => {
        try {
            const user = await refetch();
            setUser({user:user?.data?.getMe as UserType,isLoading:false});
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetch();
    },[])

    return {loading};
}

export const useViewer = () => {
    const [viewer] = useRecoilState(userState);

    return viewer;
}