import { useContext } from "react";
import { UserContext } from "./Context/UserContext";

export const Child2 = () => {
    const { setUser } = useContext(UserContext);

    const onLogin = () => {
        setUser({
            id: 313,
            name: "Juan Miguel",
            email: "juanmiguelleon43@gmail.com"
        })
    }

    return (
        <>
            <div>Child Component 2</div>
            <button className="btn btn-primary" onClick={() => onLogin()}>Set User Info</button>
        </>
    )
}