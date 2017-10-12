import React, {Component} from 'react';
import {Text, ScrollView,StyleSheet, View, Image} from 'react-native';

/**
 * Created by marno on 2017/1/13.
 * Desc:HelloWorld 你好，世界！
 */
export  default class HelloWorld extends Component {
    render() {
        return (

            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={{backgroundColor: '#ff1'}}>
                    <Text style={{fontSize: 30}}>Scroll me please</Text>
                    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                           style={{width: 50, height: 50}}/>
                    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                           style={{width: 50, height: 50}}/>
                    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                           style={{width: 50, height: 50}}/>
                </View>
                <View style={{backgroundColor: '#fa1'}}>

                    <Text style={{fontSize: 30}}>If you like</Text>
                    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                           style={{width: 50, height: 50}}/>
                    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                           style={{width: 50, height: 50}}/>
                    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                           style={{width: 50, height: 50}}/>
                </View>
                <View>
                    <Text style={{fontSize: 30}}>Scrolling down</Text>
                    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                           style={{width: 50, height: 50}}/>
                    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                           style={{width: 50, height: 50}}/>
                    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                           style={{width: 50, height: 50}}/>
                </View>
                <View>

                    <Text style={{fontSize: 30}}>What's the best</Text>
                    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                           style={{width: 50, height: 50}}/>
                    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                           style={{width: 50, height: 50}}/>
                    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                           style={{width: 50, height: 50}}/>
                </View>
                <View>

                    <Text style={{fontSize: 30}}>Scrolling down</Text>
                    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                           style={{width: 50, height: 50}}/>
                    <Text style={{fontSize: 50}}>React Native</Text>
                </View>

            </ScrollView>

    )
    }
}
const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20
    }
});