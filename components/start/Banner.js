import React, { Component } from 'react'
import { Text, View, Image, ScrollView, Dimensions, StyleSheet } from 'react-native'
import UtilHelper from '../../util/Util'

let { width, height } = Dimensions.get('window');

export default class Banner extends Component {

    state = {
        curIndex: 0,
        bannerArray: []
    }

    componentDidMount() {
        let tBannerArray = this.state.bannerArray;
        for (let i = 0; i < 4; i++) {
            tBannerArray.push(width * i)
        }
        this.state.bannerArray = tBannerArray
    }


    _scrollEnd(e) {
        let tScrollViewElement = this.sv
        let curItemX = this.state.bannerArray[this.state.curIndex] + 120;
        let tOffsetX = e.nativeEvent.contentOffset.x;
        if (tOffsetX < curItemX) {
            tScrollViewElement.scrollTo({ x: this.state.bannerArray[this.state.curIndex], y: 0, animated: true })
        } else {
            tScrollViewElement.scrollTo({ x: this.state.bannerArray[this.state.curIndex + 1], y: 0, animated: true })
            this.state.curIndex++
        }
    }

    render() {
        return (
            <ScrollView style={styles.bannerMainContainer}
                horizontal={true}
                onScrollEndDrag={this._scrollEnd.bind(this)}
                ref={ref => {this.sv = ref}}
            >
                <View style={styles.bannerItem}>
                    <Text style={styles.bannerTitle}>红包任意发</Text>
                    <Text style={styles.bannerDescribe}>百万现金 千万神卷</Text>
                    <Image style={styles.bannerImg} source={require('../../assest/img.png')}></Image>
                </View>
                <View style={styles.bannerItem}>
                    <Text style={styles.bannerTitle}>大牌齐助阵</Text>
                    <Text style={styles.bannerDescribe}>品牌盛典 明星云集</Text>
                    <Image style={styles.bannerImg} source={require('../../assest/img.png')}></Image>
                </View>
                <View style={styles.bannerItem}>
                    <Text style={styles.bannerTitle}>超级秒杀日</Text>
                    <Text style={styles.bannerDescribe}>海量爆款 疯狂秒杀</Text>
                    <Image style={styles.bannerImg} source={require('../../assest/img.png')}></Image>
                </View>
                <View style={styles.bannerItem}>
                    <Text style={styles.bannerTitle}>会员专享福利</Text>
                    <Text style={styles.bannerDescribe}>更多特惠 提前开抢</Text>
                    <Image style={styles.bannerImg} source={require('../../assest/img.png')}></Image>
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
        flexDirection: 'column',
        width: width,
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    bannerTitle: {
        marginTop: UtilHelper.getRealHeight(height, 150),
        fontWeight: 'bold',
        fontSize: UtilHelper.getRealWidth(width, 30)
    },
    bannerDescribe: {
        marginTop: UtilHelper.getRealHeight(height, 10),
        fontSize: UtilHelper.getRealWidth(width, 20)
    },
    bannerImg: {
        marginTop: UtilHelper.getRealHeight(height, 30),
    }
})