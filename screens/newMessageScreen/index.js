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
	Label,
} from 'native-base';
import { TouchableOpacity, Text, Image } from 'react-native'
import { Localization } from 'expo'
import * as firebase from 'firebase'
import styles from './styles'

export default NewMessage = ({ route, navigation }) => {
	const [focusTheme, setFocusTheme] = useState(false);
	const [focusNumber, setFocusNumber] = useState(false);
	const [focusComent, setFocusComent] = useState(false);

	const [chatTheme, setChatTheme] = useState('');
	const [carNumber, setCarNumber] = useState('');
	const [message, setMessage] = useState('');


	const auth = firebase.auth()
	const firestore = firebase.firestore()

	const getRef = () => {
		return firebase.database().ref();
	}

	const createChat = () => {
		const date = new Date();
		auth.onAuthStateChanged(async user => {
			try {
				const result = await getRef().child(user.uid).push({
					id: `chatTheme${Math.floor(Math.random() * 100) * Math.random() * 100}`,
					title: chatTheme,
					carNumber: carNumber,
					message: {
						"-MMoU0i9Jz6YND75V-Z4": {
							id: Math.floor(Math.random() * 100) * Math.random() * 100,
							user_id: user.uid,
							message: message,
							time: date.toUTCString(),
							file: {
								isset: false,
								count: 0,
								url: {

								}
							}
						}
					}
				});
				return result
			} catch (error) {
				return error
			}
		})
	}

	const handlerChat = () => {
		const result = createChat()
		setChatTheme('')
		setCarNumber('')
		setMessage('')
		//navigation.navigate('ChatScreen')
	}

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
					<Title>Новое обращение</Title>
				</Body>
				<Right />
			</Header>
			<View style={styles.container}>
				<Item stackedLabel style={{ borderBottomColor: focusTheme ? '#ffba00' : '#d9d8d6', marginTop: 18 }}>
					<Label style={styles.placeholder}>Тема обращения</Label>
					<Input
						onFocus={() => setFocusTheme(true)}
						onBlur={() => setFocusTheme(false)}
						onChangeText={text => setChatTheme(text)}
						value={chatTheme} />
				</Item>
				<Item stackedLabel style={{ borderBottomColor: focusNumber ? '#ffba00' : '#d9d8d6', width: 120, marginTop: 18 }}>
					<Label style={styles.placeholder}>Номер машины</Label>
					<Input
						onFocus={() => setFocusNumber(true)}
						onBlur={() => setFocusNumber(false)}
						onChangeText={text => setCarNumber(text)}
						value={carNumber} />
				</Item>
				<Item stackedLabel style={{ borderBottomColor: focusComent ? '#ffba00' : '#d9d8d6', marginTop: 18 }}>
					<Label style={styles.placeholder}>Сообщение</Label>
					<Textarea
						rowSpan={8}
						style={{ width: '100%' }}
						onFocus={() => setFocusComent(true)}
						onBlur={() => setFocusComent(false)}
						onChangeText={text => setMessage(text)}
						value={message} />
				</Item>
				<View style={{ flexDirection: 'row' }}>
					<TouchableOpacity style={styles.addBtn}>
						<Image style={{ resizeMode: 'contain', width: '100%', height: '100%' }} source={require('../../assets/image/addFile.png')} />
					</TouchableOpacity>
					<TouchableOpacity style={styles.addBtn}>
						<Image style={{ resizeMode: 'contain', width: '100%', height: '100%' }} source={require('../../assets/image/camera.png')} />
					</TouchableOpacity>
					<TouchableOpacity style={styles.addBtn} onPress={handlerChat}>
						<Image style={{ resizeMode: 'contain', width: '100%', height: '100%' }} source={require('../../assets/image/send-button.png')} />
					</TouchableOpacity>
				</View>
			</View>
		</Container>
	);
}