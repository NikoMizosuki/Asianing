import { SafeAreaView, StyleSheet, FlatList, Text, TextInput, Button, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import NavAdsresses from '../components/NavAdsresses';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
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
        <NavOptions />
        <NavAdsresses />
        <TouchableOpacity
          style={styles.shipPackageButton}
          onPress={() => {
            navigation.navigate('BookScreen');
          }}
        >
          <Text style={styles.shipPackageButtonText}>Ship a Package!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  shipPackageButton: {
    backgroundColor: '#A5C9CA',
    paddingVertical: 40,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 50,
  },
  shipPackageButtonText: {
    color: 'white', // You can change the text color
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
