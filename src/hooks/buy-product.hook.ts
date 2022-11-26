import { useState } from 'react';
export const useBuyProduct = () => {
    const [numberOfProducts,setNumberOfProducts] = useState(1);
    
    const plusNumberOfProducts = () => {
        setNumberOfProducts(prev => ++prev);
    }

    const minusNumberOfProducts = () => {
        setNumberOfProducts(prev => --prev);
    }

    const buy = () =>{}

    return {}
}