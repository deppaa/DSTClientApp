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

export default PasportDetailScreen = ({ navigation }) => {

    const DATA = [
        {
            id: 'asd',
            name: 'Номер рамы',
            parament: '1938'
        },
        {
            id: 'asdasd',
            name: 'КД рамы',
            parament: 'ТМ10.1126.000-01'
        },
        {
            id: 'asdasdewr',
            name: 'Тип телег',
            parament: '7-и катковая ТМ10.2127.000 (-01)'
        },
        {
            id: 'asdff',
            name: 'Направляющие колеса',
            parament: '50 - 21 - 305(306)'
        },
        {
            id: 'asdasdff',
            name: 'Сегмент ведущей звезды',
            parament: '50 - 19 - 201(ЧТЗ)'
        },
        {
            id: 'asdasdewrff',
            name: 'Гусеницы',
            parament: '900 мм, 45 башмаков, Тm - CK - 1 - 03'
        },
    ]

    const Item = ({ name, parament }) => (
        <View style={styles.item}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.parament}>{parament}</Text>
        </View>
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
                    <Title>Общая информация</Title>
                </Body>
                <Right />
            </Header>
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (<Item name={item.name} parament={item.parament} />)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </Container>
    );
}