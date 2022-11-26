import React from 'react';
import {icon} from "./types";

import { MenuOutlined,RollbackOutlined,ShoppingCartOutlined,HeartFilled,LeftOutlined,DeleteOutlined, RightOutlined, HomeOutlined, UpOutlined, DownOutlined, CheckOutlined, HeartOutlined, CloseOutlined, SearchOutlined, OrderedListOutlined, UserOutlined,PlusOutlined, WarningOutlined, EyeOutlined, LockOutlined, StarFilled, StarOutlined } from '@ant-design/icons';

export const ChildrenSvg:React.FC<{type: icon}> = ({type}) => {
    switch (type) {
        case 'burger-menu' : return <MenuOutlined />;
        case "magnifier" : return <SearchOutlined />;
        case "cart" : return <ShoppingCartOutlined />;
        case "favorite" : return <HeartOutlined />;
        case "orders" : return <OrderedListOutlined />;
        case "user" : return <UserOutlined />;
        case "cross" : return <CloseOutlined />;
        case "warning" : return <WarningOutlined />;
        case "eye" : return <EyeOutlined />;
        case "briefcase" : return <LockOutlined />;
        case "upArrow" : return <UpOutlined/>;
        case "downArrow" : return <DownOutlined/>;
        case "product" : return <PlusOutlined />;
        case "pick" : return <CheckOutlined />;
        case "rightArrow" : return <RightOutlined />;
        case "leftArrow" : return <LeftOutlined />;
        case 'home' : return <HomeOutlined />;
        case "delete" : return <DeleteOutlined />;
        case 'favoriteFilled' : return <HeartFilled />;
        case 'starFilled' : return <StarFilled/>;
        case 'starOutlined' : return <StarOutlined/>;
        case 'rollBack' : return <RollbackOutlined/>;
        default: return null;
    }

}