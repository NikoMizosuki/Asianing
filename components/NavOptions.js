import { View, Text, FlatList,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const data=[
    {
        id:"123",
        title:"Book a ride",
        image:"https://links.papareact.com/3pn",
        screen:"BookScreen",
    },
    {
        id:"456",
        title:"Travelling Package",
        image:"https://links.papareact.com/28w",
        screen:"MapScreen",
    },
   
];
const NavOptions = () => {
    const navigation=useNavigation();
  return (
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
  );
};

export default NavOptions;