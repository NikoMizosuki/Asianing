import { SafeAreaView, StyleSheet, FlatList, Text, TextInput, Button, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { Audio } from 'expo-av';
import NavAdsresses from '../components/NavAdsresses';
import { useNavigation } from '@react-navigation/native';

const HomeScreen4 = () => {
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
        <NavAdsresses />
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

export default HomeScreen4;
