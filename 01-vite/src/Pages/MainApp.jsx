import { NavLink, Route, Routes } from "react-router-dom";
import { ProductPage } from "./ProductPage";

export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <hr />

            <NavLink to="products/3"> Product by ID</NavLink>
            <Routes>
                <Route path="products">
                    <Route path=":id" element={<ProductPage />} />
                </Route>
            </Routes>
        </>
    )
}