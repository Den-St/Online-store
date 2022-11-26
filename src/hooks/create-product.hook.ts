import { useMutation } from '@apollo/client';
import { SubmitHandler } from 'react-hook-form';
import { GetCategoryById } from './../queries/get-category-by-id.query';
import { useQuery } from '@apollo/client';
import { useState } from "react";
import { GetCategoryReq,CreateProductInterface, CreateProductReq } from '../types/product.type';
import { CreateProduct } from '../queries/create-product.query';

export const useCreateProduct = (firstCategoryId?:number) => {

    const [chosenCompanyId,setChosenCompanyId] = useState<number>(0);
    const [chosenCategoryId,setChosenCategoryId] = useState<number>(firstCategoryId || 0);
    const [chosenCharValues,setChosenCharValues] = useState({});
    const [files,setFiles] = useState<File[]>([]);
    const [images,setImages] = useState<string[]>([]);

    const {data,loading,refetch} = useQuery<GetCategoryReq,{id:number}>(GetCategoryById,{variables:{
        id:Number(chosenCategoryId),
    },skip:!chosenCategoryId});

    const [onConfirm,{error}] = useMutation<undefined,CreateProductReq>(CreateProduct);
    


    const onAddFile = (e?:React.ChangeEvent<HTMLInputElement>) => {
        if(files.length >= 5 ||
           files.find(file => file.size === e?.target.files?.[0].size ||
           file.name === e?.target.files?.[0].name)) return;

        const file = e?.target.files?.[0];
        if(file ) {
            setFiles(prev => [...prev,file])

            const fileReader = new FileReader();
            fileReader.onloadend = () => {
                setImages(prev => [...prev,fileReader.result as string]);
            }
            fileReader.readAsDataURL(file);
        }
    }

    const onRemoveFile = (index:number) => {
        setFiles(prev => prev.filter((el,i) => index !== i));
        setImages(prev => prev.filter((el,i) => index !== i));
    }

    const onMakeMain = (index:number) => {
        setFiles(prev => [prev[index],...prev.filter((file,i) => i !== index)]);
        setImages(prev => [prev[index],...prev.filter((img,i) => i !== index)]);
    }

    const onConfirmCreatingProduct:SubmitHandler<CreateProductInterface> = async (productData:CreateProductInterface) => {
        try{
            await onConfirm({variables:{
                dto:{
                    ...productData,
                    amountInStorage:Number(productData.amountInStorage),
                    price:Number(productData.price),
                    valuesIds:Object.values(chosenCharValues),
                    sellerId:Number(chosenCompanyId),
                    categoryId:Number(chosenCategoryId),
                    images:files
                }
            }})
        }catch(err){
            console.log(err)
        }
    }

    const setCharValues = (i:number,id:number) => {
        setChosenCharValues(prev => ({...prev,[i]: id}));
    }

    const setCategory = async (id:number) => {
        try{
            setChosenCategoryId(id);
            await refetch({id:Number(id)});
        }catch(err){
            console.log(err);
        }
    }
    
    return {chosenCompanyId,setChosenCompanyId,chosenCategoryId,setCategory,
            chosenCategory:data,chosenCategoryLoading:loading,setCharValues,
            chosenCharValues,onConfirmCreatingProduct,error,onAddFile,
            onRemoveFile,files,images,onMakeMain};
}