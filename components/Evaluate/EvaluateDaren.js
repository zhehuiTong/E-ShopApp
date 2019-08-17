import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'
import DarenItem from './DarenItem'

const { width, height } = Dimensions.get('window')

class EvaluateDaren extends Component {
    render() {
        return (
            <View style={styles.evaluateDarenMainContainer}>
                <View style={styles.evaluateDarenHeaderContainer}>
                    <Text style={styles.evaluateDarenHeaderTitle}>评价达人</Text>
                </View>
                <FlatList style={styles.evaluateDarenBodyContainer}
                  data={[1,2,3,4,5,6]}
                  renderItem={(item) => <DarenItem />}
                  horizontal={true}
                ></FlatList>
                <View style={styles.evaluateDarenFooterContainer}>
                    <Text>查看全部</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    evaluateDarenMainContainer: {
        marginTop: 20,
        width,
        backgroundColor: '#fff',
    },
    evaluateDarenHeaderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width,
        height: 60,
        borderBottomColor: '#999',
        borderBottomWidth: 1,
    },
    evaluateDarenBodyContainer: {
        width,
    },
    evaluateDarenFooterContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width,
        height: 50,
    },
    evaluateDarenHeaderTitle: {
        fontSize: 18
    }
})

export default withNavigation(EvaluateDaren)