import React, { Component } from 'react'
import { Text, View, Image,StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

class SeckillItem extends Component {

    static defaultProps = {
        price: '秒杀价 ¥99',
        originalPrice: '299',
        goodsName: '银色星芒刺绣网纱底裤',
        describeTxt: '薄如蝉翼，丝滑如肌肤'
    }

    render() {
        return (
            <View style={styles.seckillItemMainContainer}>
                <View style={styles.seckillOriginalPrice}>
                    <Text style={styles.originalPriceTxt}>{this.props.originalPrice}</Text>
                </View>
                <Image style={styles.seckillGoodsImg} source={require('../../assest/img.png')} resizeMode={'stretch'}></Image>
                <Text style={styles.seckillPrice}> {this.props.price} </Text>
                <Text style={styles.seckillGoodsName}> {this.props.goodsName} </Text>
                <Text style={styles.seckillDescribeTxt}> {this.props.describeTxt} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    seckillItemMainContainer: {
        position: 'relative',
        flex: 0,
        alignItems: 'center',
        margin: 8,
        width: 140,
    },
    seckillOriginalPrice: {
        position: 'absolute',
        top: 0,
        right: 4,
        zIndex: 2,
        width: 30,
        height: 30,
        borderRadius:20,
        backgroundColor: 'rgb(240, 72, 68)'
    },
    seckillGoodsImg: {
        width: 120,
        height:80,
    },
    seckillPrice: {
        color: 'red',
        fontSize: 18
    },
    seckillGoodsName: {
        fontSize: 13,
    },
    seckillDescribeTxt: {
        fontSize: 12,
        color: '#999999'
    },
    originalPriceTxt: {
        color: '#fff',
        textDecorationLine: 'line-through',
        textAlign: 'center',
        lineHeight: 30,
    }
})

export default withNavigation(SeckillItem)
