import React, { useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';
const ShakeScreen = () => {
useEffect(() => {
const subscription = Accelerometer.addListener(({ x, y, z }) => {
const acceleration = Math.sqrt(x * x + y * y + z * z);
const shakeThreshold = 2.2; // Adjust this value as needed
if (acceleration > shakeThreshold) {
handleShake();
}
});
return () => {
subscription.remove();
};
}, []);
const handleShake = async () => {
try {
const SERVICE_PLAN_ID = '';
const API_TOKEN = '';
const SINCH_NUMBER = '';
const TO_NUMBER = ['','']; 
const url =
`https://us.sms.api.sinch.com/xms/v1/${SERVICE_PLAN_ID}/batches`;
const headers = {
'Content-Type': 'application/json',
Authorization: 'Bearer ' + API_TOKEN
};
for (let i = 0; i < TO_NUMBER.length; i++) {
const toNumber = TO_NUMBER[i];
const body = JSON.stringify({
from: SINCH_NUMBER,
to: [toNumber],
body: 'ANKITA is in Danger. Track their location : https://maps.app.goo.gl/otBG9du9h1frPBxGA and send help'
});
console.log('Sending SMS to:', toNumber);
const response = await fetch(url, {
method: 'POST',
headers,
body
});
const data = await response.json();
console.log('SMS response:', data);
}
// Optional: Display an alert after sending the SMS
Alert.alert('SMS Sent', 'Shaking detected! SMS alert sent.');
} catch (error) {
console.error('Failed to send SMS:', error);
}
};
return (
<View style={styles.container}>

</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
text: {
fontSize: 18,
fontWeight: 'bold',
},
});
export default ShakeScreen;
