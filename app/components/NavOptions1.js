import { FlatList, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';


  const data=[
    {
        id:"123",
        title :"Driver Login",
        image:"https://i.pinimg.com/564x/d6/57/5c/d6575c533e9a5f8c6d5509bf365408ed.jpg",
        screen:"driverlogin",

    },
    {
        id:"456",
        title:"User Login",
        image:"https://cdn-icons-png.flaticon.com/512/1654/1654323.png",
        screen:"userlogin",

     
    },
];

const NavOptions1 = () => {
  const navigation=useNavigation();
  return (
    <FlatList
    data={data}
    vertical
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
        <TouchableOpacity 
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-28 pb-8 pt-4 bg-white m-2 w-100 rounded-xl border-2`}>
            <View>
              <Image
                style={{width:120,height:120,resizeMode:"contain"}}
                source={{uri:item.image}}
              />
              <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
              <Icon
              style={tw` bg-black rounded-full w-16 mt-4 ml-4 mr-16`}
              name='arrowright'
              color='white'
              type='antdesign'
              />
            </View>
        </TouchableOpacity>
    )}
    />
  );
};

export default NavOptions1;

