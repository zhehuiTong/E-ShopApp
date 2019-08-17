import React, { Component } from 'react'
import { Text, View, Image, TouchableNativeFeedback, StyleSheet, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'
import AboutSubjectItem from '../Classification/AboutSubjectItem'

const { width } = Dimensions.get('window')

class SpecialItem extends Component {
    render() {
        return (
            <View style={styles.specialItemMainContainer}>
                <View style={styles.specialItemHeaderContainer}>
                    <Image style={styles.specialItemHeaderImg} source={require('../../assest/img.png')} resizeMode={'stretch'}></Image>
                    <Text style={styles.specialItemHeaderTxt}>餐厨专题</Text>
                </View>
                <AboutSubjectItem />
                <View style={styles.specialItemFooterContainer}>
                    <TouchableNativeFeedback>
                        <View style={styles.specialItemWraperContainer}>
                            <Image style={styles.goodAndLookImg} source={require('../../assest/love.png')} resizeMode={'stretch'}></Image>
                            <Text style={styles.goodAndLookTxt}>1000</Text>
                            <Image style={styles.goodAndLookImg} source={require('../../assest/eye.png')} resizeMode={'stretch'}></Image>
                            <Text style={styles.goodAndLookTxt}>1000</Text>
                            <View style={styles.specialItemCommentContainer}>
                                <Image style={styles.goodAndLookImg} source={require('../../assest/comment.png')} resizeMode={'stretch'}></Image>
                                <Text style={styles.goodAndLookTxt}>1000</Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    specialItemMainContainer: {
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: "#fff",
    },
    specialItemHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.88,
        height: 40,
    },
    specialItemFooterContainer: {
        alignItems: 'center',
        borderTopWidth: 1,
        width,
    },
    specialItemWraperContainer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.88,
        height: 48,
    },
    specialItemCommentContainer: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        right: 0,
        width: 80,
        height: 48,
    },
    specialItemHeaderImg: {
        width: 30,
        height: 30,
    },
    specialItemHeaderTxt: {
        fontSize: 20,
        marginLeft: 5,
    },
    goodAndLookImg: {
        marginLeft: 5,
        width: 30,
        height: 30,
    },
    goodAndLookTxt: {
        fontSize: 20,
    }
})

export default withNavigation(SpecialItem)