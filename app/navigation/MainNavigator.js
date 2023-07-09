import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import EatsScreen from '../screens/EatsScreen';
import SuccessScreen from '../screens/SuccessScreen';
import foodScreen from '../screens/foodScreen';
import chatbot from '../components/chatbot';
import Login from '../screens/Login';
import userlogin from '../screens/userlogin';
import driverlogin from '../screens/driverlogin';
import DriverScreen from '../screens/DriverScreen';
import fakecall from '../screens/fakecall';
import SafeRoute from '../screens/SafeRoute';
import Seat from '../screens/Seat';
const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name='userlogin'
  component={userlogin}
  options={{headerShown:false}}
  /> 
          <Stack.Screen name='driverlogin'
  component={driverlogin}
  options={{headerShown:false}}
  /> 
            <Stack.Screen
   name="HomeScreen"
    component={HomeScreen}
  options={{
   headerShown:false,
  }}/>
            <Stack.Screen name="DriverScreen" component={DriverScreen} />
            <Stack.Screen name="chatbot" component={chatbot} />
            <Stack.Screen name="fakecall" component={fakecall} />
            <Stack.Screen name="MapScreen" component={MapScreen} />
            <Stack.Screen name="EatsScreen" component={EatsScreen} />
            
            <Stack.Screen name="SafeRoute" component={SafeRoute} />
            <Stack.Screen name="foodScreen" component={foodScreen} />
            <Stack.Screen name="Seat" component={Seat} />
            
            <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        </Stack.Navigator>
    );
}

export default MainNavigator;
