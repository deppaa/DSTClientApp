import React, { useRef, useState } from 'react';
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
import { Text } from 'react-native'
import Slider from '@react-native-community/slider'
import styles from './styles'

export default SettingScreen = ({ navigation }) => {
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