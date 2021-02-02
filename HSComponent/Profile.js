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

export default class Profile extends React.Component {
    // nextScreen = () => {
    //     this.props.navigation.navigate('Notifications');
    // };
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
                    Profile
                </Text>
                <TouchableOpacity 
                
                onPress={this.nextScreen}
                    style={{
                        width: 300,
                        height: 50,
                        marginTop: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        borderRadius: 25,
                        backgroundColor: "pink",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 0.30,
                        shadowRadius: 10.32,
                        elevation: 16,
                        padding: 10
                    }}>
                    <Text>
                        Notifications
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    text: {
        alignSelf: 'center',
        fontSize: 45,
        marginTop: 15,
        justifyContent: 'center',
        marginLeft: 150,
        marginRight: 150,
    },
});
