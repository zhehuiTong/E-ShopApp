import React from 'react';
import { Image, View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import HomePage from '../view/Home/HomePage'
import ClassificationNavigator from '../router/MaterialTopTabNavigator'
import Special from '../view/Special'
import Evaluate from '../view/Home/Evaluate'
import My from '../view/Home/My'

export default createBottomTabNavigator(
    {
        Home: {
            screen: HomePage,
            params: { title: '首页' },
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image style={{width: 30,height: 30, tintColor:tintColor}} source={require('../assest/home.png')}></Image>
                )
            }
        },
        Classification:{
            screen: ClassificationNavigator,
            params: { title: '分类' },
            navigationOptions: {
                tabBarLabel: '分类',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image style={{width: 30,height: 30, tintColor:tintColor}} source={require('../assest/class.png')}></Image>
                )
            }
        },
        Special: {
            screen: Special,
            params: { title: '专题' },
            navigationOptions: {
                tabBarLabel: '专题',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image style={{width: 30,height: 30, tintColor:tintColor}} source={require('../assest/coffer.png')}></Image>
                )
            }
        },
        Evaluate: {
            screen: Evaluate,
            params: { title: '评价' },
            navigationOptions: {
                tabBarLabel: '评价',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image style={{width: 30,height: 30, tintColor:tintColor}} source={require('../assest/evaluate.png')}></Image>
                )
            }
        },
        My: {
            screen: My,
            params: { title: '我的' },
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image style={{width: 30,height: 30, tintColor:tintColor}} source={require('../assest/my.png')}></Image>
                )
            }
        }
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            showIcon: true,
            activeTintColor: 'rgb(26, 188, 156)',
            style: {
                height: 60,
                borderTopColor: 'gray',
                borderTopWidth: 1
            },
            labelStyle: {
                fontWeight: 'bold',
                fontSize: 15,
            }
        },
    }
)