import React, { Component } from 'react'
import { 
    Text,
    View, 
    StyleSheet,
    Image,
    Dimensions
} from 'react-native'
import UtilHelper from '../../util/Util'

export default class Advert extends Component {
    render() {
        return (
            <View style={styles.advertMainContainer}>
                <Image style={styles.advertLogoImg} source={require('../../assest/logo-css3.png')}></Image>
                <Text style={styles.advertTtile}> 优品汇 </Text>
                <Image style={styles.advertWaitImg} source={require('../../assest/wait.png')}></Image>
                <Text> 惠聚优质商品 </Text>
            </View>
        )
    }
}

let {width, height} = Dimensions.get('window');

let styles = StyleSheet.create({
    advertMainContainer: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    advertLogoImg: {
        marginTop: UtilHelper.getRealHeight(height,100),
        width: UtilHelper.getRealWidth(width,120),
        height: UtilHelper.getRealWidth(width,120),
    },
    advertWaitImg: {
        marginTop: UtilHelper.getRealHeight(height,200),
        width: UtilHelper.getRealWidth(width,30),
        height: UtilHelper.getRealWidth(width,30),
    },
    advertTtile: {
        fontSize: UtilHelper.getRealWidth(width,50),
        fontWeight: 'bold',
        color:'gray'
    }
})