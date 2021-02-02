import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements'

import Meditation from '../HSComponent/MeditationScreen'
import Exercise from '../HSComponent/Exercise'
import Video from '../HSComponent/videoPlaying'
import Profile from '../HSComponent/Profile'
import { Ionicons, Entypo } from '@expo/vector-icons';


export default class HomeScreen extends React.Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

const TabNavigator = createBottomTabNavigator({
    Meditation: Meditation,
    Exercise: Exercise,
    Video: Video,
    Menu:Profile,
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: () => {
                const routeName = navigation.state.routeName;
                console.log(routeName)
                if (routeName === "Meditation") {
                    return (
                        <Icon name="meditation" type="material-community-icons" />
                    )
                }
                else if (routeName === "Exercise") {
                    return (
                        <Icon name="bicycle" type="font-awesome-5" />
                    )
                }
                else if (routeName === "Video") {
                    return (
                        <Icon name="video" type="entypo" />
                    )
                }
                else if (routeName === "Menu") {
                    return (
                        <Icon name="menu" type="entypo" />
                    )
                }
            }
        })
    }
)

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
