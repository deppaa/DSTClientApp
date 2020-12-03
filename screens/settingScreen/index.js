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

	const CustomSlider = ({ minimumValue, maximumValue, minimumTrackTintColor = "#FFCE33", maximumTrackTintColor = "#F5F5F5", curentTimes = 0 }) => {
		const [curentTime, setCurentTimes] = useState(curentTimes)

		const slidingCompleted = async value => {
			setCurentTimes(value)
		};

		const slideWidt = 5
		const step = maximumValue / 49
		return (
			<View>
				<Slider
					style={{
						opacity: 0,
						height: 40,
						width: '100%',
						position: 'absolute',
						top: 0,
						left: 0,
						zIndex: 1
					}}
					minimumValue={minimumValue}
					maximumValue={maximumValue}
					minimumTrackTintColor="#FFFFFF"
					maximumTrackTintColor="#000000"
					thumbTintColor="#fff"
					onSlidingComplete={slidingCompleted}
				/>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15 }}>
					<View style={{ width: slideWidt, height: 6, backgroundColor: curentTime > step * (0 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 6, backgroundColor: curentTime > step * (1 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 13, backgroundColor: curentTime > step * (2 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 9, backgroundColor: curentTime > step * (3 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 6, backgroundColor: curentTime > step * (4 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 6, backgroundColor: curentTime > step * (5 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 6, backgroundColor: curentTime > step * (6 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 21, backgroundColor: curentTime > step * (7 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 11, backgroundColor: curentTime > step * (8 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 17, backgroundColor: curentTime > step * (9 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 22, backgroundColor: curentTime > step * (10 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 24, backgroundColor: curentTime > step * (11 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 17, backgroundColor: curentTime > step * (12 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 38, backgroundColor: curentTime > step * (13 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 31, backgroundColor: curentTime > step * (14 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 37, backgroundColor: curentTime > step * (15 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 40, backgroundColor: curentTime > step * (16 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 37, backgroundColor: curentTime > step * (17 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 38, backgroundColor: curentTime > step * (18 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 24, backgroundColor: curentTime > step * (19 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 31, backgroundColor: curentTime > step * (20 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 40, backgroundColor: curentTime > step * (21 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 33, backgroundColor: curentTime > step * (22 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 24, backgroundColor: curentTime > step * (23 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 16, backgroundColor: curentTime > step * (24 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 12, backgroundColor: curentTime > step * (25 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 21, backgroundColor: curentTime > step * (26 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 15, backgroundColor: curentTime > step * (27 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 13, backgroundColor: curentTime > step * (28 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 24, backgroundColor: curentTime > step * (29 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 38, backgroundColor: curentTime > step * (30 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 37, backgroundColor: curentTime > step * (31 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 40, backgroundColor: curentTime > step * (32 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 26, backgroundColor: curentTime > step * (33 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 31, backgroundColor: curentTime > step * (34 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 37, backgroundColor: curentTime > step * (35 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 34, backgroundColor: curentTime > step * (36 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 24, backgroundColor: curentTime > step * (37 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 16, backgroundColor: curentTime > step * (38 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 11, backgroundColor: curentTime > step * (39 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 19, backgroundColor: curentTime > step * (40 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 15, backgroundColor: curentTime > step * (41 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 6, backgroundColor: curentTime > step * (42 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 6, backgroundColor: curentTime > step * (43 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 6, backgroundColor: curentTime > step * (44 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 9, backgroundColor: curentTime > step * (45 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 13, backgroundColor: curentTime > step * (46 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 6, backgroundColor: curentTime > step * (47 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 6, backgroundColor: curentTime > step * (48 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
				</View>
			</View>
		)
	}
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
				<CustomSlider
					minimumValue={0}
					maximumValue={1}
				/>
			</View>
		</Container>
	);
}