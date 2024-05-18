import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAuth, logoutAuth, checkUserAuth } from '../store/slices/auth/Thunks';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [loginError, setLoginError] = useState(null);
    const user = useSelector(state => state.auth ? state.auth.user : null);
    const [logoutSuccess, setLogoutSuccess] = useState(false);
    const dispatch = useDispatch();

    const authStatus = useSelector(state => state.auth ? state.auth.status : null);
    const isAuth = useMemo(() => authStatus === 'authenticated', [authStatus]);

    useEffect(() => {
        if (!user) {
            dispatch(checkUserAuth());
        }
    }, [user, dispatch]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (user) {
            alert('Ya tienes una sesión activa');
            return;
        }
        try {
            await dispatch(loginAuth(email, password));
            setLoginSuccess(true);
            setLoginError(null);
        } catch (error) {
            console.log(error);
            setLoginSuccess(false);
            setLoginError('Las credenciales no son correctas');
        }
    }

    const handleLogout = async () => {
        try {
            await dispatch(logoutAuth());
            setLogoutSuccess(true);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit" disabled={isAuth}>Iniciar sesión</button>
            {loginSuccess && (
                <>
                    <p>Inicio de sesión exitoso</p>
                    <button onClick={handleLogout}>Cerrar sesión</button>
                </>
            )}
            {logoutSuccess && <p>Cierre de sesión exitoso</p>}
            {loginError && <p>{loginError}</p>}
        </form>
    );
}