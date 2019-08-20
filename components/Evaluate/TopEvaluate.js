import React, { Component } from 'react'
import { Text, View, Image, TouchableNativeFeedback, StyleSheet, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'
import TopEvaluateItem from './TopEvaluateItem'

const { width, height } = Dimensions.get('window')
const navBtnStyles = {
    "全部" : {},
    "关注" : {}
}

class TopEvaluate extends Component {

    state = {
        navBtnStyles: navBtnStyles,
    }

    _showBottomLine(navBtnTitle) {
        for(let item in navBtnStyles) {
            navBtnStyles[item] = {}
        }
        navBtnStyles[navBtnTitle] = {
            borderBottomColor: "#1abc9c",
            borderBottomWidth: 2
        }
        this.setState({
            navBtnStyles: navBtnStyles
        })
    }

    render() {
        let tNavBtnStyles = this.state.navBtnStyles

        return (
            <View style={styles.topEvaluateMainContainer}>
                <View style={styles.topEvaluateHeaderContainer}>
                    <Text style={styles.topEvaluateHeaderTitle}>精选评价</Text>
                    <View style={styles.topEvaluateHeaderNavContainer}>
                        <TouchableNativeFeedback onPress={() => {
                            this._showBottomLine('全部')
                        }}>
                            <View style={{...styles.topEvaluateHeaderNavBtn, ...tNavBtnStyles['全部']}}>
                                <Text>全部</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => {
                            this._showBottomLine('关注')
                        }}>
                            <View style={{...styles.topEvaluateHeaderNavBtn, ...tNavBtnStyles['关注']}}>
                                <Text>关注</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>

                <TopEvaluateItem />
                <TopEvaluateItem />
                <TopEvaluateItem />
                <TopEvaluateItem />
                <TopEvaluateItem />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    topEvaluateMainContainer: {
        alignItems: 'center',
        marginTop: 20,
        width,
    },
    topEvaluateHeaderContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width,
        backgroundColor: '#fff',
    },
    topEvaluateHeaderNavContainer: {
        flexDirection: 'row',
        width,
        borderColor: '#999',
    },
    topEvaluateHeaderNavBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.5,
        height: 40,
        borderBottomColor: "#fff",
        borderBottomWidth: 2
    },
    topEvaluateHeaderTitle: {
        fontSize: 18,
        height: 66,
        lineHeight: 66,
    }
})

export default withNavigation(TopEvaluate)