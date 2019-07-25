import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import StartPage from './view/StartPage'
import HomeNavigator from './router/BottomTabNavigator'

const tackNavigator = createStackNavigator(
    {
        start:{
            screen: StartPage,
            navigationOptions: {
                header: null,
            }
        },
        Home:{
            screen: HomeNavigator
        }
    },
    {
        initialRouteName: 'start'
    }
)

export default createAppContainer(tackNavigator)