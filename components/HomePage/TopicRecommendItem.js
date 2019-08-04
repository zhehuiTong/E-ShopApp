import React, { Component } from 'react'
import { Text, View, Image, TouchableNativeFeedback, StyleSheet, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'

const {width} = Dimensions.get('window')

class TopicRecommendItem extends Component {

    static defaultProps = {
        name: '银色星芒刺绣网纱底裤',
        descriptor: '薄如蝉翼，丝滑如肌肤',
        price: '99'
    }

    render() {
        return (
            <View style={styles.recommendItemMainContainer}>
                <Image style={styles.recommendItemImg} source={require('../../assest/img.png')} resizeMode={'stretch'}></Image>
                <View style={styles.recommendItemContentContainer}>
                    <Text style={styles.recommendItemNameTxt}>{this.props.name}</Text>
                    <Text style={styles.recommendItemDescriptorTxt}>{this.props.descriptor}</Text>
                    <Text style={styles.recommendItemPriceTxt}>¥{this.props.price}</Text>
                </View>
                <View style={styles.recommendItemRightContainer}>
                    <TouchableNativeFeedback>
                        <View style={styles.recommendItemBtn}>
                            <Text style={{color: 'rgb(241, 151, 54)'}}>4色可选</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    recommendItemMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 330,
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: '#999'
    },
    recommendItemImg: {
        width: 100,
        height: 100
    },
    recommendItemContentContainer: {
        justifyContent: 'center',
        width: 140,
        height: 100,
    },
    recommendItemRightContainer: {
        flex: 1,
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    recommendItemNameTxt: {
        fontSize: 14,
    },
    recommendItemDescriptorTxt: {
        marginTop: 5,
        fontSize: 13,
        color: '#999999'
    },
    recommendItemPriceTxt: {
        marginTop: 5,
        color: 'rgb(240, 72, 68)'
    },
    recommendItemBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 30,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: 'rgb(241, 151, 54)'
    }
})

export default withNavigation(TopicRecommendItem)