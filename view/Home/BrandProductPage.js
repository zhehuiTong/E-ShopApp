import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { withNavigation } from 'react-navigation';

class BrandProductPage extends Component {
    render() {
        return (
            <View>
                <Text> 品牌制作商 </Text>
            </View>
        )
    }
}

export default withNavigation(BrandProductPage)