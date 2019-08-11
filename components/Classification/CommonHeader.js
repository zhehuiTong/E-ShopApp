import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'
import CommonHeaderItem from './CommonHeaderItem'

const { width, height } = Dimensions.get('window')

class CommonHeader extends Component {

    static defaultProps = {
        headerItems: [],
    }

    state = {
        commonHeaderItem:[],
    }

    _renderHeaderItems(headerItems) {
        let tCommonHeaderItem = headerItems.map((item,index) => 
            (
                <CommonHeaderItem key = {index} imgUrl = {item.imgUrl} title = {item.title} />
            )
        )
        this.setState({
            commonHeaderItem: tCommonHeaderItem
        })
    }

   componentWillReceiveProps(nextProps) {
       this._renderHeaderItems(nextProps.headerItems);
   }

    render() {
        return (
            <View style={styles.commonHeaderMainContainer}>
                <View style={styles.commonHeaderBodyContainer}>
                    {this.state.commonHeaderItem}
                    <View style={styles.commonHeaderAllClassContainer}>
                        <Image style={styles.headerItemImg} source={require('../../assest/classify.png')} resizeMode={'stretch'}></Image>
                        <Text style={{ marginTop: 10 }}> 全部分类 </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    commonHeaderMainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width,
        backgroundColor: '#fff'
    },
    commonHeaderBodyContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 'auto',
        width: width * 0.88,
    },
    commonHeaderAllClassContainer: {
        alignItems: 'center',
        margin: 5,
        width: 80,
        height: 110,
    },
    headerItemImg: {
        marginTop: 10,
        width: 60,
        height: 60,   
    }
})

export default withNavigation(CommonHeader)