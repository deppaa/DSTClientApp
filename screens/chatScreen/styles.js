import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
    },
    item: {
        overflow: 'hidden',
        backgroundColor: "#fff",
        marginVertical: 16,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        maxWidth: '75%',
        marginRight: 'auto'
    },
    itemSend: {
        overflow: 'hidden',
        backgroundColor: "#ffba00",
        marginVertical: 16,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        maxWidth: '75%',
        marginLeft: 'auto'
    },
    timeWrapper: {
        flexDirection: 'row',
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 14,
        bottom: 0,
        right: 0
    },
    time: {
        fontSize: 14,
        marginLeft: 'auto',
        color: '#646464',
        marginRight: 10
    },
    message: {
        fontSize: 16,
        paddingRight: 10,
        paddingLeft: 14,
        paddingTop: 13,
    },
    photoWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%'
    },
    formWrapper: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingTop: 14,
        paddingBottom: 15,
        backgroundColor: '#eeeeee',
    },
    input: {
        flex: 1,
        minHeight: 38,
        paddingVertical: 10,
        width: '100%',
        backgroundColor: '#eeeeee',

    },
    btn: {
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    imageWrapper: {
        paddingBottom: 10,
        flexDirection: 'row',
        paddingHorizontal: 11,
        backgroundColor: '#eeeeee',
        borderBottomColor: "#c2c2c2",
        borderBottomWidth: 1,
    },
    sendImage: {
        width: 60,
        height: 60,
        marginHorizontal: 5
    },
    formControl: {
        paddingHorizontal: 16
    },
    closeBtn: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 5
    },
    spinerWrapper: {
        position: 'absolute',
        bottom: 0,
        left: 5,
        zIndex: 1,
        backgroundColor: '#000',
        width: 60,
        height: 60,
        opacity: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: "#c2c2c2",
        borderBottomWidth: 1,
    }
})