import { LinkT } from "../types/link.type"

export const cabinetRoutes = {
    //cabinet
    personalInformation: '/cabinet/personal-information/',
    wishlist: '/cabinet/wishlist/',
    recentlyViewed: '/cabinet/recently-viewed/',
    orders: '/cabinet/orders/',
    createCompany:'/cabinet/create-company/',
    cart:'/cart/',
    createProduct:'/cabinet/create-product/'
}

export const cabinetLinks:LinkT[] = [
    {to: cabinetRoutes.wishlist, label:'Wish list',svgName:'favorite'},
    {to: cabinetRoutes.recentlyViewed, label:'Recently viewed',svgName:'eye'},
    {to: cabinetRoutes.createCompany, label:'Create company',svgName:'briefcase'},
    {to: cabinetRoutes.orders, label:'Ordered products',svgName:'orders'},
    {to: cabinetRoutes.createProduct, label:'Create product',svgName:'product'},
    {to: cabinetRoutes.cart, label:'Cart',svgName:'cart'},
    {to: cabinetRoutes.personalInformation, label:'Personal information',svgName:'user'},
]

export const routes = {
    product:'/product/:id',
    categories:'/categories/:id',
    productsByCategory:"/products/:id",
    cart:"/cart",
    receipts:"/receipts",
    search:"/search/"
}