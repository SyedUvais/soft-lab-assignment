import React, { useState,useContext } from 'react';
import UserContext from './context/userContext';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';

const SignupFinal = ({navigation}) =>
{
    const { user, setUser } = useContext(UserContext);

    console.log("user value onsignup final",user);

    const SignupApi = async () => {
        const api_url = 'https://sowlab.com/assignment/user/register';
        const data = user;

        console.log("signup api data", data);

        try {
        const response = await fetch(api_url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });

         const result = await response.json();
         console.log("signup api success result", result);

         if(result.success)
         {
            navigation.navigate('Welcome Page', result.user.full_name);
         }
         else
         {
            Alert.alert(
                'Signup Api Error Message',
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
                <View>
                    <View style={{marginTop: 150, rowGap: 30, display: 'flex', alignItems: 'center'}}>
                        <Image source={require('../assets/checkmark.png')} />
                        <View style={{rowGap: 30}}>
                            <Text style={styles.welcomeHeading}>You’re all done!</Text>
                            <Text style={{fontSize: 14, fontWeight: 400, color: 'rgba(0, 0, 0, 0.3)', textAlign:'center'}}>Hang tight!  We are currently reviewing your account and will follow up with you in 2-3 business days. In the meantime, you can setup your inventory.</Text>
                        </View>
                    </View>
                </View>

                <View style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: 50}}>
                        <TouchableOpacity onPress={SignupApi} style={styles.continueBtn}>
                            <Text style={{color: 'white', fontSize: 18,  fontWeight: 500, textAlign: 'center'}}>Got it!</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </>
    )
};
export default SignupFinal;

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#ffffff',
        flex : 1,
        paddingVertical: 50,
        paddingHorizontal: 30,
        display: 'flex',
        justifyContent: 'space-between'
    },
    welcomeHeading : {
        fontSize : 32,
        fontWeight : '700',
        color : '#261C12',
        textAlign: 'center'
    },
    continueBtn : {
        backgroundColor: '#D5715B',
        paddingVertical: 16,
        borderRadius: 118,
        width: '100%'
    },
})