import { DetailedCategoryT } from "../../../../types/category.type"
import { CharacteristicItem, CharacteristicsContainer, CharName, CharValue } from "./styles"

type Props = {
    category?:DetailedCategoryT,
    charValues:any
}

export const Characterisctics:React.FC<Props> = ({category,charValues}) => {
    return <CharacteristicsContainer>
        {category && charValues && category?.characteristics.map((char,index) =>
                <CharacteristicItem key={char.id}>
                <CharName>{char.name}</CharName> :
                <CharValue>{char?.values?.find(value => value.id == charValues[index])?.name}</CharValue>
            </CharacteristicItem>
        )}
    </CharacteristicsContainer>
}