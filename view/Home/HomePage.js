import React, { Component } from 'react'
import { Text, View, RefreshControl,ScrollView ,StyleSheet, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'
import HeaderSwpier from '../../components/HomePage/HeaderSwpier'
import HomeProducers from '../../components/HomePage/HomeProducers'
import SeckillZoom from '../../components/HomePage/SeckillZoom'
import FreshGoods from '../../components/HomePage/FreshGoods'
import TopicSelection from '../../components/HomePage/TopicSelection'
import TopicRecommend from '../../components/HomePage/TopicRecommend'
import GuessYouLike from '../../components/HomePage/GuessYouLike'

const {height} = Dimensions.get('window')

class HomePage extends Component {

    state = {
        refreshing: false,
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        setTimeout(() => {
            this.setState({refreshing: false});
        },1000)
      }

    render() {
        let {navigation} = this.props;
        return (
            <View style={styles.homeMainContainer}>
                <ScrollView style={styles.headerScrollViewContainer} 
                   horizontal = {false} 
                   refreshControl = {
                    <RefreshControl
                      refreshing={this.state.refreshing}
                      onRefresh={this._onRefresh}
                    />
                  }
                >
                  <HeaderSwpier />
                  <HomeProducers />
                  <SeckillZoom />
                  <FreshGoods />
                  <TopicRecommend />
                  <TopicSelection />
                  <GuessYouLike />
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
        flex: 1,
        height
    }
})

export default withNavigation(HomePage);