import React from 'react';
import { Easing, Animated } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import StartPage from './view/StartPage'
import HomeNavigator from './router/BottomTabNavigator'
import HomeHeaderLeft from './components/HomePage/HomeHeaderLeft'
import HomeHeaderRight from './components/HomePage/HomeHeaderRight'
import BrandProductPage from './view/Home/BrandProductPage'

const tackNavigator = createStackNavigator(
    {
        start: {
            screen: StartPage,
            navigationOptions: {
                header: null,
            }
        },
        Home: {
            screen: HomeNavigator,
            navigationOptions: ({ navigation }) => ({
                title: navigation.state.routes[navigation.state.index].params.title,
                headerLeft: <HomeHeaderLeft />,
                headerRight: <HomeHeaderRight />,
                headerTitleStyle: { flex: 1, textAlign: 'center' }
            })
        },
        BrandProduct: {
            screen: BrandProductPage
        }
    },
    {
        initialRouteName: 'start',
        transitionConfig: () => ({
            transitionSpec: {
                duration: 300,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const height = layout.initHeight;
                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });

                return { opacity, transform: [{ translateX }] };
            },
        }),
    }
)

export default createAppContainer(tackNavigator)