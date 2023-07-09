import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { selectOrigin } from '../redux/slices/navSlice'
import { useSelector } from 'react-redux'

const data = [
    {
        id: '1224',
        title: 'Female Drivers',
        image: 'https://cdn-icons-png.flaticon.com/512/1597/1597374.png',
        screen: 'MapScreen'
    },
    {
        id: '4354',
        title: 'Help Near Me',
        image: 'https://cdn-icons-png.flaticon.com/512/535/535137.png',
        screen: 'EatsScreen'
    },
]

const NavOptions = () => {
    const navigation = useNavigation()
    const origin = useSelector(selectOrigin)

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <TouchableOpacity 
                    style={tw` bg-white-200 w-125 rounded-lg mt-10 ml-6`}
                    onPress={() => navigation.push(item.screen)}
                    disabled={!origin}
                >
                    <View style={tw`${!origin && 'opacity-30'}`}>
                        <Image 
                                source={{ uri: item.image }}
                                style={styles.image}
                            />
                        <View style={tw` items-center mt-3 `}>
                            <Text style={tw`text-lg font-bold ml-3  mr-6  text-black`}>{item.title}</Text>
                           
                        </View>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
           horizontal
      />
    )
}

export default NavOptions

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        marginLeft:12,
        marginTop: 10
        
    }
})
