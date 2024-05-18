import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { login, logout, register } from "./AuthSlice";
import { auth } from "../../../firebase/config"

export const registerAuth = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            if (response) {
                await updateProfile(auth.currentUser, {
                    displayName: 'Juan Miguel',
                    photoURL: ''
                })

                const { email } = response.user
                dispatch(register({ email }))
            }
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                console.log('El correo electrónico ya está en uso.');
            } else {
                console.log(error.message);
            }
        }
    }
}

export const loginAuth = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            if (response && response.user) {
                const { email } = response.user;
                dispatch(login({ email }));
            } else {
                console.log('No se pudo iniciar sesión. Verifique su correo electrónico y contraseña.');
            }
        } catch (error) {
            console.log(error.message);
            throw error;
        }
    }
}

export const loginWithGoogle = () => {
    return async (dispatch) => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const { email } = result.user;
            dispatch(login({ email }));
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const logoutAuth = () => async dispatch => {
    try {
        await signOut(auth);
        dispatch(logout());
    } catch (error) {
        console.error("Error al cerrar sesión", error);
    }
};

export const checkUserAuth = () => async dispatch => {
    onAuthStateChanged(auth, (user) => {
        if (user && user.uid) {
            const serializableUser = {
                uid: user.uid,
                email: user.email,
            };
            dispatch(login(serializableUser));
        } else {
            dispatch(logout());
        }
    });
};