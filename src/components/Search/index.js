import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { 
    Text,
    View,
    StyleSheet
 } from 'react-native';

import Profilebutton from '../Profile/Profilebutton';
import Searchbutton from './Searchbutton';
import GoBackbutton from '../../components/GoBackbutton';

export default function Search() {
    const navigation = useNavigation();

 return (
     <>
        <Text>
            hey you pirambu2
        </Text>

        <Text>
            hey you pirambu2
        </Text>

        <Text>
            hey you pirambu2
        </Text>

        <Text>
            hey you pirambu2
        </Text>

        <Text>
            hey you pirambu2
        </Text>

        


        <View style={styles.fixed_bar}>

            <View style={[styles.img_fixed_bar, {marginTop: -5}]}>
                <Profilebutton
                    onClick= {() => navigation.navigate('Profile')}
                    img = {require('../../images/person.png')}
                />
            </View>

            <View style={[styles.img_fixed_bar, {marginTop: -5}]}>
                <Searchbutton
                    onClick= {() => navigation.navigate('Search')}
                    img = {require('../../images/lupa.png')}
                />
            </View>

            <View style={[styles.img_fixed_bar, {marginTop: -5}]}>
                <GoBackbutton
                    onClick= {() => navigation.navigate('Home')}
                    img = {require('../../images/home.png')}
                />
            </View>
                
        </View>
                
    </>
  );
}

const styles = StyleSheet.create({
    fixed_bar:{
        marginBottom: '16%',
        borderTopColor: "#d8d8d8",
        borderTopWidth: 2,
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row-reverse',
    },

    img_fixed_bar:{
        marginTop:5,
        width:50,
        height:30,
        marginHorizontal: '10%',
        marginTop:'15%'
    },
})