import React, { Component } from 'react'
import { Text, View, Image, TouchableNativeFeedback, StyleSheet, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'

const { width } = Dimensions.get('window')

class HeaderNavItem extends Component {

    static defaultProps = {
        imgUrl: '../../assest/img.png',
        title: '默认模拟',
    }

    render() {
        return (
            <TouchableNativeFeedback>
                <View style={styles.headerNavItemMainContainer}>
                    <Image style={styles.headerNavItemImg} source={require('../../assest/img.png')} resizeMode={'stretch'}></Image>
                    <Text> {this.props.title} </Text>
                </View>
            </TouchableNativeFeedback>

        )
    }
}

const styles = StyleSheet.create({
    headerNavItemMainContainer: {
        alignItems: 'center',
        width: 94,
        height: 110,
    },
    headerNavItemImg: {
        width: 80,
        height: 80,
    }
})

export default withNavigation(HeaderNavItem)