import React, {Component} from 'react';
import {View, Text} from 'react-native';
export default class ChatScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: `Chat with ${navigation.state.params.user}`,
    });

    render() {
        const {params} = this.props.navigation.state;
        console.log(this.props.navigation);
        console.log(params);
        return (
            <View>
                <Text>Chat with {params.user}</Text>
            </View>
        );
    }
}
