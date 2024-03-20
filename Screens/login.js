import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Login = ({navigation}) =>
{
    let [mailFieldVal, setMailFieldVal] = useState('');
    let [passFieldVal, setPassFieldVal] = useState('');
    let [response_Msg, setResponse_Msg] = useState('')

    const maleFieldValFun = (value) =>
        {
            setMailFieldVal(value);
        }

    const passFieldValFun = (value) =>
        {
            setPassFieldVal(value);
        }

        const postData = async () => {
            const api_url = 'https://sowlab.com/assignment/user/login';
            const data = {
                "email": mailFieldVal,
                "password": passFieldVal,
                "role": "farmer",
                "device_token": "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx",
                "type": "email/facebook/google/apple",
                "social_id": "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx"
            };

            console.log("login api data", data);

            try {
            const response = await fetch(api_url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              });

             const result = await response.json();
             console.log("login api success result", result);

             if(result.success)
             {
                navigation.navigate('Welcome Page', result.user.full_name);
             }
             else
             {
                Alert.alert(
                    'Login Error Message',
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
                        <Text style={styles.welcomeHeading}>Welcome back!</Text>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Text style={{fontSize : 14, fontWeight : '500', opacity : 0.3}}>New here? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                                <Text style={{fontSize: 14, fontWeight : '500', color: 'red'}}>Create Account</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{rowGap: 20, marginTop: 70}}>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative'}}>
                            <Text style={{position: 'absolute', left: 20, zIndex: 50, fontWeight:900, fontSize: 16}} >@</Text>
                            <TextInput style={styles.inputField} placeholder='Email Address' keyboardType='email-address' onChangeText={maleFieldValFun} />
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative'}}>
                            <FontAwesome name='lock' size={17} color='#000000' style={{position: 'absolute', left: 20, zIndex: 50}}/>
                            <TextInput style={styles.inputField} placeholder='Password' secureTextEntry onChangeText={passFieldValFun} />
                            <TouchableOpacity onPress={() => navigation.navigate('Forgot')} style={{position:'absolute', right: 20}} >
                                <Text style={{fontSize: 14, fontWeight : '500', color: 'red'}} >Forgot?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{rowGap: 50}}>
                        <TouchableOpacity onPress={postData} style={styles.loginBtn}>
                            <Text style={{color: 'white', fontSize: 18,  fontWeight: 500, textAlign: 'center'}}>Login</Text>
                        </TouchableOpacity>
                        <Text style={{color: '#261C124D', fontSize: 10, fontWeight: 500, textAlign: 'center'}}>or login with</Text>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={styles.loginWithSocialMedia}>
                                <Image source={require('../assets/google.png')} />
                            </View>
                            <View style={styles.loginWithSocialMedia}>
                                <Image source={require('../assets/apple.png')} />
                            </View>
                            <View style={styles.loginWithSocialMedia}>
                                <Image source={require('../assets/facebook.png')} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
};
export default Login;

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
    loginBtn : {
        backgroundColor: '#D5715B',
        paddingVertical: 16,
        borderRadius: 118
    },
    loginWithSocialMedia: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(0, 0, 0, 0.08)',
        width: '30%',
        height: 55,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    }
})