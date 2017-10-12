/**
 * Created by dell on 2017/5/2.
 */
import React,{Component}from 'react';
import {View,Text}from "react-native";
import {Actions}from 'react-native-router-flux';
export default class  PageOne extends Component{
    render(){
        const goToPageTwo=()=>Actions.pageTwo({text:'你好，世界'});
        return(
            <View style={{margin:128}}>
                <Text onPress={goToPageTwo}>
                    这是页面一
                </Text>
            </View>
        )
    }
}
