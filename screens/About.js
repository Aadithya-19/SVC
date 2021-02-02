import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';

export default class About extends React.Component {

    nextScreen = () => {
        this.props.navigation.navigate('Splash');
    };

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: "green"
            }}>
                <Image
                    source={require('../assets/ReviveLogo.png')}
                    style={{ alignSelf: 'center', height: 300, width: 300, marginTop: 20 }}
                />
                <Text style={styles.text}>
                    This app helps you protect your children easily. These days parents have very less time to notice the day to day activities of their children. Revive allows you to regulate your child's activities, maintains their physical and mental structure. It also allows you to track your kids phone which is connected to your phone via BlueTooth. Thr main intention of the app is to help main your child health. We provide certified videos which explain your child about how his/her can overcome bullying and the changes coming with their age.
                </Text>
                <TouchableOpacity
                    style={{
                        width: 300,
                        height: 50,
                        marginTop: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
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
                    }}
                    onPress={this.nextScreen}
                >
                    <Text>
                        Back
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    text: {
        alignSelf: 'center',
        marginTop: 150,
        justifyContent: 'center',
        marginLeft: 150,
        marginRight: 150,
    }
})