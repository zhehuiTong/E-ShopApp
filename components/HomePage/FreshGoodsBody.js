import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'
import FreshGoodsItem from './FreshGoodsItem'

const { width, height } = Dimensions.get('window')

class FreshGoodsBody extends Component {
    render() {
        return (
            <View style={styles.GoodsBodyMainContainer}>
                <ScrollView contentContainerStyle={styles.FreshGoodsScrollViewContainer} horizontal={true}>
                    <FreshGoodsItem />
                    <FreshGoodsItem />
                    <FreshGoodsItem />
                    <FreshGoodsItem />
                    <FreshGoodsItem />
                    <TouchableOpacity style={styles.FreshGoodsScrollAddContainer}>
                        <Image style={styles.seeMoreImg} source={require('../../assest/eye.png')} resizeMode={'stretch'}></Image>
                        <Text style={styles.seeMoreTxt}>查看更多</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    GoodsBodyMainContainer: {
        width: width,
    },
    FreshGoodsScrollViewContainer: {
        flexDirection: 'row',
    },
    FreshGoodsScrollAddContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
        width: 150,
        height: 180,
        borderWidth: 1,
        borderColor: '#dbdbdb'
    },
    seeMoreImg: {
        marginLeft: 5,
        width: 50,
        height: 50
    },
    seeMoreTxt: {
        color: '#dbdbdb',
        fontSize: 16
    }
})

export default withNavigation(FreshGoodsBody)