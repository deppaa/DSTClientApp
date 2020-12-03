import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Svg, { Circle, Path } from 'react-native-svg';
import {
    HomeScreen,
    NewMessage,
    MyMessage,
    MyCarScreen,
    CarScreen,
    MapScreen,
    SettingScreen,
    FileScreen,
    PasportScreen,
    PasportDetailScreen,
    ChatScreen,
} from '../screens'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ChatStack(e) {
    let showLeft = e.route.params.showLeft
    return (
        <Stack.Navigator headerMode={"none"}>
            <Stack.Screen initialParams={{ showLeft: showLeft }} name="MyMessage" component={MyMessage} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
        </Stack.Navigator>
    )
}

function MyCarStack() {
    return (
        <Stack.Navigator headerMode={"none"}>
            <Stack.Screen name="MyCarScreen" component={MyCarScreen} />
            <Stack.Screen name="CarScreen" component={CarScreen} />
            <Stack.Screen name="MapScreen" component={MapScreen} />
            <Stack.Screen initialParams={{ showLeft: false }} name="NewMessageOnCar" component={NewMessage} />
            <Stack.Screen initialParams={{ showLeft: false }} name="MyMessage" component={MyMessage} />
            <Stack.Screen name="FileScreen" component={FileScreen} />
            <Stack.Screen name="PasportScreen" component={PasportScreen} />
            <Stack.Screen name="PasportDetailScreen" component={PasportDetailScreen} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
        </Stack.Navigator>
    );
}

export default function NavContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    showLabel: false,
                    activeTintColor: '#ffba00',
                    inactiveTintColor: '#cccccc',
                    inactiveBackgroundColor: '#eeeeee',
                    activeBackgroundColor: '#eeeeee',
                }}>
                <Tab.Screen options={{
                    tabBarVisible: false,
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Svg width="80%" height="80%" viewBox="0 0 20 20" fill={color} >
                                <Path d="M10 2.8c.2 0 .4.1.6.2l5.5 3.9c.3.2.5.6.5.9v8.3c0 .6-.5 1.1-1.1 1.1h-11c-.6 0-1.1-.5-1.1-1.1V7.8c0-.4.2-.7.5-.9L9.4 3c.2-.1.4-.2.6-.2m0-1c-.4 0-.8.1-1.2.4L3.3 6.1c-.6.4-.9 1-.9 1.7v8.3c0 1.2.9 2.1 2.1 2.1h11.1c1.1 0 2.1-1 2.1-2.1V7.8c0-.7-.3-1.4-.9-1.8l-5.5-3.9c-.5-.2-.9-.3-1.3-.3z" fill={color}></Path>
                            </Svg>
                        )
                    }
                }} name="Home" component={HomeScreen} />
                <Tab.Screen options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Svg width="80%" height="80%" viewBox="0 0 20 20" stroke={color} >
                                <Path d="M6.7 12.6V7.5c0-.3.2-.5.5-.5l8.3-.1m-1 4.7l1.9-8.8c.1-.3.3-.4.6-.4h6.2c.3 0 .5.2.5.5v1.6c0 .2-.1.3-.2.4l-.8.9c-.1.1-.2.3-.2.5v5.8"></Path>
                                <Path d="M21.9 17.6H8.7c-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.9 2.9-2.9h13.2c1.6 0 2.9 1.3 2.9 2.9 0 1.6-1.3 2.9-2.9 2.9zM4.1 10.8l-.9 6.5c0 .2-.2.4-.4.4H1.4c-.1 0-.2-.1-.2-.3l1.9-6.6c0-.1.1-.2.3-.2H4c.1 0 .2.1.1.2zm-.2 3.8h9.7M10.2 3.5V7"></Path>
                            </Svg>
                        )
                    }
                }} name="MyCarScreen" component={MyCarStack} />
                <Tab.Screen initialParams={{ showLeft: false }} options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Svg width="80%" height="80%" viewBox="0 0 20 20" stroke={color} >
                                <Path d="M15.3 1H4.7c-2.2 0-4 1.8-4 4v7.2c0 2 1.5 3.7 3.5 4V19l3.6-2.7h7.6c2.2 0 4-1.8 4-4V5.1c0-2.3-1.8-4.1-4.1-4.1z" fill="none" stroke-miterlimit="10"></Path>
                                <Path d="M10 3.9v6.2m0 1.5v1.5"></Path>
                            </Svg>
                        )
                    }
                }} name="NewMessage" component={NewMessage} />
                <Tab.Screen initialParams={{ showLeft: false }} options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Svg width="80%" height="80%" viewBox="0 0 20 20" stroke={color} >
                                <Path d="M9 1.9h7.5c1.6 0 2.8 1.3 2.8 2.9v5.1c0 1.4-1.1 2.6-2.4 2.8l-.1 1.9-2.5-1.9H9c-1.6 0-2.8-1.3-2.8-2.9v-5c0-1.6 1.3-2.9 2.8-2.9z"></Path>
                                <Path d="M11 5.4H3.5C1.9 5.4.7 6.7.7 8.3v5.1c0 1.4 1.1 2.6 2.4 2.8l.1 1.9 2.5-1.9H11c1.6 0 2.8-1.3 2.8-2.9V8.2c0-1.6-1.3-2.8-2.8-2.8z"></Path>
                            </Svg>
                        )
                    }
                }} name="MyMessage" component={ChatStack} />
                <Tab.Screen options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Svg width="80%" height="80%" viewBox="0 0 20 20" stroke={color} >
                                <Path d="M10 17.4v1.8M10 .8v1.8m3.7 13.8l.9 1.5M5.4 2.1l.9 1.5m10 10l1.6 1M2.1 5.4l1.6 1M17.2 10h2M.8 10h2m3.5 6.4l-.9 1.5m9.2-15.8l-.9 1.5m-9.8 9.9l-1.8 1.1m15.8-9.2l-1.5.9"></Path>
                                <Circle cx="10" cy="10" r="7.2"></Circle>
                                <Circle cx="10" cy="10" r="3.5"></Circle>
                            </Svg>
                        )
                    }
                }} name="SettingScreen" component={SettingScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}