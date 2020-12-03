import React from 'react'
import { TouchableOpacity, Text } from 'react-native';

export default Auth = () => {

    /* const signOut = async () => {
        await auth.signOut()
        setAuth(null)
    }; */

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
    }; */

    return (
        <>
            <TouchableOpacity style={{ marginHorizontal: 50, borderRadius: 5, paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#28a745', marginTop: 30 }} ><Text style={{ color: '#fff', textAlign: 'center' }}>Вход</Text></TouchableOpacity>
        </>
    )

}