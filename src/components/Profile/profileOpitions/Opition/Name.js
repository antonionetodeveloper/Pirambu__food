import React, {Component} from 'react';
import { View,Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import {useNavigation} from '@react-navigation/native'

import Profilebutton from '../../Profilebutton';
import Searchbutton from '../../../Search/Searchbutton';
import GoBackbutton from '../../../../components/GoBackbutton';
import ConfirmBottom from './ConfirmBottom';


export let user ={
    name : "jaja"
};


export default function Name() {
    const navigation = useNavigation();
    let inpt = React.useState('Name');
    

    return(
        <>
            <ScrollView>

                <Text
                    style={{marginTop:50, fontSize:30, textAlign:"center"}}>
                    Troque aqui o seu nome
                </Text>
                
                <View style={[styles.inputView, {marginTop: "30%"}]}>
                    <TextInput style={styles.newname} 
                        placeholder="Clique aqui!" 
                        maxLength={19}
                        />
                    
                    <Text>{user.name}</Text>

                    <ConfirmBottom
                        onClick={() => navigation.navigate('Profile')}
                        img = {require('./confirm_bottom2.png')}
                        />
                </View>

                <Text style={{fontSize:20, textAlign:"justify", marginTop: "30%", marginBottom:"30%", marginHorizontal:'3%'}}>
                    Você aqui está dizendo para o restaurante
                    por quem eles podem chamar para entregar sua comida. 
                    Recomendamos que você escolha seu nome real por motivos
                    de organização do restaurante.
                </Text>

            </ScrollView>
            <View style={styles.fixed_bar}>

                <View style={[styles.img_fixed_bar, {marginTop: -5}]}>
                    <Profilebutton
                        onClick= {() => navigation.navigate('Profile')}
                        img = {require('../../../../images/person.png')}
                        />
                </View>

                <View style={[styles.img_fixed_bar, {marginTop: -5}]}>
                    <Searchbutton
                        onClick= {() => navigation.navigate('Search')}
                        img = {require('../../../../images/lupa.png')}
                        />
                </View>

                <View style={[styles.img_fixed_bar, {marginTop: -5}]}>
                    <GoBackbutton
                        onClick= {() => navigation.navigate('Home')}
                        img = {require('../../../../images/home.png')}
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

    inputView:{
        justifyContent: "center",
        alignItems: "center",
    },

    newname:{
        textAlign:"center",
        marginTop:50,
        fontSize:40,
    },

    confirmBotton:{
        marginTop:"7%",
        width:"10%",
        height:"10%",
    }
})