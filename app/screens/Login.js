import { StyleSheet, Text, View , SafeAreaView,Image} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions1 from '../components/NavOptions1';


const Login = () => {
  return (
    <View style={{backgroundColor:'#DBF3C9'}} >
    <View style={{backgroundColor:'#DBF3C9',marginTop:50}}>
      <View style={tw`p-5 pb-36`}>
        <Image 
          style={{
            width:230,
            height:100,
            marginTop:17,
            resizeMode:"contain",
           }}
           source={{
            uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/InDrive_Logo.svg/2560px-InDrive_Logo.svg.png",
           }}

        />
           <NavOptions1></NavOptions1>
      </View>
    </View>
     </View>
  );
};

export default Login;

const styles = StyleSheet.create({
    text:{
        color:"blue",
    },

});