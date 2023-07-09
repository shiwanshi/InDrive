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
        title: 'Safe Route',
        image: 'https://cdn-icons-png.flaticon.com/512/310/310149.png',
        screen: 'SafeRoute'
    },
    
    {
        id: '1224',
        title: 'Book Child Seat',
        image: 'https://cdn-icons-png.flaticon.com/512/3366/3366689.png',
        screen: 'Seat'
    }
    
]

const Food= () => {
    const navigation = useNavigation()
    const origin = useSelector(selectOrigin)

    return (
        <FlatList
          
            data={data}
            renderItem={({ item }) => (
                <TouchableOpacity 
                    style={tw`bg-white-200 w-125 rounded-lg mt-10 ml-0 `}
                    onPress={() => navigation.push(item.screen)}
                    disabled={!origin}
                >
                    <View style={tw`${!origin && 'opacity-30'}`}>
                        <Image 
                                source={{ uri: item.image }}
                                style={styles.image}
                            />
                        <View style={tw`flex-row items-center mt-3 `}>
                            <Text style={tw`text-lg font-bold ml-11 mr-6 text-black`}>{item.title}</Text>
                          
                        </View>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
            horizontal
      />
    )
}

export default Food

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        marginLeft:40,
        marginRight: 20,
        marginTop: 10
    }
})
