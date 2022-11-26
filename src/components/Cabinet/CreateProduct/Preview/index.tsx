import { SvgIcon } from "../../../../assets/svg/SvgIcon"
import { DetailedCategoryT } from "../../../../types/category.type"
import { CompanyT } from "../../../../types/company.type"
import { Characterisctics } from "./Characteristics"
import { ChosenPhoto, CompanyContainer, Container, DeleteButton, Description, DescriptionContainer, DescriptionHeader, Header, InfoContainer, MainContainer, MakeMainButton, PhotoItem, Photos, PhotosContainer, Price, Seller } from "./styles"

type Props = {
    name?:string,
    images:string[],
    price?:number,
    company?:CompanyT,
    category?:DetailedCategoryT,
    charValues:any,
    chosenImageIndex:number,
    setChosenImageIndex:(index:number) => void,
    description:string,
    onMakeMain:(index:number) => void,
    onRemoveFile:(index:number) => void
}

export const PreviewComponent:React.FC<Props> = ({onMakeMain,onRemoveFile,description,setChosenImageIndex, chosenImageIndex, name,company,price,images,category,charValues}) => {
    return <Container>
        <Header>{name}</Header>
        <MainContainer>
            <PhotosContainer>
                <ChosenPhoto><img src={images[chosenImageIndex]}/></ChosenPhoto>
                <Photos>
                    {images.map((image,index) => 
                    <PhotoItem $chosen={index === chosenImageIndex} onClick={() => setChosenImageIndex(index)} key={image}>
                        <DeleteButton onClick={() => onRemoveFile(index)}><SvgIcon type="cross"/></DeleteButton>
                        <MakeMainButton onClick={() => onMakeMain(index)}><SvgIcon type="pick"/></MakeMainButton>
                        <img src={image}/>
                    </PhotoItem>)}
                </Photos>
            </PhotosContainer>
            <InfoContainer>
                <Price>{price} ₴</Price>
                <CompanyContainer><Seller>Seller: {company?.name}</Seller><img src={company?.image.url}/></CompanyContainer>
                <Characterisctics category={category} charValues={charValues}/>
            </InfoContainer>
            {description && <DescriptionContainer>
                <DescriptionHeader>Description:</DescriptionHeader>
                <Description>{description}</Description>
            </DescriptionContainer>}
        </MainContainer>
    </Container>
}