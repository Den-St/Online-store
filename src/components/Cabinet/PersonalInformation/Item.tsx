import { UseFormRegister } from "react-hook-form";
import { UserEditInterface } from "../../../types/user.type";
import { UserType } from "../../../types/user.type";
import Error from "../../ui-kit/Form/Error/Error";
import { Input } from "../../ui-kit/Form/Input/style";
import { ItemContainer, ItemContent, ItemHeader } from "./styles";

type Props = {
    info?:string | number;
    header:string;
    $isOnEditing:boolean;
    errorMessage?:string;
    register:UseFormRegister<UserEditInterface>;
    inputProps:any;
    user:UserType;
}

export const Item:React.FC<Props> = ({user,inputProps,register,errorMessage,info,header,$isOnEditing}) => {
    return <ItemContainer>
            <ItemHeader>{header[0].toLocaleUpperCase() + header.slice(1,header.length+1)}</ItemHeader>
            {$isOnEditing ? <Input/> : <ItemContent>{info}</ItemContent>}
            <Error/>
        </ItemContainer>
}
