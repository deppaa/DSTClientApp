import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Root } from "native-base";
import store from './store/store'
import NavContainer from './navigation';
import { Auth } from './screens';

import { LogBox } from 'react-native';
import _ from 'lodash';

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyDXVUiLLFqP17WUjbKc_1cjd3_PZaDeuHI",
	authDomain: "dstchat-bd4b1.firebaseapp.com",
	databaseURL: "https://dstchat-bd4b1.firebaseio.com",
	projectId: "dstchat-bd4b1",
	storageBucket: "dstchat-bd4b1.appspot.com",
	messagingSenderId: "906693859178",
	appId: "1:906693859178:web:8b7d032077191dbe38b713",
};

firebase.initializeApp(firebaseConfig)
firebase.firestore()

LogBox.ignoreLogs(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
	if (message.indexOf('Setting a timer') <= -1) {
		_console.warn(message);
	}
};

const CheckAuth = () => {
	return true ? <NavContainer /> : <Auth />
}

export default function App() {

	let [fontsLoaded] = Font.useFonts({
		Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<Provider store={store}>
				<Root>
					<CheckAuth />
				</Root >
			</Provider>
		)
	}
}