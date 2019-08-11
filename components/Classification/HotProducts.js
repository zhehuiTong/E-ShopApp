import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'
import CommonHeader from '../HomePage/CommonHeader'
import FreshGoodsItem from '../HomePage/FreshGoodsItem'

const { width } = Dimensions.get('window')

class HotProducts extends Component {
    render() {
        return (
            <View style={styles.HotProductsMainContainer}>
                <CommonHeader leftTitle='热品推荐' />
                <View style={styles.HotProductsBodyContainer}>
                    <FreshGoodsItem goodName='ssssss' />
                    <FreshGoodsItem />
                    <FreshGoodsItem />
                    <FreshGoodsItem />
                    <FreshGoodsItem />
                    <FreshGoodsItem />
                    <FreshGoodsItem />
                    <FreshGoodsItem />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    HotProductsMainContainer: {
        alignItems: 'center',
        width,
        marginTop: 20,
        paddingBottom: 15,
        backgroundColor: '#fff',
    },
    HotProductsBodyContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
        width: 320
    },
})

export default withNavigation(HotProducts)