import React from 'react';
import {Container, MainContainer} from "./styles";
import Header from "../Header";

type LayoutProps = {
    children:React.ReactNode
}

const Layout:React.FC<LayoutProps> = ({children}) => {
    return <Container>
        <Header/>
        <MainContainer>
            {children}
        </MainContainer>
    </Container>
};

export default Layout;