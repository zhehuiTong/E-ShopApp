import React, { Component } from 'react'
import { Text, View, Image,StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

class FreshGoodsItem extends Component {

    static defaultProps = {
        goodName: '银色星芒刺绣网纱底裤',
        goodDescribe: '薄如蝉翼，丝滑如肌肤',
        price: '¥99'
    }

    render() {
        return (
            <View style={styles.FreshGoodsItem}>
                <Image style={styles.FreshGoodsImg} source={require('../../assest/img.png')} resizeMode={'stretch'}></Image>
                <Text style={styles.FreshGoodsName}> {this.props.goodName} </Text>
                <Text style={styles.FreshGoodsdDescribe}> {this.props.goodDescribe} </Text>
                <Text style={styles.FreshGoodsPrice}> ¥{this.props.price} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    FreshGoodsItem: {
        alignItems: 'center',
        margin: 4,
        width: 150,
        height: 180
    },
    FreshGoodsImg: {
        width: 100,
        height: 100
    },
    FreshGoodsPrice: {
        marginTop: 2,
        fontSize: 16,
        color: 'rgb(240, 72, 68)'
    },
    FreshGoodsName: {
        fontSize: 14,
    },
    FreshGoodsdDescribe: {
        marginTop: 2,
        color: '#999',
        fontSize: 13
    }
})

export default withNavigation(FreshGoodsItem)