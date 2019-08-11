import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'
import AboutSubjectItem from './AboutSubjectItem'

const {width} = Dimensions.get('window')

class AboutSubject extends Component {
    render() {
        return (
            <View style={styles.aboutSubjectMainContainer}>
                <Text style={styles.aboutSubjectTitle}> 相关专题 </Text>
                <AboutSubjectItem />
                <AboutSubjectItem />
                <AboutSubjectItem />
                <AboutSubjectItem />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    aboutSubjectMainContainer: {
        alignItems: 'center',
        width,
        marginTop: 20,
        paddingBottom: 15,
        backgroundColor: '#fff',
    },
    aboutSubjectTitle: {
        marginTop: 10,
        fontSize: 20,
    }
})

export default withNavigation(AboutSubject)