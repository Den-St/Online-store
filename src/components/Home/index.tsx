import React from 'react';
import { Categories } from '../../containers/Home/Categories';
import { Main } from '../../containers/Home/Main';
import {Container} from "./styles";

const HomeComponent = () => {
    return <Container>
        <Categories/>
        <Main/>
    </Container>
};

export default HomeComponent;