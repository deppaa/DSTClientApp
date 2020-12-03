import React, { useEffect, useState } from 'react';
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Title,
    Button,
    Icon,
    View,
} from 'native-base'
import { TouchableOpacity, Text, FlatList } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import * as firebase from 'firebase'
import styles from './styles'

export default MyMessage = ({ route, navigation }) => {
    const [data, setData] = useState([])

    const auth = firebase.auth()

    useEffect(() => {
        const urlDb = getRef().child(auth.currentUser.uid)
        urlDb.on("value", snap => {
            setData([])
            snap.forEach((item, i) => {
                const dt = new Date(UTSZone(item.val().message[Object.keys(item.val().message)[0]].time))
                setData(data => [...data, {
                    id: item.key,
                    title: item.val().title,
                    message: item.val().message[Object.keys(item.val().message)[0]].message,
                    time: dt.getUTCHours() + ':' + dt.getMinutes()
                }])
            })
        })
    }, [])

    const UTSZone = (time) => {
        const date = new Date();
        return new Date(`${time}${date.getTimezoneOffset() / 60}00`).toUTCString()
    }

    const getRef = () => {
        return firebase.database().ref();
    }

    const Done = ({ color, height, width }) => {
        return (
            <Svg height={height} width={width} fill={color}>
                <Path d="M0 0h24v24H0z" fill="none"></Path>
                <Path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></Path>
            </Svg>
        )
    }

    const Item = ({ id, title, message, time, read }) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ChatScreen', { chatId: id })}>
            <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>{title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Done style={styles.itemIcon} color={!read ? "#a7a7a7" : "#ff6600"} height="22" width="24" />
                    <Text style={styles.itemTime}>{time}</Text>
                </View>
            </View>
            <Text style={styles.itemSubTitle}>{message.substr(0, 20)}</Text>
        </TouchableOpacity>
    );

    const { showLeft } = route.params

    return (
        <Container>
            <Header noLeft={!showLeft} style={{ backgroundColor: "#ffba00" }} androidStatusBarColor="#fb9c2a">
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Мои обращения</Title>
                </Body>
                <Right />
            </Header>
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (<Item id={item.id} title={item.title} message={item.message} time={item.time} read={item.read} />)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </Container>
    );
}