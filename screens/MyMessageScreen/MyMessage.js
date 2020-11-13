import React from 'react';
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
    Footer,
    FooterTab,
} from 'native-base';
import { TouchableOpacity, Text, FlatList } from 'react-native'
import Svg, { Path } from 'react-native-svg';
import { styles } from './MyMessage.css'
import { FooterMain } from '../../assets/component/footer/FooterMain';

export const MyMessage = ({ navigation }) => {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Поломка отвала',
            message: 'Их у меня есть',
            time: '12:22',
            read: true
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63g',
            title: 'Поломка отвала',
            message: 'ПАМАГИТИ',
            time: '10:22',
            read: false
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Поломка отвала',
            message: 'Поломка отвала',
            time: '19:22',
            read: true
        },

        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
            title: 'Поломка отвала',
            message: 'Их у меня есть',
            time: '12:22',
            read: true
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
            title: 'Поломка отвала',
            message: 'ПАМАГИТИ',
            time: '10:22',
            read: false
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d723',
            title: 'Поломка отвала',
            message: 'Поломка отвала',
            time: '19:22',
            read: true
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bat',
            title: 'Поломка отвала',
            message: 'Их у меня есть',
            time: '12:22',
            read: true
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Поломка отвала',
            message: 'ПАМАГИТИ',
            time: '10:22',
            read: false
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d724',
            title: 'Поломка отвала',
            message: 'Поломка отвала',
            time: '19:22',
            read: true
        },

        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba15',
            title: 'Поломка отвала',
            message: 'Их у меня есть',
            time: '12:22',
            read: true
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6326',
            title: 'Поломка отвала',
            message: 'ПАМАГИТИ',
            time: '10:22',
            read: false
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d7237',
            title: 'Поломка отвала',
            message: 'Поломка отвала',
            time: '19:22',
            read: true
        },
    ];

    const Done = ({ color, height, width }) => {
        return (
            <Svg height={height} width={width} fill={color}>
                <Path d="M0 0h24v24H0z" fill="none"></Path>
                <Path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></Path>
            </Svg>
        )
    }

    const Item = ({ title, message, time, read }) => (
        <TouchableOpacity style={styles.item}>
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

    return (
        <Container>
            <Header noLeft style={{ backgroundColor: "#ffba00" }} androidStatusBarColor="#fb9c2a">
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
                    data={DATA}
                    renderItem={({ item }) => (<Item title={item.title} message={item.message} time={item.time} read={item.read} />)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <FooterMain navigation={navigation} />
        </Container>
    );
}