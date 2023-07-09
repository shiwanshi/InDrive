import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import { useNavigation } from '@react-navigation/core'
import { Image } from 'react-native'

const driverlogin = () => {
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    const navigation = useNavigation()
    useEffect(()=>{
const unsubscribe = auth.onAuthStateChanged(user =>{
    if(user){
        navigation.replace("DriverScreen")
    }
})
return unsubscribe
    }, [])
    const handleSignUp=()=>{
auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials=>{
        const user= userCredentials.user;
        console.log(user);

    })
    .catch(error=>alert(error.message))
    }

    const handleLogin=()=>{
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials=>{
            const user= userCredentials.user;
            console.log(user);
    
        })
    }
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image 
            style={{
              width:110,
              height:100,
              resizeMode:"contain",
             }}
             source={{
              uri:"https://tse2.mm.bing.net/th?id=OIF.dIp8CXTEAe0kWvfVwdgifQ&pid=Api&P=0",
             }}
  
          />
      <View style={styles.inputContainer}>
<TextInput
placeholder='App Registered Email'
value={email}
onChangeText={text=>setEmail(text)}
style={styles.input}
/>
<TextInput
placeholder='Password'
value={password}
onChangeText={text=>setPassword(text)}
style={styles.input}
secureTextEntry
/>
      </View>
      <View style={styles.buttonContainer}>
<TouchableOpacity onPress={handleLogin}
style={styles.button}>
<Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>
<TouchableOpacity onPress={handleSignUp}
style={[styles.button, styles.buttonOutline]}>
<Text style={styles.buttonOutlinetext}>Register</Text>
</TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
  )
}

export default driverlogin

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
inputContainer:{
    width:'80%'
},
input:{
    backgroundColor:'white',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:10,
    marginTop:5,
    borderColor:'#14911f',
    borderWidth:0.5,

},
buttonContainer:{
    width:'60%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:40
},
button:{
    backgroundColor:'#14911f',
    width:'70%',
    padding:15,
    borderRadius:80,
    alignItems:'center'
},
buttonOutline:{
    backgroundColor:'white',
    marginTop:5,
    borderColor:'#14911f',
    borderWidth:2
},
buttonText:{
    color:'white',
    fontWeight:'700',
    fontSize:16
},
buttonOutlinetext:{
    color:'#14911f',
    fontWeight:'700',
    fontSize:16
}
})