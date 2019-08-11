import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'
import CommonHeader from '../components/Classification/CommonHeader'
import HotProducts from '../components/Classification/HotProducts'
import AboutSubject from '../components/Classification/AboutSubject'
import ClassificationConfig from '../util/ClassificationConfig'

class Classification extends Component {

    state = {
        headerNavigations:[]
    }

    componentDidMount() {
        this._setHeaderNavigations = this._setHeaderNavigations.bind(this);
        this._setHeaderNavigations(this.props.navigation)
    }

    _setHeaderNavigations(navigation) {
        let tHeaderNavigations = ClassificationConfig[navigation.state.routeName]
        this.setState({
            headerNavigations: tHeaderNavigations
        })
   }

    render() {
        return (
            <View>
                <ScrollView style={styles.clothesPageMainContainer}>
                    <CommonHeader headerItems={this.state.headerNavigations} />
                    <HotProducts />
                    <AboutSubject />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    clothesPageMainContainer: {
        backgroundColor: '#f3f3f3'
    },
})

export default withNavigation(Classification)