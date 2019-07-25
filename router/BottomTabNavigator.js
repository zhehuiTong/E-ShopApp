import React from 'react';
import { Image, View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import HomePage from '../view/HomePage'
import Classification from '../view/Classification'
import Special from '../view/Special'
import Evaluate from '../view/Evaluate'
import My from '../view/My'

export default createBottomTabNavigator(
    {
        Home: {
            screen: HomePage,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image style={{width: 30,height: 30, tintColor:tintColor}} source={require('../assest/首页.png')}></Image>
                )
            }
        },
        Classification:{
            screen: Classification,
            navigationOptions: {
                tabBarLabel: '分类',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image style={{width: 30,height: 30, tintColor:tintColor}} source={require('../assest/类目.png')}></Image>
                )
            }
        },
        Special: {
            screen: Special,
            navigationOptions: {
                tabBarLabel: '专题',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image style={{width: 30,height: 30, tintColor:tintColor}} source={require('../assest/咖啡.png')}></Image>
                )
            }
        },
        Evaluate: {
            screen: Evaluate,
            navigationOptions: {
                tabBarLabel: '评价',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image style={{width: 30,height: 30, tintColor:tintColor}} source={require('../assest/评价星星.png')}></Image>
                )
            }
        },
        My: {
            screen: My,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({focused, tintColor}) => (
                    <Image style={{width: 30,height: 30, tintColor:tintColor}} source={require('../assest/我的.png')}></Image>
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