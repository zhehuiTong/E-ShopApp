import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback, StyleSheet, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'
import HeaderNavItem from '../Special/HeaderNavItem'

const { width } = Dimensions.get('window')

class EvaluateHeader extends Component {

    state = {
        isHide: true,
        headerheight: 220,
        bottomHideTitlr: '展开全部',
    }

    _setHeaderHeight() {
        if (this.state.isHide) {
            this.setState({
                headerheight: 325,
                isHide: false,
                bottomHideTitlr: '隐藏全部',
            })
        } else {
            this.setState({
                headerheight: 220,
                isHide: true,
                bottomHideTitlr: '展开全部',
            })
        }
    }

    render() {
        return (
            <View style={styles.EvaluateHeaderMainContainer}>
                <View style={{...styles.EvaluateHeaderWraperContainer, height: this.state.headerheight}}>
                    <HeaderNavItem />
                    <HeaderNavItem />
                    <HeaderNavItem />
                    <HeaderNavItem />
                    <HeaderNavItem />
                    <HeaderNavItem />
                    <HeaderNavItem />
                    <HeaderNavItem />
                    <HeaderNavItem />
                    <HeaderNavItem />
                </View>
                <TouchableNativeFeedback onPress={this._setHeaderHeight.bind(this)}>
                    <View style={styles.EvaluateHeaderHideContainer}>
                        <Text>{this.state.bottomHideTitlr}</Text>
                    </View>
                </TouchableNativeFeedback>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    EvaluateHeaderMainContainer: {
        alignItems: 'center',
        width,
        backgroundColor: '#fff',
    },
    EvaluateHeaderWraperContainer: {
        flexDirection: 'row',
        // justifyContent: 'center',
        flexWrap: 'wrap',
        width: width * 0.96,
        overflow: 'hidden',
    },
    EvaluateHeaderHideContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width,
        height: 40,
        borderTopWidth: 1,
    }
})

export default withNavigation(EvaluateHeader)