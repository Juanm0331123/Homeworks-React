import { NavLink, Route, Routes } from "react-router-dom"
import { ProductPage } from "./ProductPage"
import { AboutPage } from "./AboutPage"

export const UserRoutes = () => {
    return (
        <>
            <NavLink to="/"> Index </NavLink>
            <NavLink to="about"> About </NavLink>
            <NavLink to="products"> Products </NavLink>
            <NavLink to="search"> Search </NavLink>
            <NavLink to="login"> Login </NavLink>

            <Routes>
                <Route path="products" element={<ProductPage />} />
                <Route path="about" element={<AboutPage />} />
                </Routes>
        </>
    )
}