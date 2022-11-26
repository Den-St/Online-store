import { LoadingOutlined } from "@ant-design/icons"
import { Spin } from "antd"
import { CompanyT } from "../../../../types/company.type"
import {CompaniesContainer,Company,LogoImage,CompanySceleton} from "./styles"

type Props = {
    loading:boolean,
    companies?:CompanyT[],
    chosen?:number,
    choose?:(id:number) => void
}

export const Companies:React.FC<Props> = ({choose,loading,companies,chosen}) => {
    return <CompaniesContainer>
        {!loading ? companies?.map(company => <Company onClick={() => choose && choose(company.id)} $isChosen={chosen === company.id} key={company.id}><LogoImage src={company.image.url} />{company.name}</Company>) : <Spin indicator={<LoadingOutlined/>}/>}
  </CompaniesContainer>
}