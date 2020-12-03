import { StyleSheet } from 'react-native'

export default StyleSheet.create({
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
        fontWeight: '400',
        color: '#000'
    },
    itemSubTitle: {
        fontSize: 14,
        marginTop: 11,
        color: '#646464'
    },
    searchWrapper: {
        paddingTop: 16,
        paddingBottom: 5
    },
    searchInput: {
        backgroundColor: '#fff',
        height: 39,
        borderRadius: 4,
        paddingLeft: 12,
        paddingRight: 40
    },
    serchButton: {
        position: 'absolute',
        width: 39,
        height: 39,
        top: 16,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
