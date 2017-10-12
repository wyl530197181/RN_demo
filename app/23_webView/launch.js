import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Text,
    View,
    WebView
} from 'react-native';

//获取设备的宽度和高度
var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');

//默认应用的容器组件
export default class WebViewDemo extends Component {
    //渲染
    render() {
        return (
            <View style={styles.container}>
                <WebView bounces={false}
                         scalesPageToFit={true}
                         source={{uri: "http://www.hangge.com", method: 'GET'}}//嵌套网页
                    //source={{html:"<h1 style='color:#ff0000'>欢迎访问 hangge.com</h1>"}}//嵌套标签
                         style={{width: deviceWidth, height: deviceHeight}}>
                </WebView>
            </View>
        );
    }
}

//样式定义
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    }
});

