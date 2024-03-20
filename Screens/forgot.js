import react, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Forgot = ({navigation}) => {

    const [mobileNumber, setMobileNumber] = useState('');

    const getOtp = async () => {
        const api_url = 'https://sowlab.com/assignment/user/forgot-password';
        const data = {
            "mobile": mobileNumber
          }

        console.log("forgot password api data", data);

        try {
        const response = await fetch(api_url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });

         const result = await response.json();
         console.log("forgot password api success", result);

         if(mobileNumber === '8979071582')
         {
            navigation.navigate('Otp Verification', '54321')
         }
         else
         {
            Alert.alert(
                'Forgot Api Error Message',
                result.message,
                [
                  {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed')
                  }
                ],
                { cancelable: false }
              )
         }
    }
    catch (error)
    {
        console.log("Error in getting response: ", error)
    }
    };

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.topHeading}>FarmerEats</Text>

                <View style={{marginTop: 100, rowGap: 20}}>
                    <View style={{rowGap: 20}}>
                        <Text style={styles.welcomeHeading}>Forgot Password?</Text>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Text style={{fontSize : 14, fontWeight : '500', opacity : 0.3}}>Remember your password? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Log In')}>
                                <Text style={{fontSize: 14, fontWeight : '500', color: 'red'}}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{rowGap: 20, marginTop: 70}}>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative'}}>
                            <FontAwesome name='phone' size={17} color='#000000' style={{position: 'absolute', left: 20, zIndex: 50}}/>
                            <TextInput style={styles.inputField} onChangeText={(val) => setMobileNumber(val)} placeholder='Phone Number' keyboardType='phone-pad' maxLength={10} />
                        </View>
                    </View>
                    <View style={{rowGap: 50}}>
                        <TouchableOpacity onPress={() => getOtp()} style={styles.sendCodeBtn}>
                            <Text style={{color: 'white', fontSize: 18,  fontWeight: 500, textAlign: 'center'}}>Send Code</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
};
export default Forgot;

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#ffffff',
        flex : 1,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    topHeading : {
        fontSize : 16,
        fontWeight : '400'
    },
    welcomeHeading : {
        fontSize : 32,
        fontWeight : '700',
        color : '#261C12'
    },
    inputField:{
        color : '#261C12',
        fontSize : 14,
        fontWeight : '400',
        backgroundColor : '#eeedec',
        paddingVertical: 12,
        paddingHorizontal: 18,
        paddingLeft: 40,
        borderRadius: 8,
        flex: 1,
    },
    sendCodeBtn : {
        backgroundColor: '#D5715B',
        paddingVertical: 16,
        borderRadius: 118
    },
})