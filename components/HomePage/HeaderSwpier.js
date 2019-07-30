import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback, Image, StyleSheet, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation';
import Swiper from 'react-native-swiper'

const { width, height } = Dimensions.get('window')

class HeaderSwpier extends Component {
    render() {
        return (
            <View>
                <Swiper style={{ width: width, height: 200 }} showsButtons={false}>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
                <View style={styles.labelBarMainContainer}>
                    <View style={styles.labelBarBodyContainer}>
                        <View style={styles.labelBarItem}>
                            <Image style={styles.labelImg} source={require('../../assest/topic.png')}></Image>
                            <TouchableNativeFeedback>
                                <Text>话题</Text>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={styles.labelBarItem}>
                            <Image style={styles.labelImg} source={require('../../assest/select.png')}></Image>
                            <TouchableNativeFeedback>
                                <Text>优选</Text>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={styles.labelBarItem}>
                            <Image style={styles.labelImg} source={require('../../assest/gift.png')}></Image>
                            <TouchableNativeFeedback>
                                <Text>特惠</Text>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={styles.labelBarItem}>
                            <Image style={styles.labelImg} source={require('../../assest/sign.png')}></Image>
                            <TouchableNativeFeedback>
                                <Text>签到</Text>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
                <View style={styles.newsBarMainContainer}>
                    <View style={styles.newsBarBodyContainer}>
                        <Image style={styles.newNotifyImg} source={require('../../assest/broadcast.png')}></Image>
                        <View style={styles.newsSwpierContainer}>
                            <Swiper showsPagination={false} horizontal={false} autoplay={true} scrollEnabled={false}>
                                <View style={styles.newsSwiperItem}>
                                    <Text>优品汇成为中国最大家电零售商</Text>
                                </View>
                                <View style={styles.newsSwiperItem}>
                                    <Text>优品汇线下服务店突破1700家</Text>
                                </View>
                                <View style={styles.newsSwiperItem}>
                                    <Text>优品汇自营家电清洗服务上线</Text>
                                </View>
                            </Swiper>
                        </View>
                        <View style={styles.newsSwiperButton}>
                            <TouchableNativeFeedback>
                                <Text style={styles.newsSwiperButtonTxt}>详情</Text>
                            </TouchableNativeFeedback>
                        </View>

                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerSwiperMainContainer: {
        flex: 1,
    },
    labelBarMainContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 60,
        backgroundColor: '#fff'
    },
    labelBarBodyContainer: {
        flexDirection: 'row',
        width: 350,
        justifyContent: 'space-between',
    },
    newsBarMainContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 40,
        borderTopWidth: 1,
        borderTopColor: 'gray',
        backgroundColor: '#fff'
    },
    newsBarBodyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 370,
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    labelBarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelImg: {
        marginTop: 5,
        width: 30,
        height: 30,
    },
    newNotifyImg: {
        width: 30,
        height: 30,
    },
    newsSwpierContainer: {
        width: 200,
        overflow: 'hidden',
    },
    newsSwiperItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    newsSwiperButton: {
        width: 50,
        height: 26,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 70,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'rgb(26, 188, 156)',
    },
    newsSwiperButtonTxt: {
        color: 'rgb(26, 188, 156)',
    }
})

export default withNavigation(HeaderSwpier);