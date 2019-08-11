import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation'
import Classification from '../view/Classification'

export default createMaterialTopTabNavigator(
    {
        clothes: {
            screen: Classification,
            navigationOptions: ({ navigation  }) => ({
                title: '服装'
            })
        },
        kitchen: {
            screen: Classification,
            navigationOptions: ({ navigation  }) => ({
                title: '餐厨'
            })
        },
        parts: {
            screen: Classification,
            navigationOptions: ({ navigation  }) => ({
                title: '配件'
            })
        },
        household: {
            screen: Classification,
            navigationOptions: ({ navigation  }) => ({
                title: '居家'
            })
        },
        washCare: {
            screen: Classification,
            navigationOptions: ({ navigation  }) => ({
                title: '洗护'
            })
        },
        children: {
            screen: Classification,
            navigationOptions: ({ navigation  }) => ({
                title: '婴童'
            })
        },
        groceries: {
            screen: Classification,
            navigationOptions: ({ navigation  }) => ({
                title: '杂货'
            })
        },
        food: {
            screen: Classification,
            navigationOptions: ({ navigation  }) => ({
                title: '饮食'
            })
        },
        interest: {
            screen: Classification,
            navigationOptions: ({ navigation  }) => ({
                title: '志趣'
            })
        },
        brand: {
            screen: Classification,
            navigationOptions: ({ navigation  }) => ({
                title: '品牌'
            })
        }
    },
    {
        initialRouteName: 'clothes',
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: '#999',
            style: {
                height: 40,
                backgroundColor: '#fff'
            },
            tabStyle: {
                width: 90,
            },
            scrollEnabled: true
        }
    }
)