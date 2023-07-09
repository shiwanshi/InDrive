import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [dlNumber, setDLNumber] = useState('');

  const verifyDL = () => {
    const regex =
      /^(AN|AP|AR|AS|BR|CH|CT|DD|DL|DN|GA|GJ|HP|HR|JH|JK|KA|KL|LA|LD|MH|ML|MN|MP|MZ|NL|OD|PB|PY|RJ|SK|TN|TR|TS|UP|UK|WB)\d{2}\d{4}\d{7}$/;
    if (regex.test(dlNumber)) {
      Alert.alert('Verification successful', 'Take rides! Offer your fare');
    } else {
      Alert.alert('Verification Failed', 'Invalid license number');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cameraIconContainer}>
        <Icon name="camera" size={24} color="black" />
      </TouchableOpacity>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/InDrive_Logo.svg/2560px-InDrive_Logo.svg.png",
        }}
        fadeDuration={0}
        style={styles.logo}
      />
      <Text style={styles.heading}>Enter Driving License Number</Text>
      <Image
        source={{
          uri: "https://latb.com/wp-content/uploads/2020/04/driver-license-icon.png",
        }}
        fadeDuration={0}
        style={{ height: 100, width: 100, marginTop: 10, resizeMode: 'contain', marginBottom: 10 }}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ex: MH1420110062821"
          value={dlNumber}
          onChangeText={setDLNumber}
          style={styles.textInput}
        />
      </View>
      <Button title="Verify" onPress={verifyDL} color="#12AD2B" />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#DBF3C9'
  },
  logo: {
    height: 100,
    width: 200,
    resizeMode: 'contain',
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 0,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold"
  },
  inputContainer: {
    marginBottom: 10,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'green',
    width: '100%',
  },
  cameraIconContainer: {
    position: 'absolute',
    top: 10,
    marginTop:40,
    
    right: 40,
  },
};

export default App;
