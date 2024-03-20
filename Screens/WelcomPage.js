import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const WelcomePage = ({navigation, route}) =>
{
    const full_name = route.params

    return (
        <View>
            <Text style={styling.nameTag}>Welcome <Text style={{color: 'red'}}>{full_name}</Text></Text>
            <Image style={styling.img} source={{uri: 'https://thumbs.dreamstime.com/b/holiday-welcome-sign-hanging-rustic-teal-blue-wood-background-white-christmas-garland-border-61613569.jpg'}} />

            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styling.homeBtn}>
                <Text style={{color: 'white', fontSize: 18,  fontWeight: 500, textAlign: 'center'}}><FontAwesome name='home' size={20} color='#fff'/> Home</Text>
            </TouchableOpacity>
        </View>
    );
};

const styling = StyleSheet.create({
    nameTag:
    {
        color: '#2a364f',
        textAlign: 'center',
        fontSize: 35,
        marginTop: 100
    },
    img:
    {
        width: '80%',
        height: '50%',
        marginHorizontal: '10%',
        marginTop: 50,
        borderRadius: 20
    },
    homeBtn : {
        backgroundColor: '#D5715B',
        paddingVertical: 16,
        borderRadius: 118,
        width: '80%',
        marginTop: 30,
        marginHorizontal: '10%'
    },
})

export default WelcomePage;