import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

class SeckillHeader extends Component {
    render() {
        return (
            <View style={styles.seckillHeaderContainer}>
                <View style={styles.seckillHeaderLeftContainer}>
                    <Text style={styles.seckillLeftTitle}>秒杀专区</Text>
                    <Text style={styles.seckillTxt}>下一场 18:00 开始</Text>
                </View>
                <View style={styles.seckillHeaderRightContainer}>
                    <Text style={styles.seckillTxt}>本场结束剩余</Text>
                    <View style={styles.seckillTimeContainer}>
                        <Text style={styles.seckillTimeTxt}>00</Text>
                        <Text>:</Text>
                        <Text style={styles.seckillTimeTxt}>20</Text>
                        <Text>:</Text>
                        <Text style={styles.seckillTimeTxt}>56</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    seckillHeaderContainer: {
        flexDirection: 'row',
        marginTop: 16,
        width: 360,
        height: 60,
    },
    seckillHeaderLeftContainer: {
        flex: 1,
        justifyContent: 'space-around',
    },
    seckillHeaderRightContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    seckillTimeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    seckillLeftTitle: {
        fontSize: 20,
    },
    seckillTxt: {
        fontSize: 15,
        color: '#999999'
    },
    seckillTimeTxt: {
        width: 35,
        height: 25,
        fontSize: 18,
        marginTop: 5,
        textAlign: 'center',
        lineHeight: 25,
        borderRadius: 5,
        color: '#fff',
        backgroundColor: '#666666'
    }
})

export default withNavigation(SeckillHeader)
