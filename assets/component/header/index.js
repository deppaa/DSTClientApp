import {
    Header,
    Left,
    Body,
    Right,
    Title,
    Button,
    Icon,
} from 'native-base';

export default Header = ({ navigation }) => {
    return (
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
    )
}