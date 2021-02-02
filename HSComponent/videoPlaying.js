import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Video as VideoPlayer } from 'expo-av';

// import { Container, ListItem, List, Content } from 'native-base'
// import { NavigationContainer } from 'react-native-navigation'
// import { StackRouter } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';


export default class videoPlaying extends Component {

  render() {
    return (
      <View style={{ backgroundColor: "green", flex: 1 }}>

        <Image
          source={require('../assets/ReviveLogo.png')}
          style={{ height: 50, width: 50, marginTop: 20 }}
        />
        <Text style={styles.text}>
          Videos
        </Text>
        <VideoPlayer
          video={{uri:'https://youtu.be/ynTuA_tlZDE'}}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ marginTop: 20, marginLeft: 20, width: 100, height: 100, borderWidth: 4 }}
        />
        <Text style={styles.vtext}>
          Ways to Stop Bullying
        </Text>
        {/* <Video
          source={{ uri: './assets/Stop_Bullying.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ marginTop: 20, marginLeft: 20, width: 100, height: 100, borderWidth: 4 }}
        />
        <Text style={styles.vtext}>
          Ways to Stop Bullying
        </Text>
        <Video
          source={{ uri: './assets/Stop_Bullying.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ marginTop: 20, marginLeft: 20, width: 100, height: 100, borderWidth: 4 }}
        />
        <Text style={styles.vtext}>
          Ways to Stop Bullying
        </Text> */}
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
  vtext: {
    fontSize: 15,
    marginTop: 15,
    justifyContent: 'center',
    marginLeft: 10,
  },
});
