import React from 'react';
import {ErrorsContainer} from "./styles";
import Error from "./Error";

type ErrorProps = {
    errors?:any;
}

const Errors:React.FC<ErrorProps> = ({errors}) => {
    console.log(errors);
    return <ErrorsContainer>
        {errors && Object.keys(errors).map(field => <Error message={errors[field].message}/>)}
    </ErrorsContainer>
};

export default Errors;