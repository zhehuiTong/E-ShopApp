import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'

const {width} = Dimensions.get('window')

class AboutSubjectItem extends Component {

    static defaultProps = {
        title: '5个给春天的生活新提案',
        price: '19.9',
        descriptor: '餐厨起居洗护好物',
        isNew: true,
    }

    render() {
        let newPopular = () => {
            if (this.props.isNew) {
               return <Image style={styles.boutSubjectItemNewPopularImg} source={require('../../assest/new.png')} resizeMode={'stretch'}></Image>
            }
            return null
        }

        return (
            <View style={styles.aboutSubjectItemMainContainer}>
                {newPopular()}
                <Image style={styles.aboutSubjectItemImg} source={require('../../assest/img.png')} resizeMode={'stretch'}></Image>
                <View style={styles.aboutSubjectItemBodyContainer}>
                    <View style={styles.titleAndPriceMainContainer}>
                        <Text style={styles.aboutSubjectItemTitle}>{this.props.title}</Text>
                        <Text style={styles.aboutSubjectItemPrice}>{this.props.price}元起</Text>
                    </View>
                    <Text style={styles.descriptorTxt}>{this.props.descriptor}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    aboutSubjectItemMainContainer: {
        position: 'relative',
        alignItems: 'center',
    },
    aboutSubjectItemImg: {
        width,
        height: 200,
    },
    aboutSubjectItemBodyContainer: {
        justifyContent:'center',
        width: width * 0.9,
    },
    titleAndPriceMainContainer: {
        position: 'relative',
        flexDirection: 'row',
        width: width * 0.9,
    },
    boutSubjectItemNewPopularImg: {
        position: 'absolute',
        top: 20,
        right: 30,
        width: 60,
        height: 40,
    },
    aboutSubjectItemTitle:{
        fontSize: 20,
    },
    aboutSubjectItemPrice: {
        position:'absolute',
        right: 0,
        color: 'red',
        fontSize: 20,
    },
    descriptorTxt: {
        color: '#999',
        fontSize: 15,
    }
})

export default withNavigation(AboutSubjectItem)