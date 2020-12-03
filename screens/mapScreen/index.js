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
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { TouchableOpacity, Text, Image } from 'react-native'
import styles from './styles'

export default MapScreen = ({ navigation }) => {
    const items = [
        {
            id: 1, coordinate: { latitude: 55.216210, longitude: 61.440233 }, title: 'dfgfdg',
            description: 'dfgdfgdfg'
        },
    ]
    return (
        <Container>
            <Header style={{ backgroundColor: "#ffba00" }} androidStatusBarColor="#fb9c2a">
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>На карте</Title>
                </Body>
                <Right />
            </Header>
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: 55.216210,
                        longitude: 61.440233,
                        latitudeDelta: 0.04,
                        longitudeDelta: 0.03,
                    }}
                >
                    <Marker
                        key={1}
                        coordinate={{ latitude: 55.216210, longitude: 61.440233 }}
                        title='dfgfdg'
                        description='dfgdfgdfg'
                    >
                    </Marker>
                </MapView>
                <View style={styles.infoWrapper}>
                    <Text style={styles.infoTitle}>Положение машины</Text>
                    <Text style={styles.infoText}>12.11.2020 в 12:22</Text>
                </View>
            </View>
        </Container>
    );
}