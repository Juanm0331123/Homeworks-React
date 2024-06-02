import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./LoginPage";
import { PrivateRoutes } from "./PrivateRoutes";
import { UserRoutes } from "./UserRoutes";

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="/*" element={
                    <PrivateRoutes>
                        <UserRoutes />
                    </PrivateRoutes>
                } />
            </Routes>
        </>
    )
}