/**
 *
 * 2017/5/21
 * 作者：王园龙
 */
import React, { Component } from 'react';
import {View, TextInput } from 'react-native';

class UselessTextInput extends Component {
    render() {
        return (
            <TextInput
                {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                editable = {true}
                maxLength = {40}
            />
        );
    }
}

export default class UselessTextInputMultiline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Useless Multiline Placeholder',
        };
    }

    // If you type something in the text box that is a color, the background will change to that
    // color.
    render() {
        return (
            <View style={{
                backgroundColor: this.state.text,
                borderBottomColor: '#0ff',
                borderBottomWidth: 5 }}
            >
                <UselessTextInput
                    multiline = {true}
                    numberOfLines = {4}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
            </View>
        );
    }
}

// App registration and rendering
