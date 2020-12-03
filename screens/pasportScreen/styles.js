import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
        paddingHorizontal: 16,
        paddingVertical: 10
    },
    name: {
        fontSize: 16,
        fontWeight: '700',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 22,
        alignItems: 'center',
        borderBottomColor: '#dfdfdf',
        borderBottomWidth: 1,
        width: '100%'
    }
})