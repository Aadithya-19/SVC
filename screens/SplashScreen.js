import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

export default class SplashScreen extends React.Component {

    nextScreen = () => {
        this.props.navigation.navigate('LogIn');
    };
    aboutScreen = () => {
        this.props.navigation.navigate('About');
    }


    render() {
        return (
                
            <View style={{
                flex: 1,
                alignItems:'center',
                backgroundColor: "green",
            }}>

               
                <Image
                    source={require('../assets/ReviveLogo.png')}
                    style={{ alignSelf: 'center', height: 400, width: 400, marginTop:75}}
                />

                <Text>
                    
                </Text>
                <TouchableOpacity
                    onPress={this.nextScreen}
                    style={{
                        width: 300,
                        height: 50,
                        marginTop: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 25,
                        marignTop:30,
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
                        Already have an account Log in
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.aboutScreen}
                    style={{
                        width: 300,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 25,
                        marginTop:50,
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
                        About Revive
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

} 