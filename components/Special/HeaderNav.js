import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'
import HeaderNavItem from './HeaderNavItem'

const {width} = Dimensions.get('window')

class HeaderNav extends Component {
    render() {
        return (
            <View style={styles.headerNavMainContainer}>
                <HeaderNavItem title='全部专题' />
                <HeaderNavItem title='服装专题' />
                <HeaderNavItem title='餐厨专题' />
                <HeaderNavItem title='配件专题' />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerNavMainContainer: {
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        width,
        height: 150,
        backgroundColor: '#fff',
    }
})

export default withNavigation(HeaderNav)