import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'
import CommonHeader from './CommonHeader'

const {width, height} = Dimensions.get('window')

class TopicSelection extends Component {
    render() {
        return (
            <View style={styles.topicSelectionMainContainer}>
                <CommonHeader leftTitle='专题精选'/>
                <Image style={styles.topicGoodImg} source={require('../../assest/img.png')} resizeMode={'stretch'}></Image>
                <View style={styles.topicSelectionDescriptorContainer}>
                    <View style={styles.topicSelectionNameAndPriceContainer}>
                        <Text style={styles.topicSelectionNameTxt}>5个给春天的生活新提案</Text>
                        <Text style={styles.topicSelectionPriceTxt}>19.9元起</Text>
                    </View>
                    <Text style={styles.topicSelectionDescriptorTxt}>餐厨起居洗护好物</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    topicSelectionMainContainer: {
        alignItems: 'center',
        width,
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 15,
        backgroundColor: '#fff'
    },
    topicGoodImg: {
        width,
        height: 130
    },
    topicSelectionDescriptorContainer: {
        width: 350
    },
    topicSelectionDescriptorTxt: {
        marginTop: 5,
        color: '#999999',
        fontSize: 15
    },
    topicSelectionNameAndPriceContainer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        width: 350,
    },
    topicSelectionNameTxt: {
        fontSize: 18,
    },
    topicSelectionPriceTxt: {
        position: 'absolute',
        right: 0,
        color: 'rgb(240, 72, 68)',
        fontSize: 18,
    },
})

export default withNavigation(TopicSelection)