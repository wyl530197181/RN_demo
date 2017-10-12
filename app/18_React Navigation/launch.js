import React from 'react';
import {
    AppRegistry,
    Text,
    Button,
    View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ChatScreen from './chatScreen';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Chat', {user: '彰武'})}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}

const SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    Chat: {screen: ChatScreen},
});
export default SimpleApp;
// AppRegistry.registerComponent('SimpleApp', () => SimpleApp);