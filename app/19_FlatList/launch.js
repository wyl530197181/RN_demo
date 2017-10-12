/**
 * 2017/7/20
 * 作者：王园龙
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Modal,
    PixelRatio,
    View,
    FlatList
} from 'react-native';


export default class FlatListTest extends Component {

    constructor(props) {
        super(props);//这一句不能省略，照抄即可
        this.state = {
            dataSource: this._sourceData,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}
                />

            </View>
        )
    };

    _renderItem = (item, index) => {
        return (
            <TouchableOpacity
                activeOpacity={0.5}

            >
                <Text style={flatListStyles.item}>{item.name}</Text>
            </TouchableOpacity>
        );
    };
    _onHeader = () => (
        <Text style={{fontSize: 20, FontWeight: bold}}>
            热门电影
        </Text>
    );
    _onFooter = () => (
        <Text style={{fontSize: 14,}}>
            到底了，没有啦!
        </Text>
    );
    _createEmptyView = () => (
        <Text style={{fontSize: 40,}}>
            暂时没有数据哦
        </Text>
    );
    _sourceData = [
        {name: '战狼Ⅱ'},
        {name: '绣春刀II：修罗战场'},
        {name: '神偷奶爸3'},
        {name: '神奇女侠'},
        {name: '摔跤吧，爸爸'},
        {name: '悟空传'},
        {name: '闪光少女'},
        {name: '攻壳机动队'},
        {name: '速度与激情8'},
        {name: '蝙蝠侠大战超人'},
        {name: '攻壳机动队'},
        {name: '速度与激情8'},
        {name: '蝙蝠侠大战超人'}
    ]


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
