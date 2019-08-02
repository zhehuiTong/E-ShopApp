import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation';
import SeckillHeader from './SeckillHeader'
import SeckillItem from './SeckillItem'

class SeckillZoom extends Component {
    render() {
        return (
            <View style={styles.seckillMainCotainer}>
                <SeckillHeader />
                <View style={styles.seckillBodyContainer}>
                    <SeckillItem />
                    <SeckillItem />
                    <SeckillItem />
                    <SeckillItem />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    seckillMainCotainer: {
        flexDirection: 'column',
        alignItems: "center",
        marginTop: 20,
        paddingBottom: 20,
        backgroundColor: '#fff'
    },
    seckillBodyContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        width: 312,
        height: 300,
    }
})

export default withNavigation(SeckillZoom)
