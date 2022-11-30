import React, {useState} from 'react';
import SigningComponent from "../../components/Signing";

type SigningProps = {
    closeModal:() => void;
    authType:"Login" | "Register";
}

const Signing:React.FC<SigningProps> = ({closeModal,authType}) => {
    const [initialAuthType,setAuthType] = useState<"Login" | "Register">(authType || "Login");
    const onLogin = () => setAuthType("Login");
    const onRegister = () => setAuthType("Register");
    return <SigningComponent closeModal={closeModal} authType={initialAuthType} onLogin={onLogin} onRegister={onRegister}/>
};

export default Signing;