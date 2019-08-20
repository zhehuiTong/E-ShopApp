import React, { Component } from 'react'
import { Text, View, Image, TouchableNativeFeedback, StyleSheet, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'

const { width, height } = Dimensions.get('window')

class TopEvaluateItem extends Component {
    render() {
        return (
            <View style={styles.topEvaluateItemContainer}>
                <View style={styles.topEvaluateItemHeaderContainer}>
                    <Image style={styles.topEvaluateItemHeaderImg} source={require('../../assest/headImg.png')} resizeMode={'stretch'}></Image>
                    <View style={styles.userInfoWraperContainer}>
                        <Text>Windir</Text>
                        <Text>学生/深圳</Text>
                    </View>
                    <TouchableNativeFeedback>
                        <Image style={styles.topEvaluateItemMoreImg} source={require('../../assest/more.png')} resizeMode={'stretch'}></Image>
                    </TouchableNativeFeedback>
                </View>

                <View style={styles.topEvaluateItemBodyContainer}>
                    <View style={styles.topEvaluateItemImgGroup}>
                        <Image style={styles.ImgGroupitem} source={require('../../assest/img.png')} resizeMode={'stretch'}></Image>
                        <Image style={styles.ImgGroupitem} source={require('../../assest/img.png')} resizeMode={'stretch'}></Image>
                        <Image style={styles.ImgGroupitem} source={require('../../assest/img.png')} resizeMode={'stretch'}></Image>
                    </View>
                    <Text
                        style={styles.topEvaluateItemDescribeTxt}
                        numberOfLines={2}
                        ellipsizeMode={'tail'}
                    >拿来看也没看就洗了，发现有些不对劲，吊牌都没有，洗的时候还有泡沫，细看领口有一处缝补的痕迹，虽然是特价买的ssssssss</Text>
                </View>

                <View style={styles.topEvaluateItemFooterContainer}>
                    <View style={styles.EvaluateItemFooterWraper}>
                        <Text>一周前</Text>
                        <View style={styles.loveAndGoodCountContainer}>
                            <Image style={styles.loveAndCommitImg} source={require('../../assest/love.png')} resizeMode={'stretch'}></Image>
                            <Text>1000</Text>
                            <Image style={styles.loveAndCommitImg} source={require('../../assest/comment.png')} resizeMode={'stretch'}></Image>
                            <Text>1000</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    topEvaluateItemContainer: {
        alignItems: 'center',
        marginTop: 15,
        width,
        backgroundColor: '#fff'
    },
    topEvaluateItemHeaderContainer: {
        position: 'relative',
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        width: width * 0.9,
    },
    topEvaluateItemBodyContainer: {
        marginTop: 8,
        alignItems: 'center',
        width: width * 0.9,
    },
    topEvaluateItemFooterContainer: {
        alignItems: 'center',
        marginTop: 8,
        width,
        borderTopWidth: 1,
        borderTopColor: '#dbdbdb',
    },
    EvaluateItemFooterWraper: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.9,
        height: 50,
    },
    topEvaluateItemImgGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 140,
    },
    topEvaluateItemHeaderImg: {
        width: 50,
        height: 50,
    },
    userInfoWraperContainer: {
        justifyContent: 'space-around',
        marginLeft: 8,
        width: 80,
        height: 50,
    },
    loveAndGoodCountContainer: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        right: 0,
        height: 50,
    },
    topEvaluateItemMoreImg: {
        position: 'absolute',
        right: 0,
        width: 30,
        height: 30,
    },
    ImgGroupitem: {
        width: 120,
        height: 120,
    },
    topEvaluateItemDescribeTxt: {
        width: width * 0.85,
        height: 40,
    },
    loveAndCommitImg: {
        marginLeft: 5,
        width: 23,
        height: 23,
    }
})

export default withNavigation(TopEvaluateItem)