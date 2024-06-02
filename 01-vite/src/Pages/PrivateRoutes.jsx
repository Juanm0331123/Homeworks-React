import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../Components/Context/UserContext";

export const PrivateRoutes = ({ children }) => {
    const { user } = useContext(UserContext);

    const { pathName, search } = useLocation();
    localStorage.setItem('lastPath', `${pathName}${search}`);

    return user ? children : <> Error 403 </>;
}