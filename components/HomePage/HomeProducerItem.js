import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class HomeProducerItem extends Component {
    render() {
        return (
            <View style={styles.producerItemMainContainer}>
                <Text style={styles.producerTitle}>{this.props.title ?this.props.title :'默认'}</Text>
                <View style={styles.producerPriceContainer}>
                    <Text style={styles.producerPriceText}>{this.props.price ?this.props.price :'9.9元'}</Text>
                    <Image style={styles.producerPriceImg} source={require('../../assest/new.png')}></Image>
                </View>
                <Image style={styles.producerImg} source={require('../../assest/img.png')} resizeMode={'stretch'}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    producerItemMainContainer: {
        flexDirection: 'column',
        flex: 0,
        width: 180,
        height: 160,
        margin: 8,
    },
    producerPriceContainer: {
        flexDirection: 'row',
        position: 'relative',
        width: 180,
        alignItems: 'center',
    },
    producerTitle: {
        fontSize: 20
    },
    producerPriceText: {
        fontSize: 23
    },
    producerPriceImg: {
        position: 'absolute',
        width: 30,
        height: 30,
        right: 0
    },
    producerImg: {
        width: 180,
        height: 95
    }
})
