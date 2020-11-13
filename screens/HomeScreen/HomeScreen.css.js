import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        flex: 1,
        backgroundColor: '#eeeeee'
    },
    controllerWrapper: {
        flex: 1 / 6,
        flexDirection: 'row',
    },
    functionsWrapper: {
        flex: 5 / 6,

    },
    controllerButtonCall: {
        backgroundColor: '#ffbb00',
        flex: 1,
        borderRadius: 4,
        marginRight: 4
    },
    controllerButtonSettings: {
        backgroundColor: '#d8d8d8',
        flex: 1,
        borderRadius: 4,
        marginLeft: 4
    },
    functionWrapper: {
        flex: 1,
        borderRadius: 4,
        marginBottom: 7,
        overflow: 'hidden',
        position: 'relative'
    },
    functionButtonImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
    },
    buttonTitleTop: {
        position: "absolute",
        top: 17,
        left: 19,
        fontSize: 15,
        fontWeight: "700",
        color: '#fff'
    },
    buttonTitleBottom: {
        position: "absolute",
        bottom: 16,
        left: 19,
        fontSize: 15,
        fontWeight: "700",
        color: '#fff'
    },
    buttonTextBottom: {
        position: "absolute",
        bottom: 18,
        left: 19,
        fontSize: 12,
        fontWeight: '300',
        color: '#fff',
        justifyContent: 'center'
    },
    buttonCallTitle: {
        fontSize: 13,
        fontWeight: '700',
        color: '#fff',
        position: 'absolute',
        bottom: 16,
        left: 19,
    },
    buttonSettingsTitle: {
        fontSize: 13,
        fontWeight: '700',
        position: 'absolute',
        bottom: 16,
        left: 19,
    },
    controllerButtonIcon: {
        position: 'absolute',
        right: 8,
        bottom: 12,
        width: 41,
        height: 41
    },
    circlMessage: {
        backgroundColor: '#00f6ff',
        width: 10,
        height: 10,
        borderRadius: 25,
    }
})
