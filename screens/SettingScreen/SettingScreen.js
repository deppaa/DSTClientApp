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
import { styles } from './SettingScreen.css'

export const SettingScreen = ({ navigation }) => {

    return (
        <Container>
            <Header noLeft style={{ backgroundColor: "#ffba00" }} androidStatusBarColor="#fb9c2a">
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Настройки</Title>
                </Body>
                <Right />
            </Header>
            <View style={styles.container}>
                <Text>Настройки</Text>
            </View>
        </Container>
    );
}