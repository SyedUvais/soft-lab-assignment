import React, {useState, useContext} from 'react';
import UserContext from './context/userContext';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as DocumentPicker from "expo-document-picker";

const Signup3 = ({navigation}) =>
{
    const { user, setUser } = useContext(UserContext);
    const [selectedFile, setSeclectedFile] = useState(null);

    const pickDocument = async () => {
        try {
            let result = await DocumentPicker.getDocumentAsync({});

            console.log(
                'URI : ' + result.uri,
                'Type : ' + result.type,
                'Name : ' + result.name,
                'Size : ' + result.size
            );

            console.log(result.assets[0].name);

            if(result)
            {
                setSeclectedFile(result.assets[0].name)
                setUser(prevUser => ({
                    ...prevUser,
                    registration_proof: result.assets[0].name,
                    }))
            }

            if (result.canceled)
            {
                console.log('Document picking cancelled');
            }

        } catch (error) {
                console.log('Error picking document:', error);
            }
    };

    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text style={styles.topHeading}>FarmerEats</Text>

                    <View style={{marginTop: 50, rowGap: 20}}>
                        <View style={{rowGap: 20}}>
                            <Text style={{fontSize: 14, fontWeight : '500', color: 'rgba(0, 0, 0, 0.3)', marginBottom: -10}}>Signup 3 of 4</Text>
                            <Text style={styles.welcomeHeading}>Verification</Text>
                            <Text style={{fontSize: 14, fontWeight: 400, color: 'rgba(0, 0, 0, 0.3)'}}>
                                Attached proof of Department of Agriculture registrations i.e. Florida Fresh, USDA Approved, USDA Organic
                            </Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30}}>
                            <Text style={{fontSize: 14, fontWeight: 400, color: '#261C12'}}>Attach proof of registration</Text>
                            <TouchableOpacity onPress={pickDocument} style={{width: 53, height: 53, backgroundColor: '#D5715B', borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Image source={require('../assets/camera.png')} />
                            </TouchableOpacity>
                        </View>

                        {selectedFile &&<View style={styles.fileNameField}>
                            <Text style={{fontSize: 16,fontWeight: '400', color: '#261C12'}}>{selectedFile}</Text>
                            <TouchableOpacity onPress={() => setSeclectedFile(!selectedFile)}>
                                <Text style={{fontSize: 18, fontWeight:700}}>X</Text>
                            </TouchableOpacity>
                        </View>
                        }
                    </View>
                </View>

                <View style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: 50}}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image source={require('../assets/leftArrow.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup4')} style={styles.continueBtn}>
                            <Text style={{color: 'white', fontSize: 18,  fontWeight: 500, textAlign: 'center'}}>Continue</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </>
    )
};
export default Signup3;

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#ffffff',
        flex : 1,
        paddingVertical: 50,
        paddingHorizontal: 30,
        display: 'flex',
        justifyContent: 'space-between'
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
    continueBtn : {
        backgroundColor: '#D5715B',
        paddingVertical: 16,
        borderRadius: 118,
        width: '60%'
    },
    fileNameField:{
        backgroundColor : '#eeedec',
        paddingVertical: 20,
        paddingHorizontal: 18,
        paddingLeft: 20,
        borderRadius: 8,
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
})