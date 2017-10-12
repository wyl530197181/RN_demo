/**
 *
 * 2017/7/21
 * 作者：王园龙
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Alert,
    Image,
    View
} from 'react-native';

import codePush from "react-native-code-push";

export  default class CodePushDemo extends Component {

    codePushStatusDidChange(status) {
        switch (status) {
            case codePush.SyncStatus.CHECKING_FOR_UPDATE:
                console.log("Checking for updates.");
                break;
            case codePush.SyncStatus.DOWNLOADING_PACKAGE:
                console.log("Downloading package.");
                break;
            case codePush.SyncStatus.INSTALLING_UPDATE:
                console.log("Installing update.");
                break;
            case codePush.SyncStatus.UP_TO_DATE:
                console.log("Installing update.");
                break;
            case codePush.SyncStatus.UPDATE_INSTALLED:
                console.log("Update installed.");
                break;
        }
    }

    codePushDownloadDidProgress(progress) {
        console.log(progress.receivedBytes + " of " + progress.totalBytes + " received.");
    }

    componentDidMount() {
        console.log('组件加载后执行');

        //访问慢,不稳定
        codePush.checkForUpdate().then((update) => {
            if (!update) {
                Alert.alert("提示", "已是最新版本--", [
                    {
                        text: "Ok", onPress: () => {
                        console.log("点了OK");
                    }
                    }
                ]);
            }
            else {
                codePush.sync({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE });
            }
        });



    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!更新之后，成功啦！
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload, {'\n'}
                    Shake or press menu button for dev menu
                </Text>
                <Image style={styles.img}
                       resizeMode="contain"
                       source={require('./google.png') }

                />



            </View>
        );
    }
}

CodePushDemo = codePush(CodePushDemo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    img: {
        height: 180,
        width: 200,
    },
});

