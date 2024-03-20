import React, {useState, useEffect, useContext} from 'react';
import UserContext from './context/userContext';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';

const Signup2 = ({navigation}) =>
{
    const { user, setUser } = useContext(UserContext);
    const [jsonData, setJsonData] = useState([]);
    const [stateValue, setStateValue] = useState('');

    const jsonFileURL = 'https://gist.githubusercontent.com/anubhavshrimal/4aeb195a743d0cdd1c3806c9c222ed45/raw/181a34db4fcb8b37533b7c8b9c489b6c01573158/Indian_Cities_In_States_JSON'

    useEffect(() => {

    fetch(jsonFileURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            // Ensure that the fetched data is an array before setting it in the state
            if (Array.isArray(data)) {
                setJsonData(data);
            } else {
                // Convert the fetched data to an array
                const dataArray = Object.entries(data).map(([state, cities]) => ({
                    state,
                    cities,
                }));
                setJsonData(dataArray);
            }
        })
        .catch((error) => {
            console.error('Error fetching JSON data:', error);
        });
    }, []);
    // console.log(jsonData)

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.topHeading}>FarmerEats</Text>

                <View style={{marginTop: 50, rowGap: 20}}>
                    <View style={{rowGap: 20}}>
                        <Text style={{fontSize: 14, fontWeight : '500', color: 'rgba(0, 0, 0, 0.3)', marginBottom: -10}}>Signup 2 of 4</Text>
                        <Text style={styles.welcomeHeading}>Farm Info</Text>
                    </View>
                    <View style={{rowGap: 20, marginTop: 20}}>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative'}}>
                            <FontAwesome name='tag' size={17} color='#000000' style={{position: 'absolute', left: 20, zIndex: 50}}/>
                            <TextInput style={styles.inputField} placeholder='Business Name' onChangeText={(val) => setUser(prevUser => ({
                            ...prevUser,
                            business_name: val,
                            }))} />
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative'}}>
                            <FontAwesome name='smile-o' size={17} color='#000000' style={{position: 'absolute', left: 20, zIndex: 50}}/>
                            <TextInput style={styles.inputField} placeholder='Informal Name' onChangeText={(val) => setUser(prevUser => ({
                            ...prevUser,
                            informal_name: val,
                            }))} />
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative'}}>
                            <FontAwesome name='home' size={17} color='#000000' style={{position: 'absolute', left: 20, zIndex: 50}}/>
                            <TextInput style={styles.inputField} placeholder='Street Address' onChangeText={(val) => setUser(prevUser => ({
                            ...prevUser,
                            address: val,
                            }))} />
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative'}}>
                            <FontAwesome name='location-arrow' size={17} color='#000000' style={{position: 'absolute', left: 20, zIndex: 50}}/>
                            <TextInput style={styles.inputField} placeholder='City' onChangeText={(val) => setUser(prevUser => ({
                            ...prevUser,
                            city: val,
                            }))} />
                        </View>
                        <View style={{display: 'flex',flexDirection:'row', justifyContent: 'space-between'}} >
                            <Picker
                                style={{ color : '#261C12',fontSize : 14,fontWeight : '400',backgroundColor : '#eeedec',paddingVertical: 12,paddingHorizontal: 18,paddingLeft: 40,borderRadius: 8, width:'40%' }}
                                selectedValue={stateValue}
                                onValueChange={(itemValue, itemIndex) => (setStateValue(itemValue), setUser(prevUser => ({
                                ...prevUser,
                                state: itemValue,
                                })))}>
                                <Picker.Item label="State" value="" />
                                {jsonData.map((stateData, index) => (
                                    <Picker.Item key={index} label={stateData.state} value={stateData.state} />
                                ))}
                            </Picker>
                            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative', width:'50%'}}>
                                <TextInput style={[styles.inputField, {paddingLeft: 10}]} placeholder='Enter Zipcode' onChangeText={(val) => setUser(prevUser => ({
                            ...prevUser,
                            zip_code: val,
                            }))} />
                            </View>
                        </View>
                    </View>
                    <View style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: 50}}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image source={require('../assets/leftArrow.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup3')} style={styles.continueBtn}>
                            <Text style={{color: 'white', fontSize: 18,  fontWeight: 500, textAlign: 'center'}}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
};
export default Signup2;

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