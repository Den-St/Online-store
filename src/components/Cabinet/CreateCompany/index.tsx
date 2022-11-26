import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CompanyT } from '../../../types/company.type'
import { CreateCompanyInterface } from '../../../types/company.type'
import { Container } from '../../ui-kit/Cabinet/Container'
import { Header } from '../../ui-kit/Cabinet/Header'
import Error from '../../ui-kit/Form/Error/Error'
import { Input } from '../../ui-kit/Form/Input/style'
import { Label } from '../../ui-kit/Form/Label/styles'
import { SignButton } from '../../ui-kit/Form/SignButton/styles'
import { FileInput } from '../../ui-kit/Form/FileInput'
import { InputsContainer, MainContainer, PreviewContainer, PreviewHeader, PreviewImage, PreviewName } from './styles'
import { Companies } from '../../ui-kit/Cabinet/Companies'
import { Preview } from './Preview'

type Props = {
  companies?:CompanyT[],
  loading:boolean,
  onConfirmCreate:(data:CreateCompanyInterface) => void,
  onChangeFile:() => void,
  file:File | undefined,
  setUrl:(url:string) => void,
  selectedFileUrl:string | undefined,
}

export const CreateCompanyComponent:React.FC<Props> = ({selectedFileUrl,setUrl,file,onChangeFile,companies,onConfirmCreate,loading}) => {
  const {
    register,
    formState:{errors},
    handleSubmit,
    watch
  } = useForm<CreateCompanyInterface>();

  useEffect(() => {
    if(!file) return;
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setUrl(fileReader.result as string)
    }
    fileReader.readAsDataURL(file)
  },[file])

  return <Container onSubmit={handleSubmit(onConfirmCreate)}>
    <Header>Create company</Header>
    <Companies loading={loading} chosen={0} companies={companies}/>

    <MainContainer>

      <InputsContainer>
        <Label>Name of company</Label>
        <Input {...register("name",{
          required:"Name is required",
          minLength:3,
          maxLength:20
        })} />
        <Error message={errors.name?.message}/>

        <Label>Company logo</Label>
        <FileInput onChange={onChangeFile}/>

        <SignButton type={"submit"} value={"Confirm"}/>
      </InputsContainer>

      <Preview name={watch('name')} selectedFileUrl={selectedFileUrl}/>

    </MainContainer>


    </Container>
}
