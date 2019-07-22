import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import StartPage from './view/StartPage'

const tackNavigator = createStackNavigator(
    {
        start:{
            screen: StartPage,
            navigationOptions: {
                header: null,
            }
        }
    },
    {
        initialRouteName: 'start'
    }
)

export default createAppContainer(tackNavigator)