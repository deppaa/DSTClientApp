import { AUTH } from "./types";

export const authUser = (data) => {
    return {
        type: AUTH,
        payload: data
    }
}

export const authFirebase = () => (dispatch, getState) => {
    /* const createUser = async () => {
        try {
            const email = "shageev_rr1@tm10.ru"
            const password = "qwerty"
            const result = await auth.createUserWithEmailAndPassword(email, password);
            return result
        } catch (error) {
            return error.code;
        }
    }

    const signIn = async () => {
        try {
            const email = "shageev_rr1@tm10.ru"
            const password = "qwerty"
            const result = await auth.signInWithEmailAndPassword(email, password);
            return result
        } catch (error) {
            return error.code;
        }
    };

    const respons = createUser()

    if (respons == 'auth/email-already-in-use') {
        respons = signIn()
    } */

    dispatch(authUser(true))
}