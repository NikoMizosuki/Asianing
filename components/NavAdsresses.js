import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';

const data=[
   {
    id:"123",
    icon:"home",
    location:"Home",
    destinantion:"Code Street, London, UK"
   },
   {
    id:"456",
    icon:"briefcase",
    location:"Work",
    destinantion:"London Eye, London, UK"
   },
];
const NavAdsresses = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({item:{location,destinantion,icon}})=>(
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
            <Icon
              style={tw`mr-4 rounded-full bg-gray-300 p-3`}
              name={icon}
              type="ionicon"
              color="white"
              size={18}
            />
            <View>
                <Text>{location}</Text>
                <Text>{destinantion}</Text>
            </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavAdsresses;