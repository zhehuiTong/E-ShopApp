import React, { Component } from 'react'
import { Text, View, Image, TouchableHighlight, StyleSheet, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'

const { width, height } = Dimensions.get('window')

class TopEvaluate extends Component {
    render() {
        return (
            <View style={styles.topEvaluateMainContainer}>
                <View style={styles.topEvaluateHeaderContainer}>
                    <Text style={styles.topEvaluateHeaderTitle}>精选评价</Text>
                    <View style={styles.topEvaluateHeaderNavContainer}>
                        <View style={styles.topEvaluateHeaderNavBtn}>
                            <Text>全部</Text>
                        </View>
                        <View style={styles.topEvaluateHeaderNavBtn}>
                            <Text>关注</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    topEvaluateMainContainer: {
        alignItems: 'center',
        marginTop: 20,
        width,
    },
    topEvaluateHeaderContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width,
        backgroundColor: '#fff',
    },
    topEvaluateHeaderNavContainer: {
        flexDirection: 'row',
        width,
        borderColor: '#999',
    },
    topEvaluateHeaderNavBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.5,
        height: 40,
        borderBottomColor: "#1abc9c",
        borderBottomWidth: 2,
    },
    topEvaluateHeaderTitle: {
        fontSize: 18,
        height: 66,
        lineHeight: 66,
    }
})

export default withNavigation(TopEvaluate)