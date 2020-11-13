import React, { useState } from 'react';
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
    Textarea,
    Item,
    Input,
    Label
} from 'native-base';
import { TouchableOpacity, Text, Image } from 'react-native'
import { styles } from './NewMessage.css'
import { FooterMain } from '../../assets/component/footer/FooterMain';

export const NewMessage = ({ navigation }) => {
    const [focusTheme, setFocusTheme] = useState(false);
    const [focusNumber, setFocusNumber] = useState(false);
    const [focusComent, setFocusComent] = useState(false);

    return (
        <Container>
            <Header noLeft style={{ backgroundColor: "#ffba00" }} androidStatusBarColor="#fb9c2a">
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Новое обращение</Title>
                </Body>
                <Right />
            </Header>
            <View style={styles.container}>
                <Item stackedLabel style={{ borderBottomColor: focusTheme ? '#ffba00' : '#d9d8d6', marginTop: 18 }}>
                    <Label style={styles.placeholder}>Тема обращения</Label>
                    <Input
                        onFocus={() => setFocusTheme(true)}
                        onBlur={() => setFocusTheme(false)} />
                </Item>
                <Item stackedLabel style={{ borderBottomColor: focusNumber ? '#ffba00' : '#d9d8d6', width: 120, marginTop: 18 }}>
                    <Label style={styles.placeholder}>Номер машины</Label>
                    <Input
                        onFocus={() => setFocusNumber(true)}
                        onBlur={() => setFocusNumber(false)} />
                </Item>
                <Item stackedLabel style={{ borderBottomColor: focusComent ? '#ffba00' : '#d9d8d6', marginTop: 18 }}>
                    <Label style={styles.placeholder}>Сообщение</Label>
                    <Textarea
                        rowSpan={8}
                        style={{ width: '100%' }}
                        onFocus={() => setFocusComent(true)}
                        onBlur={() => setFocusComent(false)}></Textarea>
                </Item>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.addBtn}>
                        <Image style={{ resizeMode: 'contain', width: '100%', height: '100%' }} source={require('../../assets/image/addFile.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addBtn}>
                        <Image style={{ resizeMode: 'contain', width: '100%', height: '100%' }} source={require('../../assets/image/camera.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addBtn}>
                        <Image style={{ resizeMode: 'contain', width: '100%', height: '100%' }} source={require('../../assets/image/send-button.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <FooterMain navigation={navigation} />
        </Container>
    );
}