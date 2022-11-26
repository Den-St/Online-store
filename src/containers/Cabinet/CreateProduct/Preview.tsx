import { useState } from "react"
import { PreviewComponent } from "../../../components/Cabinet/CreateProduct/Preview"
import { DetailedCategoryT } from "../../../types/category.type"
import { CompanyT } from "../../../types/company.type"


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

export const Preview:React.FC<Props> = ({onMakeMain,onRemoveFile,description,name,company,price,images,category,charValues}) => {
    const [chosenImageIndex,setChosenImageIndex] = useState(0);
    
    return <PreviewComponent onMakeMain={onMakeMain} onRemoveFile={onRemoveFile}
    description={description} chosenImageIndex={chosenImageIndex} setChosenImageIndex={setChosenImageIndex}
    name={name} images={images} price={price} company={company} category={category} charValues={charValues}/>
}