import React, { useContext, useState } from 'react';
import UserContext from './context/userContext';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Signup = ({navigation}) =>
{
    const { user, setUser } = useContext(UserContext);
    const [cnfrmPassword, setCnfrmPassword] = useState('');
    console.log("Syed", user);
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.topHeading}>FarmerEats</Text>

                <View style={{marginTop: 50, rowGap: 20}}>
                    <View style={{rowGap: 20}}>
                        <Text style={{fontSize: 14, fontWeight : '500', color: 'rgba(0, 0, 0, 0.3)', marginBottom: -10}}>Signup 1 of 4</Text>
                        <Text style={styles.welcomeHeading}>Welcome!</Text>

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

                        <Text style={{color: '#261C124D', fontSize: 10, fontWeight: 500, textAlign: 'center'}}>or signup with</Text>
                    </View>
                    <View style={{rowGap: 20, marginTop: 20}}>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative'}}>
                            <FontAwesome name='user' size={17} color='#000000' style={{position: 'absolute', left: 20, zIndex: 50}}/>
                            <TextInput style={styles.inputField} placeholder='Full Name' onChangeText={(val) => setUser(prevUser => ({
                            ...prevUser,
                            full_name: val,
                            }))} />
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative'}}>
                            <Text style={{position: 'absolute', left: 20, zIndex: 50, fontWeight:900, fontSize: 16}} >@</Text>
                            <TextInput style={styles.inputField} placeholder='Email Address' keyboardType='email-address' onChangeText={(val) => setUser(prevUser => ({
                            ...prevUser,
                            email: val,
                            }))} />
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative'}}>
                            <FontAwesome name='phone' size={17} color='#000000' style={{position: 'absolute', left: 20, zIndex: 50}}/>
                            <TextInput style={styles.inputField} placeholder='Phone Number' keyboardType='phone-pad' maxLength={10} onChangeText={(val) => setUser(prevUser => ({
                            ...prevUser,
                            phone: val,
                            }))} />
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative'}}>
                            <FontAwesome name='lock' size={17} color='#000000' style={{position: 'absolute', left: 20, zIndex: 50}}/>
                            <TextInput style={styles.inputField} placeholder='Password' secureTextEntry onChangeText={(val) => setUser(prevUser => ({
                            ...prevUser,
                            password: val,
                            }))} />
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative'}}>
                            <FontAwesome name='lock' size={17} color='#000000' style={{position: 'absolute', left: 20, zIndex: 50}}/>
                            <TextInput style={styles.inputField} placeholder='Confirm Password' secureTextEntry onChangeText={(val) => setCnfrmPassword(val)} />
                        </View>
                    </View>
                    <View style={{rowGap: 50, display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: 50}}>
                        <TouchableOpacity onPress={() => navigation.navigate('Log In')}>
                            <Text style={{fontSize: 14, fontWeight : '500', color: 'red',textDecorationLine: 'underline'}}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup2')} style={styles.continueBtn}>
                            <Text style={{color: 'white', fontSize: 18,  fontWeight: 500, textAlign: 'center'}}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
};
export default Signup;

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
    continueBtn : {
        backgroundColor: '#D5715B',
        paddingVertical: 16,
        borderRadius: 118,
        width: '60%'
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