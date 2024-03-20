import react, {useRef, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const OtpVerification = ({navigation, route}) => {

    const OTP = route.params;

    const box1 = useRef();
    const box2 = useRef();
    const box3 = useRef();
    const box4 = useRef();
    const box5 = useRef();

    const [box1Val, setBox1Val] = useState('');
    const [box2Val, setBox2Val] = useState('');
    const [box3Val, setBox3Val] = useState('');
    const [box4Val, setBox4Val] = useState('');
    const [box5Val, setBox5Val] = useState('');

    let otpFieldVal = box1Val + box2Val + box3Val + box4Val + box5Val;

    const verifyOTP = async () => {
        const api_url = 'https://sowlab.com/assignment/user/verify-otp';
        const data = {
            "otp": otpFieldVal
          }

        console.log("verify otp api data", data);

        try {
        const response = await fetch(api_url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });

         const result = await response.json();
         console.log("verify otp api success", result);

         if(OTP === otpFieldVal)
         {
            navigation.navigate('Reset Password')
         }
         else
         {
            Alert.alert(
                'Otp Api error message',
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
                        <Text style={styles.welcomeHeading}>Verify OTP</Text>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Text style={{fontSize : 14, fontWeight : '500', opacity : 0.3}}>Remember your password? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Log In')}>
                                <Text style={{fontSize: 14, fontWeight : '500', color: 'red'}}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{rowGap: 20, marginTop: 70}}>
                        <View style={{disple:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <TextInput ref={box1} style={styles.otpField} onChangeText={(text) => (text.length === 1 ? box2.current.focus() : null, setBox1Val(text))} keyboardType='number-pad' maxLength={1} />
                            <TextInput ref={box2} style={styles.otpField} onChangeText={(text) => (text.length === 1 ? box3.current.focus() : box1.current.focus(), setBox2Val(text))} keyboardType='number-pad' maxLength={1} />
                            <TextInput ref={box3} style={styles.otpField} onChangeText={(text) =>( text.length === 1 ? box4.current.focus() : box2.current.focus(), setBox3Val(text))} keyboardType='number-pad' maxLength={1} />
                            <TextInput ref={box4} style={styles.otpField} onChangeText={(text) => (text.length === 1 ? box5.current.focus() : box3.current.focus(), setBox4Val(text))} keyboardType='number-pad' maxLength={1} />
                            <TextInput ref={box5} style={styles.otpField} onChangeText={(text) => (text.length === 1 ? null : box4.current.focus(), setBox5Val(text))} keyboardType='number-pad' maxLength={1} />
                        </View>
                    </View>

                    <View style={{rowGap: 20,marginTop: 50}}>
                        <TouchableOpacity onPress={verifyOTP} style={styles.submitBtn}>
                            <Text style={{color: 'white', fontSize: 18,  fontWeight: 500, textAlign: 'center'}}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                            <Text style={{fontSize: 14, fontWeight : '500', textDecorationLine: 'underline', textAlign: 'center'}}>Resend Code</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
};
export default OtpVerification;

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
    otpField:{
        color : '#261C12',
        fontSize : 18,
        fontWeight : '700',
        backgroundColor : 'rgba(0, 0, 0, 0.08)',
        width: 58,
        height: 59,
        borderRadius: 8,
        textAlign: 'center'
    },
    submitBtn : {
        backgroundColor: '#D5715B',
        paddingVertical: 16,
        borderRadius: 118
    },
})