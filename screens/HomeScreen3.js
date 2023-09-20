import { SafeAreaView, StyleSheet, FlatList, Text, TextInput, Button, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { Audio } from 'expo-av';
import NavAdsresses from '../components/NavAdsresses';
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';

const HomeScreen3 = () => {
  const navigation = useNavigation();

  const data=[
    {
        id:"123",
        title:"Book a ride",
        image:"https://links.papareact.com/3pn",
        screen:"BookScreen4",
    },
    {
        id:"456",
        title:"Travelling Package",
        image:"https://links.papareact.com/28w",
        screen:"MapScreen",
    },
   
];
const [isTutorialVisible, setTutorialVisible] = useState(false);

  const toggleTutorial = () => {
    setTutorialVisible(!isTutorialVisible);
  };
  return (
    <SafeAreaView style={styles.WelcomeScreen}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <FlatList
        data={data}
        horizontal
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
            <TouchableOpacity 
            onPress={()=>navigation.navigate(item.screen)}
            style={tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                <View>
                    <Image 
                      style={{width:120, height:120, resizeMode:"contain"}}
                      source={{uri:item.image}}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )}
    />
        {!isTutorialVisible && (
          <TouchableOpacity
            style={styles.tutorialButton}
            onPress={toggleTutorial}
          >
            <Text style={styles.tutorialButtonText}>Show Tutorial</Text>
          </TouchableOpacity>
        )}
        {isTutorialVisible && (
          <View style={styles.videoContainer}>
            <Video
              //source={require('./assets/tutorial.mp4')}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              style={styles.video}
            />
            <TouchableOpacity
              style={styles.closeVideoButton}
              onPress={toggleTutorial}
            >
              <Text style={styles.closeVideoButtonText}>Close Tutorial</Text>
            </TouchableOpacity>
          </View>
          )}
        <TouchableOpacity
          style={styles.shipPackageButton}
          onPress={() => {
            navigation.navigate('BookScreen4');
          }}
        >
          <Text style={styles.shipPackageButtonText}>Ship a Package!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  tutorialButton: {
    backgroundColor: '#FDF7C3',
    paddingVertical: 40,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 50,
    borderWidth: 2,
    borderColor: "black",
  },
  tutorialButtonText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  videoContainer: {
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 200,
  },
  closeVideoButton: {
    backgroundColor: '#FDF7C3',
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  closeVideoButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
    WelcomeScreen: {
        flex: 1,
      },
      shipPackageButton: {
        backgroundColor: '#A5C9CA',
        paddingVertical: 40,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 50,
      },
  shipPackageButtonText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  letterVoice:{
    marginTop: 50,
    height: 120,
    width: '100%',
    backgroundColor: "#F9F5EB",
    borderWidth: 2,
    borderColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    fontSize: 40,
    
  },
});

export default HomeScreen3;
