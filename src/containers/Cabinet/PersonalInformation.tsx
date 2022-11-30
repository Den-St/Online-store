import Cookies from 'js-cookie';
import { useRecoilState } from 'recoil';
import { userState } from '../../atoms/user.atom';
import { PersonalInformationComponent } from '../../components/Cabinet/PersonalInformation';
import { usePersonalInformation } from '../../hooks/personal-information.hook';
import {CabinetLayout} from "./CabinetLayout";

export const PersonalInformation = () => {
    const [user,setUser] = useRecoilState(userState);
    const {isOnEditing,isOpened,onBlurEditing,onBlurOpen,onOpen,onEditing,toggleEditing,toggleOpen,error,onConfirmEditing} = usePersonalInformation();
    const onQuit = () => {
        Cookies.remove('token');
        setUser({user:{},isLoading:false});
    }

    return <CabinetLayout>
        <PersonalInformationComponent onQuit={onQuit} isOnEditing={isOnEditing} isOpened={isOpened} 
        onBlurEditing={onBlurEditing}
        onBlurOpen={onBlurOpen} onOpen={onOpen} onEditing={onEditing}
        onConfirmEditing={onConfirmEditing} error={error} toggleEditing={toggleEditing}
        toggleOpen={toggleOpen} user={user.user}/>
    </CabinetLayout>
}