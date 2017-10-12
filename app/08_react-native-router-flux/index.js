/**
 * Created by dell on 2017/5/2.
 */
import React,{Component} from 'react';
import {Router,Scene} from 'react-native-router-flux';
import PageOne from './pageOne';
import PageTwo from './pageTwo';
export  default class App extends Component{
    render(){
        return(
    <Router>
        <Scene key="root">
            <Scene key="pageOne" component={PageOne} title="第1页面" initial="true"/>
            <Scene key="pageTwo" component={PageTwo} title="第2个页面" />
        </Scene>

    </Router>
        )
    }
}