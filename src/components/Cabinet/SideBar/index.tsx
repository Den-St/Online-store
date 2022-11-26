import { SvgIcon } from "../../../assets/svg/SvgIcon";
import { LinkT } from "../../../types/link.type";
import { UserType } from "../../../types/user.type";
import { Container, Divider, Item } from "./styles";
import { UserHeader } from "./UserHeader";

type Props = {
    itemList?:LinkT[];
    user:UserType;
    path?:string;
}

export const SideBar:React.FC<Props> = ({itemList,user,path}) => {
    return <Container>
        <UserHeader user={user}/>
        <Divider/>
        {path && itemList?.map( item => <Item to={item.to} key={item.to} $isActive={path === item.to} ><SvgIcon width="40px" height="40px" fill="#000000" type={item.svgName} /> {item.label} </Item>)}
    </Container>
}