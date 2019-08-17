import React, { Component } from 'react'
import { Text, View, Image, TouchableHighlight, StyleSheet, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'

const { width, height } = Dimensions.get('window')

class DarenItem extends Component {

   static defaultProps = {
       name: '童哲辉',
       commentCount: 101,
       fansCount: 1002,
   }

    render() {
        return (
            <View style={styles.darenItemMainContainer}>
                <Image style={styles.arenItemImg} source={require('../../assest/headImg.png')} resizeMode={'stretch'}></Image>
                <Text>{this.props.name}</Text>
                <Text>{this.props.commentCount} 条 / {this.props.fansCount} 粉丝</Text>
                <TouchableHighlight>
                    <View style={styles.darenItemFollowBtn}>
                        <Text style={styles.darenItemFollowTxt}>关注</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    darenItemMainContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 160,
        borderWidth: 0.5,
    },
    darenItemFollowBtn: {
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#1abc9c',
    },
    darenItemFollowTxt: {
        color: '#fff',
    },
    arenItemImg: {
        width: 60,
        height: 60,
    }
})

export default withNavigation(DarenItem)