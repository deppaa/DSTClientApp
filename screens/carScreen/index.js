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
} from 'native-base';
import { TouchableOpacity, Text, Image } from 'react-native'
import Svg, { Path } from 'react-native-svg';
import styles from './styles'


export default CarScreen = ({ navigation }) => {

    return (
        <Container>
            <Header style={{ backgroundColor: "#ffba00" }} androidStatusBarColor="#fb9c2a">
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
                <View style={styles.row}>
                    <TouchableOpacity style={styles.buttonCar}>
                        <Text style={styles.topTitle}>Бульдозер ТМ10.11ГСТ20</Text>
                        <Text style={styles.subTitle}>2 поколение</Text>
                        <Text style={styles.bottomTitle}>1981.8 м/ч</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMap} onPress={() => navigation.navigate('MapScreen')}>
                        <Image style={styles.bg} source={require('../../assets/image/map.png')} />
                        <Svg style={styles.mapIcon} height="40" width="28" fill="#ff9700" viewBox="70 55 380 380">
                            <Path d="M256 0C156.7 0 76 80.7 76 180c0 33.5 9.3 66.3 26.9 94.7L245.8 505c2.7 4.4 7.6 7.1 12.7 7.1h.1c5.2 0 10.1-2.8 12.8-7.3l139.2-232.5c16.6-27.8 25.4-59.7 25.4-92.2C436 80.7 355.3 0 256 0zm128.9 256.8L258.3 468.2 128.4 258.8c-14.6-23.6-22.6-50.9-22.6-78.8 0-82.7 67.5-150.2 150.2-150.2S406.1 97.3 406.1 180c0 27.1-7.4 53.7-21.2 76.8z"></Path>
                            <Path d="M256 90c-49.6 0-90 40.4-90 90 0 49.3 39.7 90 90 90 50.9 0 90-41.2 90-90 0-49.6-40.4-90-90-90zm0 150.2c-33.3 0-60.2-27-60.2-60.2 0-33.1 27.1-60.2 60.2-60.2s60.1 27.1 60.1 60.2c0 32.7-26.3 60.2-60.1 60.2z"></Path>
                        </Svg>
                        <Text style={styles.bottomTitleBlack}>Где машина</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.buttonLeft} onPress={() => navigation.navigate('MyMessage', { showLeft: true })}>
                        <Image style={styles.bg} source={require('../../assets/image/fb_car_list.png')} />
                        <Text style={styles.topTitle}>Обращения {"\n"}по машине</Text>
                        <View style={styles.messageWrapper}><View style={styles.messageIcon} /><Text style={styles.message}>Сообщение</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRight} onPress={() => navigation.navigate('NewMessageOnCar', { showLeft: true })} >
                        <Image style={styles.bg} source={require('../../assets/image/card_new_feedback_new.png')} />
                        <Text style={styles.bottomTitle}>Новое {"\n"}обращение</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.buttonLeft} onPress={() => navigation.navigate('PasportScreen')}>
                        <Image style={styles.bg} source={require('../../assets/image/carPasport.png')} />
                        <Text style={styles.bottomTitle}>Паспорт {"\n"}машины</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRight} onPress={() => navigation.navigate('FileScreen')}>
                        <Image style={styles.bg} source={require('../../assets/image/file.png')} />
                        <Text style={styles.bottomTitle}>Файлы</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.buttonLeft}>
                        <Image style={styles.bg} source={require('../../assets/image/carTO.png')} />
                        <Text style={styles.bottomTitle}>ТО {"\n"}и ремонт</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRight}>
                        <Image style={styles.bg} source={require('../../assets/image/carWork.png')} />
                        <Text style={styles.bottomTitle}>Работа {"\n"}машины</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    )
}