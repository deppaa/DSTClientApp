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
import { TouchableOpacity, Text, } from 'react-native'
import { styles } from './CarScreen.css'


export const CarScreen = () => {
    return (
        <Container>
            <Header style={{ backgroundColor: "#ffba00" }} androidStatusBarColor="#fb9c2a">
                <Left>
                    <Button transparent>
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
                    <TouchableOpacity style={styles.buttonMap}>
                        <Text style={styles.bottomTitleBlack}>Карта</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.buttonCarMessage}>
                        <Text style={styles.bottomTitle}>Обращения {"\n"}по машине</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMapNewMessage}>
                        <Text style={styles.bottomTitleBlack}>Новое обращение</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.buttonCarPassport}>
                        <Text style={styles.bottomTitle}>Паспорт машины</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCarWork}>
                        <Text style={styles.bottomTitleBlack}>Работа машины</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCarTO}>
                        <Text style={styles.bottomTitleBlack}>ТО {"\n"}и ремонт</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.buttonCarMessage}>
                        <Text style={styles.bottomTitle}>Обращения {"\n"}по машине</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMapNewMessage}>
                        <Text style={styles.bottomTitleBlack}>Новое обращение</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    )
}