/**
 * Created by dell on 2017/5/2.
 */
import React, {Component}from 'react';
import {View, Text}from "react-native";
import {Actions}from 'react-native-router-flux';
export default class PageTwo extends Component {
    render() {
        // const refresh=Actions.refresh({text:"这是一段刷新过的文字"});
        //    console.log(this.props);
        return (
            <View style={{margin: 128}}>
                <Text onPress={Actions.pop}>这是页面2!</Text>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}