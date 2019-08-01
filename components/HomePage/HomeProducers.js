import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import HomeProducerItem from './HomeProducerItem'

export default class HomeProducers extends Component {
    render() {
        return (
            <View style={styles.producerMainContainer}>
                <View style={styles.producerHeaderContainer}>
                    <View style={styles.producerTitleContainer}>
                        <Text style={styles.producerTitle}>品牌制造商直供</Text>
                    </View>
                    <View style={styles.producerMoreContainer}>
                        <TouchableOpacity style={styles.producerMoreButton}>
                            <Text>更多推荐</Text>
                            <Image style={styles.producerMoreImg} source={require('../../assest/forward.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.producerBodyContainer}>
                    <HomeProducerItem title="WMF制造商" price='9.9元起' />
                    <HomeProducerItem title="爱慕制造商" price='35元起' />
                    <HomeProducerItem title="MUJI制造商" price='12.9元起' />
                    <HomeProducerItem title="内野制造商" price='29元起' />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    producerMainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#fff'
    },
    producerHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 400,
        height: 40,
    },
    producerBodyContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    producerMoreContainer: {
        width: 240,
        alignItems: 'flex-end'
    },
    producerMoreButton: {
        flexDirection: 'row',
        alignItems: "center",
        width: 60,
        height: 20,
    },
    producerMoreImg: {
        marginLeft: 5,
        width: 20,
        height: 20
    },
    producerTitle: {
        fontSize: 20,
    }
})