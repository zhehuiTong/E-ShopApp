import React, { Component } from 'react'
import { Text, View, Image, TouchableNativeFeedback, StyleSheet, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'

const { width, height } = Dimensions.get('window')

class CommonHeaderItem extends Component {

    static defaultProps = {
        imgUrl: '../../assest/img.png',
        title: '默认'
    }

    render() {
        return (
            <TouchableNativeFeedback>
                <View style={styles.commonHeaderItemMainContainer}>
                    <Image style={styles.headerItemImg} source={require('../../assest/img.png')} resizeMode={'stretch'}></Image>
                    <Text style={{ marginTop: 10 }}> {this.props.title} </Text>
                </View>
            </TouchableNativeFeedback>

        )
    }
}

const styles = StyleSheet.create({
    commonHeaderItemMainContainer: {
        alignItems: 'center',
        margin: 3,
        width: 80,
        height: 110,
    },
    headerItemImg: {
        marginTop: 10,
        width: 60,
        height: 60,
    }
})

export default withNavigation(CommonHeaderItem)