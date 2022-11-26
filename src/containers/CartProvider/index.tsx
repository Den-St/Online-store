import React from "react"
import { useCartProvider } from "../../hooks/cartProvider.hook"


export const CartProvider:React.FC<{children:React.ReactNode}> = ({children}) => {
    useCartProvider();
    
    return <>{children}</>
}