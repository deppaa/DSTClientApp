import React, { useEffect } from 'react';
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
import { TouchableOpacity, Text, FlatList, TextInput } from 'react-native'
import Svg, { Path } from 'react-native-svg';
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from '../../store/carScreen/actions';

export default MyCarScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(selectCars())
    }, [dispatch])

    const DATA = useSelector(({ carList }) => {
        return carList.data
    })

    /* const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: '2201',
            name: 'Бульдозер D10.0101',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63g',
            title: '2323',
            name: 'Бульдозер D10.0101',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: '2131',
            name: 'Бульдозер D10.0101',
        },
    ]; */

    const Done = ({ color, height, width }) => {
        return (
            <Svg height={height} width={width} fill={color}>
                <Path d="M0 0h24v24H0z" fill="none"></Path>
                <Path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></Path>
            </Svg>
        )
    }

    const SearchHeader = () => {
        return (
            <View style={styles.searchWrapper}>
                <TextInput style={styles.searchInput} placeholder="Найти машину" />
                <Button transparent style={styles.serchButton}>
                    <Svg width="23" height="23" viewBox="0 0 24 24" fill="#0d0d0d">
                        <Path d="M0 0h24v24H0z" fill="none"></Path>
                        <Path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></Path>
                    </Svg>
                </Button>
            </View>)
    }

    const Item = ({ title, name = '' }) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('CarScreen')}>
            <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>{title}</Text>
            </View>
            <Text style={styles.itemSubTitle}>{name}</Text>
        </TouchableOpacity>
    );

    return (
        <Container>
            <Header noLeft style={{ backgroundColor: "#ffba00" }} androidStatusBarColor="#fb9c2a">
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Мои машины</Title>
                </Body>
                <Right />
            </Header>
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (<Item title={item.title} time={item.time} read={item.read} />)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    ListHeaderComponent={<SearchHeader />}
                />
            </View>
        </Container>
    );
}