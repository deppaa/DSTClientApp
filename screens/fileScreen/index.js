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
import styles from './styles'

export default FileScreen = ({ navigation }) => {

    const DATA = [
        {
            name: 'Руководство по эксплуатации',
            size: 12,
            seze_format: 'Мб',
            file_format: 'PDF'
        },
        {
            name: 'Руководство по эксплуатации',
            size: 53,
            seze_format: 'Мб',
            file_format: 'DOC'
        },
        {
            name: 'Руководство по эксплуатации',
            size: 15,
            seze_format: 'Мб',
            file_format: 'DOCX'
        },
        {
            name: 'Руководство по эксплуатации',
            size: 17.5,
            seze_format: 'Мб',
            file_format: 'XLS'
        },
        {
            name: 'Руководство по эксплуатации',
            size: 5,
            seze_format: 'Мб',
            file_format: 'XLSX'
        }
    ]

    const color = (format) => {
        let color = ""

        switch (format) {
            case 'PDF':
                color = '#ffba00'
                break;

            case 'DOC':
                color = '#e4001b'
                break;

            case 'DOCX':
                color = '#e4001b'
                break;

            case 'XLS':
                color = '#ea4d00'
                break;

            case 'XLSX':
                color = '#ea4d00'
                break;

            default:
                break;
        }

        return color
    }

    const Item = ({ name, size, seze_format, file_format }) => (
        <TouchableOpacity style={styles.item}>
            <View style={[styles.icon, { backgroundColor: color(file_format) }]}>
                <Text style={styles.fileFormat}>{file_format}</Text>
            </View>
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.size}>{size} {seze_format}</Text>
            </View>
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
                    renderItem={({ item }) => (<Item name={item.name} size={item.size} seze_format={item.seze_format} file_format={item.file_format} />)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </Container>
    );
}