import React, {useState, useContext, useEffect} from 'react';
import UserContext from './context/userContext';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

const Signup4 = ({navigation}) =>
{
    const { user, setUser } = useContext(UserContext);
    const [selectedDay, setSelectedDay] = useState(null);
    const [slot1, setSlot1] = useState(false);
    const [slot2, setSlot2] = useState(false);
    const [slot3, setSlot3] = useState(false);
    const [slot4, setSlot4] = useState(false);
    const [slot5, setSlot5] = useState(false);

    const [slotsArray, setSlotsArray] = useState([]);
    console.log("Slots array value and selected day", slotsArray, selectedDay);

    // Function to change or add business hours for a specific day
    function setBusinessHours(day, hours) {

            setUser(prevUser => ({
                ...prevUser,
                business_hours: {[day]: hours},
                }))
        }

    const handlePress = () =>
    {
        setBusinessHours(selectedDay, slotsArray);
    }

    const updateSlotHours = () => {
            let a = [];

            if(slot1) a.push("8:00am - 10:00am");
            if(slot2) a.push("10:00am - 1:00pm");
            if(slot3) a.push("1:00pm - 4:00pm");
            if(slot4) a.push("4:00pm - 7:00pm");
            if(slot5) a.push("7:00pm - 10:00pm");

            setSlotsArray(a);
    };

    useEffect(() => {
        updateSlotHours();
    }, [slot1, slot2, slot3, slot4, slot5]);

    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text style={styles.topHeading}>FarmerEats</Text>

                    <View style={{marginTop: 50, rowGap: 20}}>
                        <View style={{rowGap: 20}}>
                            <Text style={{fontSize: 14, fontWeight : '500', color: 'rgba(0, 0, 0, 0.3)', marginBottom: -10}}>Signup 4 of 4</Text>
                            <Text style={styles.welcomeHeading}>Business Hours</Text>
                            <Text style={{fontSize: 14, fontWeight: 400, color: 'rgba(0, 0, 0, 0.3)'}}>
                                Attached proof of Department of Agriculture registrations i.e. Florida Fresh, USDA Approved, USDA Organic
                            </Text>
                        </View>
                    </View>

                    <View style={{disple:'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 50}}>
                        <TouchableOpacity style={[styles.weekDays, {backgroundColor: selectedDay === 'M' ? '#D5715B' : '#ffffff'}, {color: selectedDay === 'M' ? 'white' : '#261C12'}]} onPress={() => (setSelectedDay('M'), handlePress())}><Text>M</Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.weekDays, {backgroundColor: selectedDay === 'T' ? '#D5715B' : '#ffffff'}, {color: selectedDay === 'T' ? 'white' : '#261C12'}]} onPress={() => (setSelectedDay('T'), handlePress())}><Text>T</Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.weekDays, {backgroundColor: selectedDay === 'W' ? '#D5715B' : '#ffffff'}, {color: selectedDay === 'W' ? 'white' : '#261C12'}]} onPress={() => (setSelectedDay('W'), handlePress())}><Text>W</Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.weekDays, {backgroundColor: selectedDay === 'Th' ? '#D5715B' : '#ffffff'}, {color: selectedDay === 'Th' ? 'white' : '#261C12'}]} onPress={() => (setSelectedDay('Th'), handlePress())}><Text>Th</Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.weekDays, {backgroundColor: selectedDay === 'F' ? '#D5715B' : '#ffffff'}, {color: selectedDay === 'F' ? 'white' : '#261C12'}]} onPress={() => (setSelectedDay('F'), handlePress())}><Text>F</Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.weekDays, {backgroundColor: selectedDay === 'Su' ? '#D5715B' : '#ffffff'}, {color: selectedDay === 'Su' ? 'white' : '#261C12'}]} onPress={() => (setSelectedDay('Su'), handlePress())}><Text>Su</Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.weekDays, {backgroundColor: selectedDay === 'S' ? '#D5715B' : '#ffffff'}, {color: selectedDay === 'S' ? 'white' : '#261C12'}]} onPress={() => (setSelectedDay('S'), handlePress())}><Text>S</Text></TouchableOpacity>
                    </View>

                    <View style={{disple:'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 50, flexWrap: 'wrap', rowGap: 10}}>
                        <TouchableOpacity style={[styles.timeSlots, {backgroundColor: slot1 === true ? '#F8C569' : '#ffffff'},]} onPress={() => setSlot1(!slot1)}><Text>8:00am - 10:00am</Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.timeSlots, {backgroundColor: slot2 === true ? '#F8C569' : '#ffffff'},]} onPress={() => setSlot2(!slot2)}><Text>10:00am - 1:00pm</Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.timeSlots, {backgroundColor: slot3 === true ? '#F8C569' : '#ffffff'},]} onPress={() => setSlot3(!slot3)}><Text>1:00pm - 4:00pm</Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.timeSlots, {backgroundColor: slot4 === true ? '#F8C569' : '#ffffff'}, ]} onPress={() => setSlot4(!slot4)}><Text>4:00pm - 7:00pm</Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.timeSlots, {backgroundColor: slot5 === true ? '#F8C569' : '#ffffff'},]} onPress={() => setSlot5(!slot5)}><Text>7:00pm - 10:00pm</Text></TouchableOpacity>
                    </View>
                </View>

                <View style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: 50}}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image source={require('../assets/leftArrow.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => (handlePress(), navigation.navigate('SignupFinal'))} style={styles.continueBtn}>
                            <Text style={{color: 'white', fontSize: 18,  fontWeight: 500, textAlign: 'center'}}>Continue</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </>
    )
};
export default Signup4;

const styles = StyleSheet.create({
    container : {
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
    weekDays:{
        fontSize : 14,
        fontWeight : '400',
        backgroundColor : 'rgba(0, 0, 0, 0.08)',
        width: 37,
        height: 36,
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    timeSlots:{
        fontSize : 14,
        fontWeight : '400',
        backgroundColor : 'rgba(0, 0, 0, 0.08)',
        width: '45%',
        height: 48,
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
})