import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducer/reducer';
import AddTodo from './view/launch';
import {getStore} from './store/store';
 const store=getStore()
export default class ReduxDemo extends Component {

    render() {
        // let initState = { num: 0,text:""};
        // let store = createStore(reducers);
        return (
            <Provider store={store}>
                <AddTodo/>
            </Provider>
        )
    }
}


// AppRegistry.registerComponent('reduxdemo', () => reduxdemo);
