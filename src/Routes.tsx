import React from "react";
import Home from "./containers/Home";
import {Route, Routes} from "react-router-dom";
import {cabinetRoutes, routes} from "./constants/routes";
import {PersonalInformation} from "./containers/Cabinet/PersonalInformation";
import {WhishList} from "./containers/Cabinet/WhishList";
import {RecentlyViewed} from "./containers/Cabinet/RecentlyViewed";
import {PrivateRouteGuard} from "./containers/PrivateRouteGuard";
import { CreateCompany } from "./containers/Cabinet/CreateCompany";
import {Ordered} from "./containers/Cabinet/Ordered";
import { CreateProduct } from "./containers/Cabinet/CreateProduct/CreateProduct";
import { MainCategories } from "./containers/MainCategoriesPage";
import { ProductsByCategoryPage } from "./containers/ProductsByCategoryPage";
import { ProductDetailed } from "./containers/ProductDetailed";
import { Cart } from "./containers/Cart";
import { SearchedProducts } from "./containers/SearchedProducts";

const PublicRoutes = [
    <Route key={'/'} path={'/'} element={<Home/>}/>,
    <Route key={routes.categories} path={routes.categories} element={<MainCategories/>}/>,
    <Route key={routes.productsByCategory} path={routes.productsByCategory} element={<ProductsByCategoryPage/>}/>,
    <Route key={routes.product} path={routes.product} element={<ProductDetailed/>} />,
    <Route key={routes.search} path={routes.search} element={<SearchedProducts/>} />
]

const PrivateRoutes = [
    //cabinet
    <Route key={cabinetRoutes.personalInformation} path={cabinetRoutes.personalInformation} element={<PrivateRouteGuard><PersonalInformation/></PrivateRouteGuard>}/>,
    <Route key={cabinetRoutes.wishlist} path={cabinetRoutes.wishlist} element={<PrivateRouteGuard><WhishList/></PrivateRouteGuard>}/>,
    <Route key={cabinetRoutes.recentlyViewed} path={cabinetRoutes.recentlyViewed} element={<PrivateRouteGuard><RecentlyViewed/></PrivateRouteGuard>}/>,
    <Route key={cabinetRoutes.createCompany} path={cabinetRoutes.createCompany} element={<PrivateRouteGuard><CreateCompany/></PrivateRouteGuard>}/>,
    <Route key={cabinetRoutes.orders} path={cabinetRoutes.orders} element={<PrivateRouteGuard><Ordered/></PrivateRouteGuard>}/>,
    <Route key={cabinetRoutes.createProduct} path={cabinetRoutes.createProduct} element={<PrivateRouteGuard><CreateProduct/></PrivateRouteGuard>}/>,
    <Route key={routes.cart} path={routes.cart} element={<PrivateRouteGuard><Cart/></PrivateRouteGuard>}/>,
]

export const RoutesSwitch = () => {
    return <Routes>{PublicRoutes}{PrivateRoutes}</Routes>
}