import { SvgIcon } from "../../../assets/svg/SvgIcon";
import { ImageT } from "../../../types/image.type"
import { AllImagesContainer, ArrowButton, ChosenImage, ChosenImageContainer, Container, ImageItem, ImagesContainer } from "./styles"

type Props = {
    images?:ImageT[],
    prevPhoto:() => void;
    nextPhoto:() => void;
    choosePhotoIndex:(index:number) => void;
    chosenPhotoIndex:number;
}

export const Left:React.FC<Props> = ({choosePhotoIndex,chosenPhotoIndex,nextPhoto,prevPhoto,images}) => {
    return <Container>
            <ImagesContainer>
                <ChosenImageContainer>
                    <ArrowButton key={images?.[chosenPhotoIndex].id} $isActive={chosenPhotoIndex !== 0} onClick={prevPhoto} disabled={chosenPhotoIndex === 0}><SvgIcon type={"leftArrow"}/></ArrowButton>
                    <ChosenImage key={images?.[chosenPhotoIndex].url} src={images?.[chosenPhotoIndex].url}/>
                    <ArrowButton key={nextPhoto.name} $isActive={chosenPhotoIndex !== ((images?.length || 1) - 1)} onClick={nextPhoto} disabled={chosenPhotoIndex === ((images?.length || 1) - 1)}><SvgIcon type={"rightArrow"}/></ArrowButton>
                </ChosenImageContainer>
                <AllImagesContainer>
                    {images?.map((img,index) => 
                    <ImageItem key={img.id} $isChosen={chosenPhotoIndex === index} onClick={() => choosePhotoIndex(index)} src={img.url}/>)}
                </AllImagesContainer>
            </ImagesContainer>
    </Container>
}