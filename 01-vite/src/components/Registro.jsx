import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { registerAuth } from "../store/slices/auth/Thunks";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { logout, register } from "../store/slices/auth/AuthSlice";

export const Registro = () => {
    const dispatch = useDispatch()

    const { email, password, onInputChange, formState } = useForm({
        email: 'juanmiguelleon@gmail.com',
        password: '123456'
    })

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState);
        dispatch(registerAuth(email, password))
    }

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (!user) return dispatch(logout());

            dispatch(register({ email: user.email }))
        })
    }, [])

    return (
        <>
            <h1>Registro</h1>
            <hr />
            <form onSubmit={(event) => onSubmit(event)}>
                <input type="email" name="email" onChange={(event) => onInputChange(event)} value={email} />
                <input type="password" name="password" onChange={(event) => onInputChange(event)} value={password} />

                <button type="submit"> Registro </button>
            </form>
        </>
    )
}