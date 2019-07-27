import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation';

class HomePage extends Component {
    render() {
        let {navigation} = this.props;
        console.log(navigation)
        return (
            <View style={styles.homeMainContainer}>
                <Text> textInComponent </Text>
                <TouchableNativeFeedback onPress={() => {
                    navigation.navigate('BrandProduct')
                }}>
                    <Text>点击</Text>
                </TouchableNativeFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeMainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default withNavigation(HomePage);