import React from 'react'
import { TouchableOpacity, Text } from 'react-native';

export default Auth = () => {

    /* const signOut = async () => {
        await auth.signOut()
        setAuth(null)
    }; */

    return (
        <>
            <TouchableOpacity style={{ marginHorizontal: 50, borderRadius: 5, paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#28a745', marginTop: 30 }} ><Text style={{ color: '#fff', textAlign: 'center' }}>Вход</Text></TouchableOpacity>
        </>
    )

}