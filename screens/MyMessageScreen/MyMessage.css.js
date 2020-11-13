import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        flex: 1,
        backgroundColor: '#eeeeee'
    },
    item: {
        paddingVertical: 19,
        borderBottomWidth: 1,
        borderBottomColor: '#dfdfdf'
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: '700'
    },
    itemTime: {
        color: '#646464',
        fontSize: 12,
        paddingLeft: 8
    },
    itemSubTitle: {
        fontSize: 14,
        marginTop: 11,
        color: '#646464'
    },
})
