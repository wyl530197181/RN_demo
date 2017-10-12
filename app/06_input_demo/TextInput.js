import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default class TextInputExe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    render() {
        return (
            <View>
                <View style={styles.textInputLine}>
                    <View style={
                        styles.leftView
                    }>
                        <Text style={styles.leftText}>手机号码</Text>
                    </View>
                    <TextInput
                        style={{flex: 1, fontSize: 20}}
                        placeholder={'请输入手机号'}
                        placeholderTextColor={'#b2b2b2'}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        returnKeyType={'next'}
                        underlineColorAndroid={'transparent'}
                    />
                </View>
                <View style={styles.textInputLine}>
                    <View style={
                        styles.leftView
                    }>
                        <Text style={styles.leftText}>姓名</Text>
                    </View>
                    <TextInput
                        style={{flex: 1, fontSize: 20}}
                        placeholder={'请输入姓名'}
                        placeholderTextColor={'#b2b2b2'}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        returnKeyType={'next'}
                        underlineColorAndroid={'transparent'}
                    />
                </View>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    textInputLine: {
        flexDirection: 'row',
        height: 44,
        // backgroundColor: '#ff1',
        alignItems: 'center',
        justifyContent: "space-between",
        marginBottom: 20
    },
    leftView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fa1',
        width: 100,
        height: 44,
        marginRight: 30
    },
    leftText: {
        fontSize: 20,
        backgroundColor: '#aaf',
        padding: 0,
        textAlign: 'center',
        justifyContent: 'center',
    }
});