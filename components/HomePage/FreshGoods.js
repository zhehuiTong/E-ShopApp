import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import CommonHeader from './CommonHeader'
import FreshGoodsBody from './FreshGoodsBody'

class FreshGoods extends Component {
    render() {
        return (
            <View style={styles.freshGoodsMainContainer}>
                <CommonHeader leftTitle='新鲜好物' />
                <FreshGoodsBody />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    freshGoodsMainContainer: {
        alignItems: 'center',
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 15,
        backgroundColor: '#fff'
    }
})

export default withNavigation(FreshGoods)