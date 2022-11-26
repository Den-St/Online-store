import { useState } from 'react';
export const useChoosePhoto = () => {
    const [chosenPhotoIndex,setIndex] = useState(0);

    const nextPhoto = () => {
        setIndex(prev => ++prev);
    }
    const prevPhoto = () => {
        setIndex(prev => --prev);
    }

    const choosePhotoIndex = (index:number) => {
        setIndex(index);
    }

    return {choosePhotoIndex,nextPhoto,prevPhoto,chosenPhotoIndex};
}