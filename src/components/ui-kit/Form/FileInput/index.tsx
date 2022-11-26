import { Container, FakeInput, Input } from "./styles"

type Props = {
    onChange:() => void;
}

export const FileInput:React.FC<Props> = ({onChange}) => {
    return <Container>
        <FakeInput>Pick image</FakeInput>
        <Input accept="image/*" onChange={onChange} type={'file'}/>
    </Container>
}