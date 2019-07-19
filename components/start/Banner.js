import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions, StyleSheet } from 'react-native'
import UtilHelper from '../../util/Util'

let {width, height} = Dimensions.get('window');

export default class Banner extends Component {

    state = {
        curIndex:0,
        bannerArray: []
    }

    componentDidMount() {
        let tBannerArray = this.state.bannerArray;
        for (let i = 0; i < 4; i++) {
            tBannerArray. push(width * i)
        }
        this.state.bannerArray = tBannerArray
    }
    

    _scrollEnd(e){
        let tScrollViewElement = this.refs.sv
        let curItemX = this.state.bannerArray[this.state.curIndex] + 200;
        let tOffsetX = e.nativeEvent.contentOffset.x;
        if ( tOffsetX < curItemX ) {
            tScrollViewElement.scrollTo({x: this.state.bannerArray[this.state.curIndex],y: 0, animated: true})
        } else {
            tScrollViewElement.scrollTo({x: this.state.bannerArray[this.state.curIndex + 1],y: 0, animated: true})
            this.state.curIndex++
        }
    }

    render() {
        return (
            <ScrollView style={styles.bannerMainContainer}
              horizontal={true}
              onScrollEndDrag = {this._scrollEnd.bind(this)}
              ref = 'sv'
            >
                <View style={styles.bannerItem}>
                    <Text>第一个</Text>
                </View>
                <View style={styles.bannerItem}>
                    <Text>第2个</Text>
                </View>
                <View style={styles.bannerItem}>
                    <Text>第3个</Text>
                </View>
                <View style={styles.bannerItem}>
                    <Text>第4个</Text>
                </View>
            </ScrollView>
        )
    }
}



let styles = StyleSheet.create({
    bannerMainContainer: {
        flex: 1,
    },
    bannerItem: {
        flex: 1,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    }
})