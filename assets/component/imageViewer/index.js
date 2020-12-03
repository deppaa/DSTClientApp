import React, { useRef, useState } from 'react'
import { Modal, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import { AntDesign } from '@expo/vector-icons';

const ImageViewer = () => {

    const [viewed, setViewed] = useState(false)
    const [init, setInit] = useState(0)
    const [data, setData] = useState([])

    const OpenViewer = () => {
        setViewed(true)
    }

    const StartItem = (i) => {
        setInit(i)
    }

    const SetData = (data) => {
        setData(data)
    }

    const ImageViewerPopUp = () => {
        const CloseBtn = () => (<TouchableOpacity onPress={() => { setViewed(false) }} style={{ position: 'absolute', zIndex: 1, right: 5, top: 15 }}><AntDesign name="closecircle" size={30} color="#fff" /></TouchableOpacity>)

        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={viewed}
            >
                <CloseBtn />
                <Swiper loop={false} style={styles.wrapper} showsButtons={false} index={init}>
                    {
                        data.map((item, i) => (
                            <Image key={i} style={styles.slide} source={{ uri: item.url === undefined ? item : item.url }} />
                        ))
                    }
                </Swiper>
            </Modal>
        )
    }


    const styles = StyleSheet.create({
        wrapper: {
            backgroundColor: '#000'
        },
        slide: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            resizeMode: 'contain',
        },
    })

    return {
        OpenViewer,
        StartItem,
        ImageViewerPopUp,
        SetData
    }
}

export default ImageViewer