import React, { useEffect, useState } from 'react'
import {
    TouchableOpacity,
    Modal,
    Dimensions,
    View
} from 'react-native'
import { Camera } from 'expo-camera';

export default useCamera = () => {
    useEffect(async () => {
        const { status } = await Camera.requestPermissionsAsync();
        console.log(status)
        if (status !== 'granted') {
            alert('Извините, но нам нужны разрешения на доступ к камере, чтобы это сработало!');
        }
    }, [])
    const width = Dimensions.get('window').width
    const [cameraRef, setCameraRef] = useState(null)

    const PhotoCamera = ({ visible }) => {
        return (
            <Modal visible={visible} transparent={true} animationType="slide">
                <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#000' }}>
                    <Camera style={{ width: width, height: width / 9 * 16 }} ratio="16:9" type={Camera.Constants.Type.back} ref={ref => {
                        setCameraRef(ref);
                    }}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                justifyContent: 'flex-end',
                                padding: 30
                            }}
                        >
                            <TouchableOpacity style={{ alignSelf: 'center' }} onPress={async () => {
                                if (cameraRef) {
                                    let photo = await cameraRef.takePictureAsync()
                                    console.log('photo', photo);
                                }
                            }}>
                                <View
                                    style={{
                                        borderWidth: 2,
                                        borderRadius: 50,
                                        borderColor: 'white',
                                        height: 80,
                                        width: 80,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <View
                                        style={{
                                            borderWidth: 2,
                                            borderRadius: 50,
                                            borderColor: 'white',
                                            height: 70,
                                            width: 70,
                                            backgroundColor: 'white'
                                        }}
                                    >
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            </Modal>
        )
    }

    return {
        PhotoCamera
    }
}