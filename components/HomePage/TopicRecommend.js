import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'
import CommonHeader from './CommonHeader'
import TopicRecommendItem from './TopicRecommendItem'

const {width} = Dimensions.get('window')

class TopicRecommend extends Component {
    render() {
        return (
            <View style={styles.topicRecommendMainContainer}>
                <CommonHeader leftTitle='人气推荐'/>
                <View style={styles.topicRecommendBodyCOntainer}>
                    <TopicRecommendItem />
                    <TopicRecommendItem />
                    <TopicRecommendItem />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    topicRecommendMainContainer: {
        alignItems: 'center',
        width,
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 15,
        backgroundColor: '#fff'
    },
    topicRecommendBodyCOntainer: {
        alignItems: 'center',
        width: width * 0.85,
        borderTopWidth: 1,
        borderTopColor: '#999'
    }
})

export default withNavigation(TopicRecommend)