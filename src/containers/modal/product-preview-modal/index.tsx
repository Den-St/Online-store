import React from 'react';
import {ModalProps} from "../../../types/modal-props.type";
import { Overlay } from '../../../components/ui-kit/Modal/overlay';
import SideMenu from "../../SideMenu";
import { Container } from './styles';
import {useSignModal} from "../../../hooks/sign-modal.hook";
import {BasePortal} from "../../../components/ui-kit/Modal/Portal";
import { usePreview } from '../../../hooks/preview.hook';
import { Preview } from '../../Cabinet/CreateProduct/Preview';
import { CompanyT } from '../../../types/company.type';
import { DetailedCategoryT } from '../../../types/category.type';


type Props = {
    name?:string,
    images:string[],
    price:number,
    company?:CompanyT,
    category?:DetailedCategoryT,
    charValues:any,
    description:string,
    onRemoveFile:(index:number) => void,
    onMakeMain:(index:number) => void
}

const ProductPreviewModal:React.FC<ModalProps & Props> = ({onRemoveFile,onMakeMain,description,button,name,company,price,images,category,charValues}) => {
    const {opened,open,close} = usePreview();

    return <>
        <div onClick={open}>
            {button}
        </div>
        {opened && <BasePortal>
            <Container>
                <Overlay onClick={close}/>
                <Preview onRemoveFile={onRemoveFile} onMakeMain={onMakeMain} name={name} images={images} price={price} description={description}
                    company={company} category={category} charValues={charValues}/>
            </Container>
        </BasePortal>}
    </>
};

export default ProductPreviewModal;