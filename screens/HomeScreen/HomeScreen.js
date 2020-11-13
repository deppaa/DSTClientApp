import React from 'react';
import {
    Container, Header, Left, Body, Right, Title,
    View
} from 'native-base';
import { TouchableOpacity, Text, Image } from 'react-native'
import { styles } from './HomeScreen.css'

export const HomeScreen = ({ navigation }) => {
    return (
        <Container>
            <Header noLeft style={{ backgroundColor: "#ffba00" }} androidStatusBarColor="#fb9c2a">
                <Left />
                <Body>
                    <Title>Header</Title>
                </Body>
                <Right />
            </Header>
            <View style={styles.container}>
                <View style={styles.functionsWrapper}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.functionWrapper} onPress={() => navigation.navigate('MyCarScreen')}>
                        <Image style={styles.functionButtonImage} source={require('../../assets/image/card_technic.png')} />
                        <Text style={styles.buttonTitleTop}>Мои машины</Text>
                        <Text style={styles.buttonTextBottom}>5 машин</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.functionWrapper} onPress={() => navigation.navigate('MyMessage', { showLeft: false })}>
                        <Image style={styles.functionButtonImage} source={require('../../assets/image/card_feedBack_list.png')} />
                        <Text style={styles.buttonTitleTop}>Мои обращения</Text>
                        <Text style={styles.buttonTextBottom}><View style={styles.circlMessage} />  Сообщение</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.functionWrapper} onPress={() => navigation.navigate('NewMessage', { showLeft: false })}>
                        <Image style={styles.functionButtonImage} source={require('../../assets/image/card_new_feedback.png')} />
                        <Text style={styles.buttonTitleBottom}>Новое обращение</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.controllerWrapper}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.controllerButtonCall}>
                        <Text style={styles.buttonCallTitle}>Звонок{"\n"}на завод</Text>
                        <Image style={styles.controllerButtonIcon} source={require('../../assets/image/call.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.controllerButtonSettings} onPress={() => navigation.navigate('SettingScreen')} >
                        <Text style={styles.buttonSettingsTitle}>Настройки</Text>
                        <Image style={styles.controllerButtonIcon} source={require('../../assets/image/setting.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    );
}