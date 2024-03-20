import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Image, TouchableOpacity } from 'react-native';

const Onboarding = ({item, navigation}) =>
{
  console.log("item value", item.key);

  const {width} = useWindowDimensions();

  let img1 = '../assets/onboarding1.png';
  let img2 = '../assets/onboarding2.png';
  let img3 = '../assets/onboarding3.png';

    return (
        <>
            <View style={[styles.container, { backgroundColor: item.key === 1 ? '#5EA25F' : item.key === 2 ? '#D5715B' : '#F8C569' }, {width}]}>
            {item.key === 1 ? <Image source={require(img1)} /> : item.key === 2 ? <Image source={require(img2)} /> : <Image source={require(img3)} />}
                <View style={styles.lowerSection}>
                    <Text style={styles.heading}>{item.heading}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.dotParent}>
                      <View style={[styles.dot, {width : item.key === 1 ? 17: 7}]}></View>
                      <View style={[styles.dot, {width : item.key === 2 ? 17: 7}]}></View>
                      <View style={[styles.dot, {width : item.key === 3 ? 17: 7}]}></View>
                    </View>
                    <View style={{display: 'flex', alignItems: 'center'}}>
                      <TouchableOpacity style={[styles.movementBtn, { backgroundColor: item.key === 1 ? '#5EA25F' : item.key === 2 ? '#D5715B' : '#F8C569' }]}>
                          <Text style={styles.movementBtnText}>Join the movement</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('Log In')} style={{marginTop: 20}}>
                          <Text style={{fontSize: 16, color: '#261C12',fontWeight: '500', textDecorationLine: 'underline'}}>Log in</Text>
                      </TouchableOpacity>
                    </View>
                </View>
                <StatusBar style="auto" />
            </View>
        </>
    )
};
export default Onboarding;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
    },
    lowerSection: {
      backgroundColor: 'white',
      flex: 1,
      marginTop: 50,
      borderTopStartRadius: 50,
      borderTopEndRadius: 50,
      paddingVertical: 30,
      paddingHorizontal: 40,
      justifyContent: 'space-evenly'
    },
    heading : {
      fontSize: 24,
      fontWeight: '700',
      textAlign: 'center',
    },
    description : {
      fontSize: 14,
      fontWeight: '400',
      color: '#261C12',
      textAlign: 'center'
    },
    dot :{
      height: 7,
      width: 7,
      backgroundColor: 'black',
      borderRadius: 20
    },
    dotParent: {
      display: 'flex',
      flexDirection: 'row',
      columnGap: 50,
      justifyContent:'center'
    },
    movementBtn: {
      backgroundColor: '#5EA25F',
      width: '65%',
      paddingVertical: 14,
      borderRadius: 180
    },
    movementBtnText: {
      color: 'white',
      fontSize: 18,
      fontWeight : '500',
      textAlign: 'center',
    }
  });