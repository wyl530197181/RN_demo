/**
 * Created by dell on 2017/4/28.
 */
// import React, {Component} from 'react';
// import {
//     Text,
//     View,
//     StyleSheet,
//     TouchableOpacity
// } from 'react-native';
// export default class JsxDemon extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Parent/>
//             </View>
//         )
//     }
// };
// class Parent extends Component {
//     render() {
//         return (
//             <View>
//                 <Children ref="children" name="我是父组件向子组件传递的参数" test={this.onParentClick1}/>
//                 <Text>我是父组件</Text>
//                 <TouchableOpacity onPress={this.onParentClick2}>
//                     <Text>
//                         我是父组件按钮
//                     </Text>
//                 </TouchableOpacity>
//             </View>
//         )
//     }
//
//     onParentClick1 = () => {
//         console.log('我是父组件传递给子组件的方法');
//     };
//     onParentClick2 = () => {
//         console.log(this.refs.children.state.name);
//         this.refs.children.onChildrenClick2();    }
// }
// class Children extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "我是子组件向父组件传递的参数"
//         }
//     }
//
//     render() {
//         return (
//             <View>
//                 <Text>我是子组件</Text>
//                 <TouchableOpacity onPress={this.onChildrenClick1}>
//                     <Text>我是子组件按钮</Text>
//                 </TouchableOpacity>
//             </View>
//         )
//     }
//
//     onChildrenClick1 = () => {
//         console.log(this.state.name);
//         this.props.test();
//     }
// }
// onChildrenClick2 = () =>{
//     console.log('我是子组件向父组件传递的方法');
// }
//
// const styles = StyleSheet.create({
//         container: {
//             flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center',
//         }
//
//     }
// );


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class JsxDemo extends Component {
    render() {
        return (
            <View style={styles.bg}>
                <Parents />
            </View>
        );
    }
}

class Parents extends Component {
    render() {

        return (
            <View style={styles.parents}>
                <Childern ref='childern' name='我是父组件向子组件传递的参数' test={this.onParentClick1}/>
                <Text >
                    我是父组件
                </Text>
                <TouchableOpacity onPress={this.onParentClick2}>
                    <Text style={styles.btn}>
                        我是父组件按钮
                    </Text>
                </TouchableOpacity>


            </View>
        )
    }

    onParentClick1 = () => {

        console.log('我是从父组件传递到子组件的方法');

    };
    onParentClick2 = () => {

        console.log(this.refs.childern.state.name);
        this.refs.childern.onChildenCilck2();

    }
}

class Childern extends Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '我是子组件向父组件传递的参数'
        };
    }

    onChildenCilck1 = () => {
        console.log(this.props.name);
        this.props.test();
    };

    onChildenCilck2 = () => {
        console.log('我是子组件向父组件传递的方法');
    };

    render() {
        return (
            <View style={styles.childern}>
                <Text> 我是子组件 </Text>
                <TouchableOpacity onPress={this.onChildenCilck1}>
                    <Text style={styles.btn}>
                        我是子组件按钮
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    parents: {
        width: 300,
        height: 300,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    childern: {
        width: 100,
        height: 100,
        marginTop: 10,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'

    },
    btn: {

        backgroundColor: 'yellow',

    }

});