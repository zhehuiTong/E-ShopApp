import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback,ScrollView ,StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation';
import HeaderSwpier from '../../components/HomePage/HeaderSwpier';
import HomeProducers from '../../components/HomePage/HomeProducers';
import SeckillZoom from '../../components/HomePage/SeckillZoom'

class HomePage extends Component {
    render() {
        let {navigation} = this.props;
        return (
            <View style={styles.homeMainContainer}>
                <ScrollView style={styles.headerScrollViewContainer}>
                  <HeaderSwpier />
                  <HomeProducers />
                  <SeckillZoom />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeMainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d9d9d9'
    },
    headerScrollViewContainer: {
        flex: 1
    }
})

export default withNavigation(HomePage);