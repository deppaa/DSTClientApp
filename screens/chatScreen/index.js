import React, { useEffect, useState } from 'react'
import {
    Container,
    View,
    Input,
    Header,
    Left,
    Button,
    Icon,
    Body,
    Title,
    Right,
    Toast,
    Spinner
} from 'native-base';
import {
    TouchableOpacity,
    Text,
    Image,
    FlatList,
    Modal,
    Dimensions
} from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { AntDesign } from '@expo/vector-icons';
import Svg, { Path, Circle } from 'react-native-svg'
import firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker'
import { Camera } from 'expo-camera';
import styles from './styles'

import { AutoScrollFlatList } from 'react-native-autoscroll-flatlist'
import ImageViewer from '../../assets/component/imageViewer';

export default ChatScreen = ({ route, navigation }) => {

    const {
        OpenViewer,
        StartItem,
        ImageViewerPopUp,
        SetData
    } = ImageViewer()
    const width = Dimensions.get('window').width

    const [message, setMessage] = useState('');
    const [data, setData] = useState([])
    const [messageHeight, setMessageHeight] = useState(0)
    const [image, setImage] = useState([])
    const [spiner, setSpiner] = useState(false)
    const [cameraVState, setCameraVState] = useState(false)

    const [cameraRef, setCameraRef] = useState(null)

    const { chatId } = route.params

    const auth = firebase.auth()

    const getRef = () => {
        return firebase.database().ref();
    }

    const chatRef = getRef().child(`${auth.currentUser.uid}/${chatId}/message`)

    useEffect(() => {
        chatRef.on("value", snap => {
            setData([])
            snap.forEach((item) => {
                const dt = new Date(UTSZone(item.val().time))
                setData(data => [...data, {
                    id: item.key,
                    message: item.val().message,
                    time: dt.getUTCHours() + ':' + dt.getMinutes(),
                    user_id: item.val().user_id,
                    file: item.val().file,
                    read: true
                }])
            })
        })
    }, [])

    const UTSZone = (time) => {
        const date = new Date();
        return new Date(`${time}${date.getTimezoneOffset() / 60}00`).toUTCString()
    }

    const getFile = path => new Promise(resolve => {
        const response = fetch(path)
        resolve(response)
    })

    const getBlob = file => new Promise(resolve => {
        const blob = file.blob()
        resolve(blob)
    })

    const saveFoto = (blob, path) => new Promise((resolve, reject) => {
        const fileName = path.replace(/^.*[\\/]/, '')

        const ref = firebase.storage().ref()
        const task = ref.child(`/image/${chatId}/${fileName}`).put(blob)

        task.on('state_changed', function (snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log(progress)
        }, function (error) {
            reject(error)
        }, function () {
            task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                resolve(downloadURL)
            });
        });
    })

    const sendFoto = item => new Promise((resolve, reject) => {
        getFile(item.url).then(file => {
            return getBlob(file)
        }).then(blob => {
            return saveFoto(blob, item.url)
        }).then(url => {
            resolve(url)
        }).catch(error => {
            reject(error)
        })
    })

    const sendFotos = arrImage => new Promise((resolve, reject) => {
        Promise.all(arrImage.map(sendFoto)).then(url => {
            resolve(url)
        }).catch(error => {
            reject(error)
        })
    })

    const sendMessage = arrFotosLink => new Promise((resolve) => {
        const date = new Date();
        let file = {}
        if (arrFotosLink != undefined) {
            file = {
                'isset': true,
                'count': arrFotosLink.length,
                'url': arrFotosLink
            }
        } else {
            file = {
                'isset': false,
                'count': 0,
            }
        }
        chatRef.push({
            id: Math.floor(Math.random() * 100) * Math.random() * 100,
            "message": message,
            "time": date.toUTCString(),
            "user_id": auth.currentUser.uid,
            'file': file
        })

        resolve(true)
    })

    const send = () => {

        if (image.length) {
            setSpiner(true)
            sendFotos(image).then(arrUrl => {
                return sendMessage(arrUrl)
            }).then(result => {
                if (result) {
                    setMessage('')
                    setImage([])
                    setSpiner(false)
                }
            })
        } else {
            setSpiner(true)
            sendMessage().then(result => {
                if (result) {
                    setMessage('')
                    setSpiner(false)
                }
            })
        }
    }

    const pickerFile = async () => {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        console.log(status)
        if (status !== 'granted') {
            alert('Извините, но нам нужны разрешения на доступ к галерее, чтобы это сработало!');
        }
        if (image.length < 6) {
            try {
                const result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    quality: 1
                });

                if (!result.cancelled) {
                    setImage([...image, {
                        id: Math.floor(Math.random() * 100) * Math.random() * 100,
                        url: result.uri
                    }])
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            Toast.show({
                text: 'Для загрузки доступно не более 6 изображений',
                type: "warning",
                duration: 3000
            })
        }
    }

    const makeFoto = async () => {
        const { status } = await Camera.requestPermissionsAsync();
        if (status !== 'granted') {
            alert('Извините, но нам нужны разрешения на доступ к камере, чтобы это сработало!');
        }
        setCameraVState(true)
    }

    const Done = ({ color, height, width, show }) => {
        if (show) {
            return (
                <Svg height={height} width={width} fill={color} viewBox="0 0 22 24">
                    <Path d="M0 0h24v24H0z" fill="none"></Path>
                    <Path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></Path>
                </Svg>
            )
        } else {
            return <></>
        }
    }

    const openImage = (i, data) => {
        SetData(data)
        StartItem(i)
        OpenViewer()
    }

    const ImageGrid = (count, img) => {
        switch (count) {
            case 1:
                return (
                    <Grid style={{ width: '100%', height: 200 }}>
                        <Col>
                            <Row>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => { openImage(0, img) }}>
                                    <Image style={{ flex: 1, resizeMode: 'cover' }} source={{ uri: img[0] }} />
                                </TouchableOpacity>
                            </Row>
                        </Col>
                    </Grid>
                )
                break;

            case 2:
                return (
                    <Grid style={{ width: '100%', height: 200 }}>
                        <Col>
                            <Row>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => { openImage(0, img) }}>
                                    <Image style={{ flex: 1, resizeMode: 'cover' }} source={{ uri: img[0] }} />
                                </TouchableOpacity>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => { openImage(1, img) }}>
                                    <Image style={{ flex: 1, resizeMode: 'cover' }} source={{ uri: img[1] }} />
                                </TouchableOpacity>
                            </Row>
                        </Col>
                    </Grid>
                )

                break;

            case 3:
                return (
                    <Grid style={{ width: '100%', height: 200 }}>
                        <Col>
                            <Row>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => { openImage(0, img) }}>
                                    <Image style={{ flex: 1, resizeMode: 'cover' }} source={{ uri: img[0] }} />
                                </TouchableOpacity>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => { openImage(1, img) }}>
                                    <Image style={{ flex: 1, resizeMode: 'cover' }} source={{ uri: img[1] }} />
                                </TouchableOpacity>
                            </Row>
                            <Row>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => { openImage(2, img) }}>
                                    <Image style={{ flex: 1, resizeMode: 'cover' }} source={{ uri: img[2] }} />
                                </TouchableOpacity>
                            </Row>
                        </Col>
                    </Grid>
                )

                break;

            case 4:
                return (
                    <Grid style={{ width: '100%', height: 200 }}>
                        <Col>
                            <Row>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => { openImage(0, img) }}>
                                    <Image style={{ flex: 1, resizeMode: 'cover' }} source={{ uri: img[0] }} />
                                </TouchableOpacity>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => { openImage(1, img) }}>
                                    <Image style={{ flex: 1, resizeMode: 'cover' }} source={{ uri: img[1] }} />
                                </TouchableOpacity>
                            </Row>
                            <Row>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => { openImage(2, img) }}>
                                    <Image style={{ flex: 1, resizeMode: 'cover' }} source={{ uri: img[2] }} />
                                </TouchableOpacity>
                            </Row>
                            <Row>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => { openImage(3, img) }}>
                                    <Image style={{ flex: 1, resizeMode: 'cover' }} source={{ uri: img[3] }} />
                                </TouchableOpacity>
                            </Row>
                        </Col>
                    </Grid>
                )
                break;

            case 5:
                return (
                    <Grid style={{ width: '100%', height: 200 }}>
                        <Col>
                            <Row>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => { openImage(0, img) }}>
                                    <Image style={{ flex: 1, resizeMode: 'cover' }} source={{ uri: img[0] }} />
                                </TouchableOpacity>
                            </Row>
                            <Row>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => { openImage(1, img) }}>
                                    <Image style={{ flex: 1, resizeMode: 'cover' }} source={{ uri: img[1] }} />
                                </TouchableOpacity>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => { openImage(2, img) }}>
                                    <Image style={{ flex: 1, resizeMode: 'cover' }} source={{ uri: img[2] }} />
                                </TouchableOpacity>
                            </Row>
                            <Row>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => { openImage(3, img) }}>
                                    <Image style={{ flex: 1, resizeMode: 'cover' }} source={{ uri: img[3] }} />
                                </TouchableOpacity>
                            </Row>
                            <Row>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => { openImage(4, img) }}>
                                    <Image style={{ flex: 1, resizeMode: 'cover' }} source={{ uri: img[4] }} />
                                </TouchableOpacity>
                            </Row>
                        </Col>
                    </Grid>
                )
                break;

            case 6:
                return (
                    <Grid style={{ width: '100%', height: 200 }}>
                        <Row>
                            <Col style={{ width: '60%' }}>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => { openImage(0, img) }}>
                                    <Image style={{ flex: 1, resizeMode: 'cover' }} source={{ uri: img[0] }} />
                                </TouchableOpacity>
                            </Col>
                            <Col style={{ width: '40%' }}>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => { openImage(1, img) }}>
                                    <Image style={{ flex: 1, resizeMode: 'cover' }} source={{ uri: img[1] }} />
                                </TouchableOpacity>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => { openImage(2, img) }}>
                                    <Image style={{ flex: 1, resizeMode: 'cover' }} source={{ uri: img[2] }} />
                                </TouchableOpacity>
                            </Col>
                            <Col>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => { openImage(3, img) }}>
                                    <Image style={{ flex: 1, resizeMode: 'cover' }} source={{ uri: img[3] }} />
                                </TouchableOpacity>
                            </Col>
                            <Col>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => { openImage(4, img) }}>
                                    <Image style={{ flex: 1, resizeMode: 'cover' }} source={{ uri: img[4] }} />
                                </TouchableOpacity>
                            </Col>
                            <Col>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => { openImage(5, img) }}>
                                    <Image style={{ flex: 1, resizeMode: 'cover' }} source={{ uri: img[5] }} />
                                </TouchableOpacity>
                            </Col>
                        </Row>
                    </Grid>
                )
                break;

            default:
                return false
                break;
        }
    }

    const Item = ({ time, message, user_id, read, file }) => {
        const Images = () => {
            if (file.isset) {
                return ImageGrid(file.count, file.url)
            } else {
                return false
            }
        }
        return (
            <View style={user_id == auth.currentUser.uid ? styles.itemSend : styles.item}>
                <View style={styles.photoWrapper}>
                    <Images />
                </View>
                <Text style={[styles.message, { display: message ? 'flex' : 'none' }]}>{message}</Text>
                <View style={[styles.timeWrapper, { position: message ? 'relative' : 'absolute' }]}>
                    <Text style={styles.time}>{time}</Text>
                    <Done color={!read ? "#a7a7a7" : "#ff6600"} height="19" width="16" show={user_id == auth.currentUser.uid ? true : false} />
                </View>
            </View>
        )
    }

    const imageDellate = (index) => {
        setImage(image.filter((el, i) => i != index))
    }

    const Imagespiner = ({ visible }) => {
        if (visible == true) {
            return (
                <View style={styles.spinerWrapper}>
                    <Spinner color='#fff' />
                </View>
            )
        } else {
            return false
        }
    }

    const Imageitem = ({ index, url }) => (
        <View style={{ paddingTop: 10, paddingRight: 5 }}>
            <Imagespiner visible={spiner} />
            <TouchableOpacity style={styles.closeBtn} onPress={() => imageDellate(index)}>
                <AntDesign name="closecircle" size={19} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openImage(index, image)}>
                <Image style={styles.sendImage} source={{ uri: url }} />
            </TouchableOpacity>
        </View>
    )

    return (
        <Container>
            <ImageViewerPopUp />
            <Header style={{ backgroundColor: "#ffba00" }} androidStatusBarColor="#fb9c2a">
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Общая информация</Title>
                </Body>
                <Right />
            </Header>
            <Modal visible={cameraVState} transparent={true} animationType="slide">
                <TouchableOpacity onPress={() => { setCameraVState(false) }} style={{ position: 'absolute', zIndex: 1, right: 5, top: 15 }}><AntDesign name="closecircle" size={30} color="#fff" /></TouchableOpacity>
                <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#000' }}>
                    <Camera style={{ width: width, height: width / 9 * 16 }} ratio="16:9" type={Camera.Constants.Type.back} ref={ref => {
                        setCameraRef(ref);
                    }}>
                        <View
                            style={{
                                marginTop: 'auto',
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                                height: 80,
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingHorizontal: 20,
                                marginBottom: 20
                            }}
                        >
                            <TouchableOpacity disabled={true} style={{ opacity: 0 }} onPress={async () => {
                                //
                            }}><AntDesign name="close" size={40} color="#fff" /></TouchableOpacity>
                            <TouchableOpacity onPress={async () => {
                                if (cameraRef) {
                                    let photo = await cameraRef.takePictureAsync()
                                    setImage([...image, {
                                        id: Math.floor(Math.random() * 100) * Math.random() * 100,
                                        url: photo.uri
                                    }])

                                    setCameraVState(false)
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
                            <TouchableOpacity disabled={true} style={{ opacity: 0 }} onPress={async () => {
                                //
                            }}
                            ><AntDesign name="check" size={40} color="#fff" /></TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            </Modal>
            <View style={styles.container}>
                <AutoScrollFlatList
                    style={{ marginBottom: messageHeight }}
                    data={data}
                    renderItem={({ item }) => (<Item time={item.time} message={item.message} user_id={item.user_id} read={item.read} file={item.file} />)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.formWrapper} onLayout={event => setMessageHeight(event.nativeEvent.layout.height)}>
                <View style={styles.imageWrapper}>
                    <FlatList
                        data={image}
                        renderItem={({ index, item }) => (<Imageitem index={index} url={item.url} />)}
                        keyExtractor={item => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    />
                </View>
                <View style={styles.formControl}>
                    <View style={styles.inputWrapper}>
                        <Input style={styles.input} placeholder="Сообщение" multiline={true} onChangeText={text => setMessage(text)} value={message} />
                        <TouchableOpacity style={styles.btn} onPress={send}>
                            <Svg viewBox="0 3    24 19" fill="#ffba00" width="28" height="22" >
                                <Path d="M0 0h24v24H0z" fill="none"></Path>
                                <Path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></Path>
                            </Svg>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={[styles.btn, { paddingLeft: 0 }]} onPress={pickerFile}>
                            <Svg fill="#ffba00" viewBox="0 0 512 512" width="22" height="22">
                                <Path d="M490.3 186.5c-8.4-8.3-21.9-8.3-30.2.1L203.7 444.4c-33.3 33.3-87.3 33.3-120.6 0C49.7 411 49.7 357 83 323.7L347 58.3c20.8-20.8 54.5-20.8 75.4 0 20.8 20.8 20.8 54.6 0 75.4L203.7 352.4c-8.3 8.3-21.8 8.3-30.1 0s-8.3-21.8 0-30.2l105.6-105.6c8.3-8.3 8.3-21.8 0-30.2s-21.8-8.3-30.2 0L143.4 292.1c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l.1-.1 218.6-218.6c37.5-37.5 37.5-98.3 0-135.8-37.5-37.5-98.3-37.5-135.7 0l-264 265.4c-49.9 49.9-49.9 131 0 181 50 50 131 50 181 0l256.5-257.9c8.3-8.3 8.3-21.8-.1-30.1z"></Path>
                            </Svg>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={makeFoto}>
                            <Svg viewBox="10 40 380 350" fill="#ffba00" width="28" height="22" >
                                <Path d="M406.8 96.4c-8.4-8.8-20-14-33.2-14h-66.4v-.8c0-10-4-19.6-10.8-26-6.8-6.8-16-10.8-26-10.8h-120c-10.4 0-19.6 4-26.4 10.8-6.8 6.8-10.8 16-10.8 26v.8h-66c-13.2 0-24.8 5.2-33.2 14-8.4 8.4-14 20.4-14 33.2v199.2C0 342 5.2 353.6 14 362c8.4 8.4 20.4 14 33.2 14h326.4c13.2 0 24.8-5.2 33.2-14 8.4-8.4 14-20.4 14-33.2V129.6c0-13.2-5.2-24.8-14-33.2zM400 328.8h-.4c0 7.2-2.8 13.6-7.6 18.4s-11.2 7.6-18.4 7.6H47.2c-7.2 0-13.6-2.8-18.4-7.6-4.8-4.8-7.6-11.2-7.6-18.4V129.6c0-7.2 2.8-13.6 7.6-18.4s11.2-7.6 18.4-7.6h77.2c6 0 10.8-4.8 10.8-10.8V81.2c0-4.4 1.6-8.4 4.4-11.2s6.8-4.4 11.2-4.4h119.6c4.4 0 8.4 1.6 11.2 4.4 2.8 2.8 4.4 6.8 4.4 11.2v11.6c0 6 4.8 10.8 10.8 10.8H374c7.2 0 13.6 2.8 18.4 7.6s7.6 11.2 7.6 18.4v199.2z"></Path>
                                <Path d="M210.4 130.8c-27.2 0-52 11.2-69.6 28.8-18 18-28.8 42.4-28.8 69.6s11.2 52 28.8 69.6c18 18 42.4 28.8 69.6 28.8s52-11.2 69.6-28.8c18-18 28.8-42.4 28.8-69.6s-11.2-52-28.8-69.6c-17.6-17.6-42.4-28.8-69.6-28.8zM264.8 284c-14 13.6-33.2 22.4-54.4 22.4S170 297.6 156 284c-14-14-22.4-33.2-22.4-54.4 0-21.2 8.8-40.4 22.4-54.4 14-14 33.2-22.4 54.4-22.4s40.4 8.8 54.4 22.4c14 14 22.4 33.2 22.4 54.4.4 21.2-8.4 40.4-22.4 54.4z"></Path>
                                <Circle cx="352.8" cy="150" r="19.6"></Circle>
                            </Svg>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        </Container >
    );
}