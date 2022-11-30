import { useForm } from "react-hook-form";
import { UserEditInterface } from "../../../types/user.type";
import { UserType } from "../../../types/user.type";
import { Container } from "../../ui-kit/Cabinet/Container"
import { Header } from "../../ui-kit/Cabinet/Header"
import { Input } from "../../ui-kit/Form/Input/style";
import Error from "../../ui-kit/Form/Error/Error";
import {DirHeader} from "./DirHeader";
import { Dir, ContentContainer,ContentWrapper, EditButton ,CancelEditingButton,ConfirmEditingButton,
    ButtonsContainer, ItemContainer, ItemHeader, ItemContent, QuitAccount} from "./styles"
import { emailValidation } from "../../LoginForm";
import Cookies from "js-cookie";

type Props = {
    user:UserType;
    isOnEditing:boolean;
    isOpened:boolean;
    onBlurEditing:() => void;
    onBlurOpen:() => void;
    onOpen:() => void;
    onEditing:() => void;
    toggleEditing:() => void;
    toggleOpen:() => void;
    onConfirmEditing:(data:UserEditInterface) => Promise<void>;
    error:any;
    onQuit:() => void;
}

export const PersonalInformationComponent:React.FC<Props> = ({onQuit,error,onConfirmEditing,user,isOnEditing,isOpened,onBlurEditing,onBlurOpen,onEditing,onOpen,toggleEditing,toggleOpen}) => {
    const {
        register,
        formState:{errors},
        handleSubmit,
    } = useForm<UserEditInterface>();
    
    return <Container>
        <Header>Personal information</Header>
        <Dir $isOpened={isOpened}>
            <DirHeader toggleOpen={toggleOpen} $isOpened={isOpened}/>
            {isOpened && <ContentContainer onSubmit={handleSubmit(onConfirmEditing)}>
                <ContentWrapper>

                    <ItemContainer>
                        <ItemHeader>Name</ItemHeader>
                        {isOnEditing ? <Input error={!!errors?.name?.message} defaultValue={user.name} {...register("name",{
                            required: "Name is required",
                            minLength:4,
                        })}/> : <ItemContent>{user.name}</ItemContent>}
                        <Error message={errors.name?.message}/>
                    </ItemContainer>

                    <ItemContainer>
                        <ItemHeader>Email</ItemHeader>
                        {isOnEditing ? <Input error={!!errors?.email?.message} defaultValue={user.email} {...register("email",{
                            required: "Email is required",
                            pattern:{
                                value:emailValidation,
                                message:"Please enter valid email"
                            }
                        })}/> : <ItemContent>{user.email}</ItemContent>}
                        <Error message={errors.email?.message}/>
                    </ItemContainer>

                    <ItemContainer>
                        <ItemHeader>Phone number</ItemHeader>
                        {isOnEditing ? <Input error={!!errors?.phoneNumber?.message} defaultValue={user.phoneNumber} {...register("phoneNumber",{
                            required: "Phone number is required",
                            minLength:10,
                            maxLength:10
                        })}/> : <ItemContent>{user.phoneNumber}</ItemContent>}
                        <Error message={errors.phoneNumber?.message}/>
                    </ItemContainer>

                </ContentWrapper>
                {isOnEditing ? <ButtonsContainer>
                    <ConfirmEditingButton type={"submit"} value={"Confirm"}/>
                    <CancelEditingButton onClick={onBlurEditing}>Cancel</CancelEditingButton>
                </ButtonsContainer> : <EditButton onClick={onEditing}>Edit</EditButton>}
            </ContentContainer>}
        </Dir>
        <QuitAccount onClick={onQuit}>Quit</QuitAccount>
    </Container>
}