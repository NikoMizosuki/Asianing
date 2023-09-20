import { SafeAreaView, StyleSheet, FlatList, Text, TextInput, Button, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { Audio } from 'expo-av';

import { useNavigation } from '@react-navigation/native';

const HomeScreen2 = () => {
  const navigation = useNavigation();

  const [sound, setSound] = useState();

  const playSound = async () => {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../assetss/book.mp3')
    );

    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  };
  const data=[
    {
        id:"123",
        title:"Book a ride",
        image:"https://links.papareact.com/3pn",
        screen:"BookScreen2",
    },
    {
        id:"456",
        title:"Travelling Package",
        image:"https://links.papareact.com/28w",
        screen:"MapScreen2",
    },
   
];

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
        <TouchableOpacity onPress={playSound}>
      <View style={styles.letterVoice}>
        <Text style={styles.button}>   Press   to   play     </Text>
        <Text style={styles.button}>audio</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.shipPackageButton}
          onPress={() => {
            navigation.navigate('BookScreen2');
          }}
        >
          <Text style={styles.shipPackageButtonText}>Ship a Package!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    WelcomeScreen: {
        flex: 1,
        backgroundColor: '#F4EAD5',
      },
  shipPackageButton: {
    backgroundColor: '#FDF7C3',
    paddingVertical: 40,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 50,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "black",
  },
  shipPackageButtonText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  letterVoice:{
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

export default HomeScreen2;
