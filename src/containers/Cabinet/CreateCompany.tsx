import {CreateCompanyComponent} from "../../components/Cabinet/CreateCompany"
import { CabinetLayout } from "./CabinetLayout"
import { useGetUsersCompanies } from "../../hooks/get-users-companies.hook"
import { useCreateCompany } from "../../hooks/create-company.hook";
import { useState } from "react";

export const CreateCompany = () => {
    const {data,loading,refetch} = useGetUsersCompanies();
    const {onConfirmCreate,onChangeFile,file} = useCreateCompany(refetch);
    const [selectedFileUrl,setUrl] = useState<string | undefined>();

    return <CabinetLayout>
        <CreateCompanyComponent selectedFileUrl={selectedFileUrl} setUrl={setUrl} file={file} onChangeFile={onChangeFile} onConfirmCreate={onConfirmCreate} companies={data?.getUsersCompanies} loading={loading} />
    </CabinetLayout>
}