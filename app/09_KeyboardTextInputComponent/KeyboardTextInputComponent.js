// import React, { Component } from 'react';
// import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     TextInput,
//     KeyboardAvoidingView,
//     View
// } from 'react-native';
//
// export default class KeyboardAvoidingViewDemo extends Component{
//     state = {
//         behavior: 'padding',
//     };
//     render() {
//         return (
//             <View style={styles.container}>
//                 <KeyboardAvoidingView behavior="padding"style={styles.container}>
//                     <TextInput
//                         underlineColorAndroid={'#ffffff'}
//                         placeholder="这里是一个简单的输入框"
//                         style={styles.textInput} />
//                 </KeyboardAvoidingView>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor:'white',
//         justifyContent: 'center',
//         paddingHorizontal: 20,
//         paddingTop: 20,
//     },
//     textInput: {
//         borderRadius: 5,
//         borderWidth: 1,
//         height: 140,
//         paddingHorizontal: 10,
//     },
// });
//
const React = require('React');
const ReactNative = require('react-native');
const {
    KeyboardAvoidingView,
    Modal,
    SegmentedControlIOS,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View,
    Dimensions,
    ScrollView,
} = ReactNative;
const {width, height} = Dimensions.get('window');

export default class KeyboardAvoidingViewDemo extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='position' >
                <ScrollView style={styles.outerContainer}>
                    <View style={styles.container}>
                        <View style={{height:400,backgroundColor:'red',justifyContent:'center',alignItems:'center',}}>
                            <Text style={{fontSize:28,color:'#998462',textAlign:'center',}}>Top Area</Text>
                        </View>
                        <TextInput
                            placeholder="<TextInput />"
                            style={styles.textInput} />
                        <View style={{height:200,backgroundColor:'blue',justifyContent:'center',alignItems:'center',}}>
                            <Text style={{fontSize:28,color:'#998462',textAlign:'center',}}>Bottom Area</Text>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    outerContainer: {
        height:height,
        paddingTop: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'#11ffff'
    },
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        height: 44,
        paddingHorizontal: 10,
    },
});