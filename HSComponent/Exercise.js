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
    Image,
    ScrollView,
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';
// import ReactPlayer from 'react-player';
// import { Player } from 'video-react';
import { Icon } from 'react-native-elements'

export default class Exercise extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: "green"
            }}>
                <Image
                    source={require('../assets/ReviveLogo.png')}
                    style={{ height: 50, width: 50, marginTop: 20 }}
                />
                <Text style={styles.text}>
                    Exercise
                </Text>
                {/* <ReactPlayer
                    url="https://youtu.be/inpok4MKVLM"
                    controls
                    playbackRate={2}
                    width="896px"
                    height="504px"
                /> */}

            </View>
        );
    }
}


const styles = StyleSheet.create({

    text: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 15,
        justifyContent: 'center',
        marginLeft: 150,
        marginRight: 150,
    },
});
