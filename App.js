import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './screens/HomeScreen/HomeScreen'
import { NewMessage } from './screens/NewMessageScreen/NewMessage'
import { MyMessage } from './screens/MyMessageScreen/MyMessage'
import { MyCarScreen } from './screens/MyCarScreen/MyCarScreen'
import { CarScreen } from './screens/CarScreen/CarScreen'
import { MapScreen } from './screens/MapScreen/MapScreen'

const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator
			tabBarOptions={{
				showLabel: false,
			}}>
			<Tab.Screen options={{
				tabBarVisible: false,
			}} name="Home" component={HomeScreen} />
			<Tab.Screen options={{
				tabBarVisible: false,
			}} name="MyCarScreen" component={MyCarScreen} />
			<Tab.Screen options={{
				tabBarVisible: false,
			}} name="NewMessage" component={NewMessage} />
			<Tab.Screen options={{
				tabBarVisible: false,
			}} name="MyMessage" component={MyMessage} />
		</Tab.Navigator>
	);
}
/* const Stack = createStackNavigator(); */

/* function MyStack() {
	return (
		<Stack.Navigator headerMode={"none"}>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="NewMessage" component={NewMessage} />
			<Stack.Screen name="MyMessage" component={MyMessage} />
			<Stack.Screen name="MyCarScreen" component={MyCarScreen} />
			<Stack.Screen name="CarScreen" component={CarScreen} />
			<Stack.Screen name="MapScreen" component={MapScreen} />
		</Stack.Navigator>
	);
} */

export default function App() {
	let [fontsLoaded] = Font.useFonts({
		Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<NavigationContainer>
				<MyTabs />
			</NavigationContainer>
		)
	}
}