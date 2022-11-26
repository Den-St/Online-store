import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { CreateCommentFormInterface } from "../../types/comment.type"
import { TextArea } from "../ui-kit/Cabinet/TextArea"
import Error from "../ui-kit/Form/Error/Error"
import { InputBlock } from "../ui-kit/Form/InputBlock/styles"
import { Label } from "../ui-kit/Form/Label/styles"
import { SignButton } from "../ui-kit/Form/SignButton/styles"
import { Container } from "./styles"

type Props = {
    onCreate:(formData:CreateCommentFormInterface) => Promise<void>,
    success:boolean;
    close:() => void;
}

export const CreateCommentFormComponent:React.FC<Props> = ({onCreate,success,close}) => {
    const {register,formState:{errors},handleSubmit} = useForm<CreateCommentFormInterface>();
    useEffect(() => {
        if(success) close();
    },[success])
    return <Container onSubmit={handleSubmit(onCreate)}>
        <InputBlock>
            <Label>Comment:</Label>
            <TextArea {...register('text',{required:true})}/>
            <Error message={errors.text?.message}/>
        </InputBlock>
        <SignButton type={'submit'} value={'Confirm'}/>
    </Container>
}