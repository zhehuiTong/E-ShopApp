import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'
import FreshGoodsItem from './FreshGoodsItem'

const {width} = Dimensions.get('window')

class GuessYouLike extends Component {
    render() {
        return (
            <View style={styles.guessYouLikeMainContainer}>
                <View style={styles.guessYouLikeHeaderContainer}>
                    <Text style={styles.guessYouLikeHeaderTitle}>猜你喜欢</Text>
                </View>
                <View style={styles.guessYouLikeBodyContainer}>
                    <FreshGoodsItem />
                    <FreshGoodsItem />
                    <FreshGoodsItem />
                    <FreshGoodsItem />
                    <FreshGoodsItem />
                    <FreshGoodsItem />
                    <FreshGoodsItem />
                    <FreshGoodsItem />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    guessYouLikeMainContainer: {
        alignItems: 'center',
        width,
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 15,
        backgroundColor: '#fff'
    },
    guessYouLikeHeaderContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    guessYouLikeBodyContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
        width: 320
    },
    guessYouLikeHeaderTitle: {
        fontSize: 20
    }
})

export default withNavigation(GuessYouLike)