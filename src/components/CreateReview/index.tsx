import { useForm } from "react-hook-form";
import { CreateReviewFormInterface } from "../../types/review.type";
import { Header } from "../ui-kit/Cabinet/Header";
import { TextArea } from "../ui-kit/Cabinet/TextArea";
import Error from "../ui-kit/Form/Error/Error";
import { InputBlock } from "../ui-kit/Form/InputBlock/styles";
import { Label } from "../ui-kit/Form/Label/styles";
import { SignButton } from "../ui-kit/Form/SignButton/styles";
import { Rate } from "./Rate";
import { Container } from "./styles";

type Props = {
    onCreate:(reviewData:CreateReviewFormInterface) => Promise<void>;
    rateNumber:number;
    setRateNumber:(n:number) => void;
}

export const CreateReviewComponent:React.FC<Props> = ({onCreate,rateNumber,setRateNumber}) => {
    const {register,formState:{errors},handleSubmit} = useForm<CreateReviewFormInterface>();

    return <Container onSubmit={handleSubmit(onCreate)}>
        <Header>Creating review:</Header>
        <Rate isEditable={true} rateNumber={rateNumber} setRateNumber={setRateNumber}/>
        <InputBlock>
            <Label>Add comment:</Label>
            <TextArea {...register("text",{required:true})}/>
            <Error message={errors.text?.message}/>
        </InputBlock>
        <InputBlock>
            <Label>Add cons:</Label>
            <TextArea {...register("consText",{required:true})}/>
            <Error message={errors.consText?.message}/>
        </InputBlock>
        <InputBlock>
            <Label>Add pros:</Label>
            <TextArea {...register("prosText",{required:true})}/>
            <Error message={errors.prosText?.message}/>
        </InputBlock>
        <SignButton type={'submit'} value={'Confirm'}/>
    </Container>
}