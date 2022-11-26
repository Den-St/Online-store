import { useState } from 'react';

export const usePreview = () => {
    const [opened,setOpened] = useState(false);

    const open = () => {
        setOpened(true);
    }

    const close = () => {
        setOpened(false);
    }

    return {open,close,opened};
}