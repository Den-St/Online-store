import { SvgIcon } from "../../../assets/svg/SvgIcon"
import { cabinetRoutes } from "../../../constants/routes";
import { UserType } from "../../../types/user.type";
import { UserInfoLink,TextInfo ,Name,Email} from "../../ui-kit/UserHeaderStyles"

type Props = {
    user:UserType;
}

export const UserHeader:React.FC<Props> = ({user}) => {
    return <UserInfoLink fontcolor="black" bg="white" hoverbg="#efeded" to={cabinetRoutes.personalInformation}>
        <SvgIcon type={"user"} width={"40px"} height={"40px"}/>
        <TextInfo>
            <Name>{user.name}</Name>
            <Email>{user.email}</Email>
        </TextInfo>
    </UserInfoLink>
}