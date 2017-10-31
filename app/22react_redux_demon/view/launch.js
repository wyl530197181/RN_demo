import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {connect, Provider} from 'react-redux';
import {plus, reduce} from '../action/action';
import {getStore} from '../store/store';

// const store = getStore();

export default class ReduxDemo02 extends Component {
    constructor() {
        super();
        this.state = {
            store: null
        }
    }

    componentDidMount() {
        this.state.store = getStore();
        this.setState({
            store: this.state.store
        })
    }

    render() {
        if (!this.state.store) {
            return (
                <View style={styles.container}>
                    <Text>
                        正在加载.....
                    </Text>
                </View>
            )
        }
        return (
            <Provider store={this.state.store}>
                <View style={styles.container}>
                    <Counter1/>
                    <Counter1/>
                </View>
            </Provider>
        );
    }
}

class __Counter1 extends Component {
    render() {
        console.log(this.props);
        return (
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 20, marginRight: 20}}>计数器：{this.props.calculate.c}</Text>
                    <Text style={{fontSize: 20}} onPress={this.addCounter.bind(this)}>点击我+</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 20, marginRight: 20}}>计数器：{this.props.calculate.c}</Text>
                    <Text style={{fontSize: 20}} onPress={this.reduceCounter.bind(this)}>点击我讲-</Text>
                </View>
            </View>
        );
    }

    addCounter() {
        //生成一个action 分发
        //dispatch 是connect 高级组件自带的
        this.props.dispatch(plus(1));
    }

    reduceCounter() {
        //生成一个action 分发
        this.props.dispatch(reduce(1));
    }
}

//store (all)  结构
/*store={
  calculate:{c:13},
  navigator:{id: name: ..}
  ...
}*/

//mapStateToProps(store)可以拿到自己关心的数据

//配置map映射表 state为reduce里面的state={calculate: {…}}
const mapStateToProps = state => {
    console.log(state);
    return {
        //state.XXX 必须与reducer同名
        calculate: state.calculate
    }
}


let Counter1 = connect(mapStateToProps)(__Counter1);

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
});


