import { CreateProductComponent } from "../../../components/Cabinet/CreateProduct";
import { useCreateProduct } from "../../../hooks/create-product.hook";
import { useGetMainCategory } from "../../../hooks/get-main-categories.hook";
import { useGetUsersCompanies } from "../../../hooks/get-users-companies.hook"
import { CabinetLayout } from "../CabinetLayout"

export const CreateProduct = () => {
    const {data,loading} = useGetUsersCompanies();
    const {categoriesData,categoriesLoading} = useGetMainCategory();

    const {chosenCompanyId,setChosenCompanyId,chosenCategoryId,
           chosenCategory,chosenCategoryLoading,setCategory,setCharValues,
           chosenCharValues,onConfirmCreatingProduct,error,
           onAddFile,files,images,onRemoveFile,onMakeMain} = useCreateProduct(categoriesData?.getAllMainCategories[0].id);
           

    return <CabinetLayout>
        
        <CreateProductComponent onConfirmCreatingProduct={onConfirmCreatingProduct} error={error?.message}
        setCharValues={setCharValues} chosenCharValues={chosenCharValues}
        chosenCategory={chosenCategory?.getCategoryById} chosenCategoryLoading={chosenCategoryLoading}
        chosenCategoryId={chosenCategoryId} setChosenCategoryId={setCategory} 
        categoriesData={categoriesData?.getAllMainCategories} categoriesLoading={categoriesLoading}
        setChosenCompanyId={setChosenCompanyId} chosenCompanyId={chosenCompanyId}
        companies={data?.getUsersCompanies} companiesLoading={loading} onRemoveFile={onRemoveFile} 
        onAddFile={onAddFile} files={files} images={images} onMakeMain={onMakeMain}/>

    </CabinetLayout>
}