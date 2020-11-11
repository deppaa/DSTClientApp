import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 6,
        paddingVertical: 10,
        flex: 1,
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
        paddingHorizontal: 19,
        paddingVertical: 16
    },
    buttonCarMessage: {
        flex: 1 / 2,
        backgroundColor: '#ffba00',
        borderRadius: 4,
        marginRight: 4,
        paddingHorizontal: 19,
        paddingVertical: 16
    },
    buttonMapNewMessage: {
        flex: 1 / 2,
        backgroundColor: '#d8d8d8',
        borderRadius: 4,
        marginLeft: 4,
        paddingHorizontal: 19,
        paddingVertical: 16
    },
    buttonCarPassport: {
        flex: 1,
        backgroundColor: '#ffba00',
        borderRadius: 4,
        marginRight: 4,
        paddingHorizontal: 19,
        paddingVertical: 16
    },
    buttonCarWork: {
        flex: 1,
        backgroundColor: '#d8d8d8',
        borderRadius: 4,
        marginRight: 4,
        marginLeft: 4,
        paddingHorizontal: 19,
        paddingVertical: 16
    },
    buttonCarTO: {
        flex: 1,
        backgroundColor: '#d8d8d8',
        borderRadius: 4,
        marginLeft: 4,
        paddingHorizontal: 19,
        paddingVertical: 16
    },
    bottomTitle: {
        marginTop: 'auto',
        fontSize: 16,
        fontWeight: '700',
        color: '#fff'
    },
    bottomTitleBlack: {
        marginTop: 'auto',
        fontSize: 16,
        fontWeight: '700',
        color: '#000'
    },
    topTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff'
    },
    subTitle: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '300',
        marginTop: 7,
    },
})