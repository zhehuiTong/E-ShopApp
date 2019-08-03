import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity,StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

class CommonHeader extends Component {

    static defaultProps = {
        leftTitle: '默认',
        rightTitle: '更多推荐'
    }

    render() {
        return (
            <View style={styles.commonHeaderMainContainer}>
                <Text style={styles.commonHeaderLeftTitle}>{this.props.leftTitle}</Text>
                <TouchableOpacity style={styles.commonHeaderRightContainer}>
                    <Text style={styles.commonHeaderRightTitle}>{this.props.rightTitle}</Text>
                    <Image style={styles.commonHeaderRightImg} source={require('../../assest/forward.png')}></Image>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    commonHeaderMainContainer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        width: 360,
        height: 60,
    },
    commonHeaderRightContainer: {
        position:'absolute',
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    commonHeaderLeftTitle: {
        fontSize: 20
    },
    commonHeaderRightTitle: {
        fontSize: 15,
        color: '#999999'
    },
    commonHeaderRightImg: {
        marginLeft: 3,
        width: 30,
        height: 30
    }
})

export default withNavigation(CommonHeader)