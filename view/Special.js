import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { withNavigation, SceneView } from 'react-navigation'
import HeaderNav from '../components/Special/HeaderNav'
import SpecialItem from '../components/Special/SpecialItem'

const {width} = Dimensions.get('window')

class Special extends Component {
    render() {
        return (
            <View>
                <ScrollView style={styles.specialMainContainer}>
                    <HeaderNav />
                    <View>
                        <SpecialItem />
                        <SpecialItem />
                        <SpecialItem />
                        <SpecialItem />
                        <SpecialItem />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    specialMainContainer: {
        backgroundColor: '#d9d9d9',
    },
})

export default withNavigation(Special)