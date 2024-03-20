import React from 'react';
import Onboarding from './Onboarding';
import { FlatList } from 'react-native';
import onboardScreenData from './onBoardScreenData';

const Home = ({navigation}) =>
{
    return (
        <>
             <FlatList
                data={onboardScreenData}
                renderItem={(item) => <Onboarding item={item.item} navigation={navigation}/>}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator
                bounces={false}
                />
        </>
    )
};
export default Home;