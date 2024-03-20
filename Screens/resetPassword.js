import react, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const ResetPassword = ({navigation}) => {

    const [password, setPassword] = useState('');
    const [cnfrmPassword, setCnfrmPassword] = useState('');

    const resetPassword = async () => {
        const api_url = 'https://sowlab.com/assignment/user/reset-password';
        const data = {
            "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTA1OTEwOTEsImV4cCI6MTcxMDU5NDY5MSwiZGF0YSI6eyJpZCI6IjM2OSIsImZ1bGxfbmFtZSI6IlN5ZWQgVXZhaXMiLCJlbWFpbCI6InNhbXBsZUBnbWFpbC5jb20ifX0.djv2f4ylr_uMIIlDpq4qdiFR84HSQKSVG8a2_QzVTkY",
            "password": password,
            "cpassword": cnfrmPassword
          }

        console.log("reset password api data", data);

        try {
        const response = await fetch(api_url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });

         const result = await response.json();
         console.log("reset password api success", result);

         if(result.success)
         {
            navigation.navigate('Home');
         }
         else
         {
            Alert.alert(
                'Reset Password Api Error',
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
                        <Text style={styles.welcomeHeading}>Reset Password?</Text>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Text style={{fontSize : 14, fontWeight : '500', opacity : 0.3}}>Remember your password? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Log In')}>
                                <Text style={{fontSize: 14, fontWeight : '500', color: 'red'}}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{rowGap: 20, marginTop: 70}}>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative'}}>
                            <FontAwesome name='lock' size={17} color='#000000' style={{position: 'absolute', left: 20, zIndex: 50}}/>
                            <TextInput style={styles.inputField} onChangeText={(val) => setPassword(val)} placeholder='Password' secureTextEntry />
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative'}}>
                            <FontAwesome name='lock' size={17} color='#000000' style={{position: 'absolute', left: 20, zIndex: 50}}/>
                            <TextInput style={styles.inputField} onChangeText={(val) => setCnfrmPassword(val)} placeholder='Confirm Password' secureTextEntry />
                        </View>
                    </View>
                    <View style={{rowGap: 50}}>
                        <TouchableOpacity onPress={resetPassword} style={styles.submitBtn}>
                            <Text style={{color: 'white', fontSize: 18,  fontWeight: 500, textAlign: 'center'}}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
};
export default  ResetPassword;

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
    submitBtn : {
        backgroundColor: '#D5715B',
        paddingVertical: 16,
        borderRadius: 118
    },
})