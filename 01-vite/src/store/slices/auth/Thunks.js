import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebase/config"

export const registerAuth = (email, password) => {
    return async (dispatch) => {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        if (response) {
            await updateProfile(auth.currentUser, {
                displayName: 'Juan Miguel',
                photoURL: ''
            })

            const { email } = response.user
            dispatch(register({ email }))
        }
    }
}