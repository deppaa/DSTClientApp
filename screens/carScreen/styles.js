import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        paddingHorizontal: 6,
        paddingVertical: 10,
        flex: 1,
        backgroundColor: '#eeeeee'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 120,
        marginBottom: 8
    },
    buttonCar: {
        flex: 2 / 3,
        backgroundColor: '#ffba00',
        borderRadius: 4,
        marginRight: 4,
        paddingHorizontal: 19,
        paddingVertical: 16
    },
    buttonMap: {
        flex: 1 / 3,
        backgroundColor: '#d8d8d8',
        borderRadius: 4,
        marginLeft: 4,
        overflow: 'hidden',
    },
    buttonLeft: {
        flex: 1,
        backgroundColor: '#ffba00',
        borderRadius: 4,
        marginRight: 4,
        overflow: 'hidden'
    },
    buttonRight: {
        flex: 1,
        backgroundColor: '#ffba00',
        borderRadius: 4,
        marginLeft: 4,
        overflow: 'hidden'
    },
    bottomTitle: {
        marginTop: 'auto',
        fontSize: 13,
        fontWeight: '700',
        color: '#fff',
        position: 'absolute',
        bottom: 19,
        left: 16,
    },
    bottomTitleBlack: {
        marginTop: 'auto',
        fontSize: 13,
        fontWeight: '700',
        color: '#000',
        position: 'absolute',
        bottom: 19,
        left: 16,
    },
    topTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
        position: 'absolute',
        top: 19,
        left: 16,
    },
    subTitle: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '300',
        position: 'absolute',
        top: 38,
        left: 16,
    },
    messageWrapper: {
        position: 'absolute',
        left: 16,
        bottom: 19,
        flexDirection: 'row',
        alignItems: 'center'
    },
    message: {
        fontSize: 12,
        color: '#fff'
    },
    messageIcon: {
        width: 10,
        height: 10,
        backgroundColor: '#00f6ff',
        borderRadius: 25,
        marginRight: 10
    },
    bg: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    mapIcon: {
        position: 'absolute',
        top: 14,
        left: 18,
    }
})