import React, { Component } from 'react'
import { View, StyleSheet, TouchableNativeFeedback, Image } from 'react-native'

export default class HomeHeaderRight extends Component {
    render() {
        return (
            <View style={styles.headerRightContainer}>
                <TouchableNativeFeedback>
                    <Image style={{ width: 30, height: 30, marginLeft: 20 }} source={require('../../assest/搜索.png')}></Image>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>
                    <Image style={{ width: 30, height: 30, marginLeft: 20 }} source={require('../../assest/购物车满.png')}></Image>
                </TouchableNativeFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerRightContainer: {
        flexDirection: 'row',
        marginRight: 15
    },
})