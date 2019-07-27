import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback, Image } from 'react-native'

export default class HomeHeaderLeft extends Component {
    render() {
        return (
            <TouchableNativeFeedback>
                <Image style={{ width: 30, height: 30, marginLeft: 15 }} source={require('../../assest/提醒.png')}></Image>
            </TouchableNativeFeedback>
        )
    }
}
