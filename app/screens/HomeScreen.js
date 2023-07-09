
import React, { useState } from 'react';
import { View,Text, StyleSheet, Image,FlatList,TouchableOpacity,SafeAreaView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Linking } from 'react-native';

import Screen from '../components/Screen';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
//import { GOOGLE_MAP_APIKEY } from '@env'
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../redux/slices/navSlice';
import Food from '../components/Food';
import Chatbot from '../components/chatbot';
import { useNavigation } from '@react-navigation/native';
import ShakeScreen from './ShakeScreen';
import fakecall from './fakecall';
import Modal from 'react-native-modal';
import Button from '../components/button';
const GOOGLE_MAP_APIKEY = ""
const data=[
    {
    id:"00",
    title:"Camera",
    image:"https://cdn-icons-png.flaticon.com/512/4616/4616304.png",
    screen:"chatbot",
    },
    {
    id:"01",
    title:"Call",
    image:"https://www.pngkey.com/png/full/13-137208_red-phone-icon-png-call-red-icon-png.png",
    screen:"fakecall",
    }

  ];

const HomeScreen = () => {
    const dispatch = useDispatch();
    const navigation=useNavigation();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
      setIsModalVisible(!isModalVisible);
    };
    const handleShare = () => {
        toggleModal();
      };
      const handleSocialMediaShare = (socialMedia) => {
        switch (socialMedia) {
          case 'Facebook':
            const phoneNumber = '';
      const message = 'https://maps.app.goo.gl/otBG9du9h1frPBxGA';
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      Linking.openURL(url);
            break;
          case 'Twitter':
            Linking.openURL('https://www.twitter.com');
            break;
          case 'Instagram':
            Linking.openURL('https://www.instagram.com');
            break;
          default:
            break;
        }
      };
    
    return (
        <Screen style={{backgroundColor:'#DBF3C9'}} >
            
            <View style={tw`p-1`}>
                <ShakeScreen/>
            <Text style={styles.text}>Shake your device to trigger SOS
alert</Text>


                <Image
                    source={{
                        uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/InDrive_Logo.svg/2560px-InDrive_Logo.svg.png",
                       }}
                    style={styles.logo}
                />
                <View style={tw`mb-0 border-2 rounded-lg border-green-950`}>
                    <GooglePlacesAutocomplete 
                        placeholder='Enter Your Location'
                        
                        onPress={(data, details = null) => {
                         dispatch(setOrigin({
                                loaction: details.geometry.location,
                                description: data.description
                            }))
                           dispatch(setDestination(null))
                        }}
                        minLength={2}
                        fetchDetails={true}
                       returnKeyType={"search"}
                       onFail={error => console.error(error)}
                        query={{
                            key: GOOGLE_MAP_APIKEY,
                            language: 'en',
                        }}
                        styles={{
                            container: {
                                flex: 0,
                            },
                            textInput: {
                                fontSize: 16
                                
                            }
                        }}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        enablePoweredByContainer={false}
                    />
                </View>
                <NavOptions />
                <Food />
                <FlatList
  data={data}
 horizontal
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
      <SafeAreaView style={{backgroundColor:'#4caf50', paddingBottom:30, width:80, height:80, marginTop:50, borderRadius:20, borderWidth:2}}>
        <Image
          style={{
            width: 80,
            height: 42,
            resizeMode: "contain",
            marginLeft: 0,
            marginTop: 15,
            
            marginRight:0
          }}
          source={{ uri: item.image }}
          key={item.id} // Add the key prop here
        />
      </SafeAreaView>
    </TouchableOpacity>
  )}
/>
<View style={styles.shareContainer}>
        <TouchableOpacity onPress={handleShare} style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Share Location</Text>
        </TouchableOpacity>
      </View>

      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Share with:</Text>
       
          <View style={styles.socialMediaIcons}>
            <TouchableOpacity onPress={() => handleSocialMediaShare('Facebook')}>
              <Icon name="whatsapp" size={40} color="green" />
              <Text>WhatsApp</Text>
            </TouchableOpacity>
           
            <TouchableOpacity onPress={() => handleSocialMediaShare('Instagram')}>
                
              <Icon name="twitch" size={40} color="brown" />
              <Text>SMS</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.modalButtons}>
            <TouchableOpacity onPress={toggleModal} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Not Now</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text  style={{backgroundColor:'green', textAlign:'center', borderRadius:100}}onPress={() => Alert.alert(
  'Add Contacts',
  'Select random contacts to add:',
  [
    { text: '+919026510031', onPress: () => Alert.alert('+919026510031 Added to emergency contacts')},
    { text: '+917004580734', onPress: () => Alert.alert('+917004580734 Added to emergency contacts')},
    { text: '+918844019881', onPress: () => Alert.alert('+919026510031 Added to emergency contacts')},
    { text: '+917619022037', onPress: () => Alert.alert('+918840033510 Added to emergency contacts') },
    { text: 'Cancel', style: 'cancel' },
  ],
)}>Add Emergency Contacts
</Text>
      </Modal>
            </View>
            
        </Screen>
    );
}

const styles = StyleSheet.create({
    shareContainer: {
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 22,
      },
      shareButton: {
        backgroundColor: '#4caf50',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 4,
        marginLeft:250,
        marginTop:-80,
        
      },
      shareButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
      },
      modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
      },
      socialMediaIcons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 16,
      },
      modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      },
      modalButton: {
        backgroundColor: '#1e90ff',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 4,
        minWidth: 100,
        alignItems: 'center',
      },
      modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
      },
    logo: {
        height: 100,
        width: 200,
        resizeMode: 'contain',
        marginBottom: 0,
        marginTop: 0,
        marginLeft: 0,



        
        
    },
    text:{
    backgroundColor:'yellow',
    fontWeight:'bold',
    fontSize:20,
    marginBottom:0
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
    
})

export default HomeScreen;
