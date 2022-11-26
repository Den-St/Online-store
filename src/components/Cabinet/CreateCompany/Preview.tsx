import { PreviewName,PreviewImage,PreviewContainer, PreviewHeader } from "./styles"

type Props = {
    selectedFileUrl:string | undefined,
    name:string
}

export const Preview:React.FC<Props> = ({name,selectedFileUrl}) => {
    return <PreviewContainer>
    <PreviewHeader>Preview:</PreviewHeader>
    <PreviewImage src={selectedFileUrl}/>
    <PreviewName>{name}</PreviewName>
  </PreviewContainer>
}