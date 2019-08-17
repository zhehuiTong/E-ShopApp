import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'
import EvaluateHeader from '../components/Evaluate/EvaluateHeader'
import EvaluateDaren from '../components/Evaluate/EvaluateDaren'
import TopEvaluate from '../components/Evaluate/TopEvaluate'

const { width, height } = Dimensions.get('window')

class Evaluate extends Component {
    render() {
        return (
            <View>
                <ScrollView style={styles.EvaluateMaianContainer}>
                    <EvaluateHeader />
                    <EvaluateDaren />
                    <TopEvaluate />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    EvaluateMaianContainer: {
        width,
        backgroundColor: '#e4e4e4',
    }
})

export default withNavigation(Evaluate)