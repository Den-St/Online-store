import { MenuItem } from "@mui/material"
import Select from "@mui/material/Select"
import { DetailedCategoryT } from "../../../../types/category.type"
import { CharacteristicHeader, CharacteristicItem, CharacteristicsContainer } from "./styles"
import { LoadingOutlined } from "@ant-design/icons"
import { Spin } from "antd"

type Props = {
    loading:boolean,
    chosenCategory?:DetailedCategoryT,
    chosenCharValues?:any,
    setCharValues:(index:number,id:number) => void,
}

export const Characteristics:React.FC<Props> = ({setCharValues,chosenCharValues,loading,chosenCategory}) => {
    return <>
        {!loading ? <CharacteristicsContainer>
        {chosenCategory?.characteristics.map((char,index) => 
            <CharacteristicItem key={char.id}>
                <CharacteristicHeader>{char.name}</CharacteristicHeader>
                <Select sx={{"height":"40px"}} value={chosenCharValues?.[index]}>
                    {char.values.map(val => <MenuItem onClick={() => setCharValues(index,+val.id)} key={val.id} value={+val.id}>{val.name}</MenuItem>)}
                </Select>
            </CharacteristicItem>)}
        </CharacteristicsContainer> : <Spin indicator={<LoadingOutlined/>}/>}
    </>
}