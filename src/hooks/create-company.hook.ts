import { userState } from './../atoms/user.atom';
import { useRecoilValue } from 'recoil';
import { CreateCompanyRes, CreateCompanyReq, CreateCompanyInterface } from './../types/company.type';
import { CreateCompanyQuery } from './../queries/create-company.query';
import { useMutation } from '@apollo/client';
import { SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
export const useCreateCompany = (refetch:() => void) => {
    const [onCreate] = useMutation<CreateCompanyRes,CreateCompanyReq>(CreateCompanyQuery);
    const user = useRecoilValue(userState);
    const [file,setFile] = useState<File | undefined>();

    const onChangeFile = (e?:React.ChangeEvent<HTMLInputElement>) => {
        setFile(e?.target.files?.[0]);
    }

    const onConfirmCreate:SubmitHandler<CreateCompanyInterface> = async (data:CreateCompanyInterface) => {
        try{
            await onCreate({variables:{
                dto:{
                    name:data.name,
                    creatorId:user.user.id,
                    image:file
                }
            }});

            refetch();
        }catch(err){    
            console.log(err);
        }
    }
    return {onConfirmCreate,onChangeFile,file};
}