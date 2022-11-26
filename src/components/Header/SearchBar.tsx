import React, { useState } from 'react';
import {Left, Magnifier, NoProducts, Product, ProductImage, ProductName, ProductPrice, ProductsContainer, SearchBarContainer, SearchButton, SearchInput, SearchMobileBtn} from "./styles";
import {SvgIcon} from "../../assets/svg/SvgIcon";
import { ProductT } from '../../types/product.type';
import { Spin } from 'antd';
import { routes } from '../../constants/routes';
import { LoadingOutlined } from '@ant-design/icons';
import { formatSearchLink } from '../../helpers/common';

type Props = {
    products?:ProductT[],
    loading:boolean
    search: (value?: string) => Promise<any> | undefined;
}

const SearchBar:React.FC<Props> = ({loading,products, search}) => {
    const [onFocus,setOnFocus] = useState(false);
    const [showMob,setShowMob] = useState(false);
    const [searchText,setSeacrhText] = useState<string | undefined>("");
    const onChangeSearchText = (e?:React.ChangeEvent<HTMLInputElement>) => {
        setSeacrhText(e?.target.value);
        search(e?.target.value);
    };
    const toggleSearch= () => setShowMob(prev => !prev);
    return <>
    <SearchMobileBtn onClick={toggleSearch}><SvgIcon type={"magnifier"} width={"30px"} height={"30px"}/></SearchMobileBtn>
    <SearchBarContainer $show={showMob}>
        <Magnifier><SvgIcon type={"magnifier"} width={"30px"} height={"30px"}/></Magnifier>
        <SearchInput onFocus={() => setOnFocus(true)} onBlur={() => setTimeout(() => setOnFocus(false),150)} value={searchText} onChange={onChangeSearchText} placeholder={"Я шукаю..."}/>
        <SearchButton to={formatSearchLink(routes.search, {text: searchText, skip: !searchText || !products?.length})}>Search</SearchButton>
        {onFocus && <ProductsContainer>
            {loading && <Spin indicator={<LoadingOutlined/>}/>}
            {products?.map(product => <Product key={product.id} to={routes.product.replace(":id",product.id.toString())}>
                <Left>
                    <ProductImage src={product.images.find(image => image.isMain)?.url}/>
                    <ProductName>{product.name}</ProductName>
                </Left>
                <ProductPrice>{product.price}₴</ProductPrice>
            </Product>)}
            {!loading && (!products?.length || !searchText?.length) && <NoProducts>No such products</NoProducts>}
        </ProductsContainer>}
    </SearchBarContainer>
    </>
};

export default SearchBar;