import { useForm } from "react-hook-form"
import { CategoryT, DetailedCategoryT } from "../../../types/category.type"
import { CompanyT } from "../../../types/company.type"
import { CreateProductInterface } from "../../../types/product.type"
import { Companies } from "../../ui-kit/Cabinet/Companies"
import { Header } from "../../ui-kit/Cabinet/Header"
import { SubHeader } from "../../ui-kit/Cabinet/SubHeader"
import { TextArea } from "../../ui-kit/Cabinet/TextArea"
import Error from "../../ui-kit/Form/Error/Error"
import { FileInput } from "../../ui-kit/Form/FileInput"
import { Input } from "../../ui-kit/Form/Input/style"
import { InputBlock } from "../../ui-kit/Form/InputBlock/styles"
import { Label } from "../../ui-kit/Form/Label/styles"
import { SignButton } from "../../ui-kit/Form/SignButton/styles"
import { Categories } from "./Categories"
import { Characteristics } from "./Characteristics"
import {Buttons, Container,LeftContainer,NotValidMessage,PhotosInput,RightContainer, SeePreview} from "./styles";
import ProductPreviewModal from "../../../containers/modal/product-preview-modal/index"
import { PhotoItem, Photos } from "./Preview/styles"

type Props = {
    companies?:CompanyT[],
    categoriesData?:CategoryT[],
    companiesLoading:boolean,
    chosenCompanyId:number,
    setChosenCompanyId:(id:number) => void,
    categoriesLoading:boolean,
    chosenCategoryId:number,
    setChosenCategoryId:(id:number) => Promise<void>,
    chosenCategory?:DetailedCategoryT,
    chosenCategoryLoading:boolean,
    setCharValues:(i:number,id:number) => void,
    chosenCharValues:any,
    onConfirmCreatingProduct:(productData:CreateProductInterface) => Promise<void> ,
    error?:string
    onAddFile:() => void;
    files:File[],
    images:string[],
    onMakeMain:(index:number) => void,
    onRemoveFile:(index:number) => void
}

export const CreateProductComponent:React.FC<Props> = ({chosenCategory,chosenCategoryLoading,setChosenCategoryId,
                                                        chosenCategoryId,categoriesData,categoriesLoading,chosenCompanyId,
                                                        setChosenCompanyId,companies,companiesLoading,setCharValues,
                                                        chosenCharValues,onConfirmCreatingProduct,onAddFile,
                                                        images,onMakeMain,onRemoveFile}) => {

    const {register,formState:{errors},handleSubmit,watch} = useForm<CreateProductInterface>();
    const isDone = watch("amountInStorage") && chosenCategory && watch("textDescription") && 
                   watch("name") && watch("price") && chosenCompanyId && images.length &&
                   Object.values(chosenCharValues).length === chosenCategory?.characteristics.length;     

    return <Container onSubmit={handleSubmit(onConfirmCreatingProduct)}>
        <Header>Create products</Header>
        
        <LeftContainer>
            <SubHeader>Choose company:</SubHeader>
            <Companies companies={companies} loading={companiesLoading} chosen={chosenCompanyId} choose={setChosenCompanyId}/>
           
            <SubHeader>Choose category:</SubHeader>
            <Categories loading={categoriesLoading} categories={categoriesData} chosenCategoryId={chosenCategoryId} setChosenCategoryId={setChosenCategoryId}/>
            
            <SubHeader>Choose characteristic values:</SubHeader>
            <Characteristics chosenCharValues={chosenCharValues} loading={chosenCategoryLoading} setCharValues={setCharValues} chosenCategory={chosenCategory}/>
        </LeftContainer>

        <RightContainer>
            <InputBlock>
                <Label>Name:</Label>
                <Input {...register("name",{
                    required:"Name is required",
                    minLength:3
                })} />
                <Error message={errors.name?.message}/>
            </InputBlock>

            <InputBlock>
                <Label>Price:</Label>
                <Input type={"number"} {...register("price",{
                    required:"Price is required",
                    min:5
                })} />
                <Error message={errors.price?.message}/>
            </InputBlock>

            <InputBlock>
                <Label>Amount in storage:</Label>
                <Input type={"number"} {...register("amountInStorage",{
                    required:"Amount in storage is required",
                    min:5
                })} />
                <Error message={errors.amountInStorage?.message}/>
            </InputBlock>

            <InputBlock>
                <Label>Description:</Label>
                <TextArea {...register("textDescription")} />
                <Error message={errors.textDescription?.message}/>
            </InputBlock>

            <InputBlock>
                <Label>Add photo:</Label>
                <PhotosInput>
                    <FileInput onChange={onAddFile}/>
                    <Photos>{images.map(img => <PhotoItem $chosen={false}>{<img src={img}/>}</PhotoItem>)}</Photos>
                </PhotosInput>
            </InputBlock>
            
            {isDone ? <Buttons>
                <SignButton disabled={!chosenCategory} type={"submit"} value={"Confirm"}/>

                <ProductPreviewModal onMakeMain={onMakeMain} onRemoveFile={onRemoveFile} 
                    button={<SeePreview>See preview</SeePreview>} name={watch("name")}
                    images={images} price={watch("price")} description={watch('textDescription')}
                    company={companies?.find(company => company.id === chosenCompanyId)} 
                    category={chosenCategory} charValues={chosenCharValues}/>

            </Buttons> : <NotValidMessage>Fill in all the fields</NotValidMessage>}

        </RightContainer>

    </Container>
}