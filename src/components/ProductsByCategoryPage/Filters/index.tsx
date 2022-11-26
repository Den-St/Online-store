import { DetailedCategoryT } from "../../../types/category.type"
import { CharacteristicContainer, CharacteristicHeader, CheckBox, Container, Divider, ValueItemContainer, ValueItemTitle, ValuesContainer } from "./styles"

type Props = {
    category?:DetailedCategoryT,
    loading:boolean,
    onChangeChars:(value:string) => void
}

export const FiltersComponent:React.FC<Props> = ({category,onChangeChars,loading}) => {
    return <Container>
        
        {category?.characteristics.map(char =>  <CharacteristicContainer key={char.id}>
            <CharacteristicHeader>
                {char.name}
            </CharacteristicHeader>
            {char.values.map(value => <ValuesContainer key={value.id}>
                <ValueItemContainer>
                    <CheckBox onChange={() => onChangeChars(value.value)} type={"checkbox"}/>
                    <ValueItemTitle>{value.name}</ValueItemTitle>
                </ValueItemContainer>
            </ValuesContainer>)}
            <Divider/>
        </CharacteristicContainer>)}
    </Container>
}