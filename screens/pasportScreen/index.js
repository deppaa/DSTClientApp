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
import { TouchableOpacity, Text, FlatList } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import styles from './styles'

export default PasportScreen = ({ navigation }) => {

    const DATA = [
        {
            id: 'asd',
            name: 'Общая информация',
        },
        {
            id: 'asdasd',
            name: 'ДВС',
        },
        {
            id: 'asdasdewr',
            name: 'Гидросистема',
        },
    ]

    const Item = ({ name }) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('PasportDetailScreen')}>
            <Text style={styles.name}>{name}</Text>
            <Svg viewBox="0 0 24 24" style={{ width: 24, height: 24 }}>
                <Path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zM9 16.59v-9l8 4.5z" fill="#ffba00"></Path>
            </Svg>
        </TouchableOpacity>
    );

    return (
        <Container>
            <Header style={{ backgroundColor: "#ffba00" }} androidStatusBarColor="#fb9c2a">
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Файлы</Title>
                </Body>
                <Right />
            </Header>
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (<Item name={item.name} />)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </Container>
    );
}