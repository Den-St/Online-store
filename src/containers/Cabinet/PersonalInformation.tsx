import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms/user.atom';
import { PersonalInformationComponent } from '../../components/Cabinet/PersonalInformation';
import { usePersonalInformation } from '../../hooks/personal-information.hook';
import {CabinetLayout} from "./CabinetLayout";

export const PersonalInformation = () => {
    const user = useRecoilValue(userState);
    const {isOnEditing,isOpened,onBlurEditing,onBlurOpen,onOpen,onEditing,toggleEditing,toggleOpen,error,onConfirmEditing} = usePersonalInformation();
    return <CabinetLayout>
        <PersonalInformationComponent isOnEditing={isOnEditing} isOpened={isOpened} onBlurEditing={onBlurEditing}
        onBlurOpen={onBlurOpen} onOpen={onOpen} onEditing={onEditing}
        onConfirmEditing={onConfirmEditing} error={error} toggleEditing={toggleEditing}
        toggleOpen={toggleOpen} user={user.user}/>
    </CabinetLayout>
}