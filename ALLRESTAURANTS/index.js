import React from 'react';
import { 
    View,
    StyleSheet,
 } from 'react-native';

import Restaurant from '../src/components/Restaurant'
import {useNavigation} from '@react-navigation/native'

export default function ALLRESTAURANTS() {
    const navigation = useNavigation();

 return (
   <>
        <View style ={styles.margin_itens}>
            <Restaurant
                onClick={() => navigation.navigate('Detail')}
                img = {require("./images/Mc_Donald's/mc_logo.jpg")}
                name = "Mc Donald's"
                time = "20 min"
                />
        </View>


        <View style ={styles.margin_itens}>
            <Restaurant
                onClick={() => navigation.navigate('Detail')}
                img = {require('../src/images/person.png')}
                name = "Burguer King"
                time = "25 min"
                />
        </View>


        <View style ={styles.margin_itens}>
            <Restaurant
                onClick={() => navigation.navigate('Detail')}
                img = {require('../src/images/person.png')}
                name = "Seu Jõao"
                time = "15 min"
                />
        </View>
        

        <View style ={styles.margin_itens}>
            <Restaurant
                onClick={() => navigation.navigate('Detail')}
                img = {require('../src/images/person.png')}
                name = "Seu zé"
                time = "50 min"
                />
        </View>


        <View style ={styles.margin_itens}>
            <Restaurant
                onClick={() => navigation.navigate('Detail')}
                img = {require('../src/images/person.png')}
                name = "Seu Pedro"
                time = "25 min"
                />
        </View>


        <View style ={styles.margin_itens}>
            <Restaurant
                onClick={() => navigation.navigate('Detail')}
                img = {require('../src/images/person.png')}
                name = "Seu Jõao"
                time = "15 min"
                />
        </View>


        <View style ={styles.margin_itens}>
            <Restaurant
                onClick={() => navigation.navigate('Detail')}
                img = {require('../src/images/person.png')}
                name = "Seu zé"
                time = "50 min"
                />
        </View>


        <View style ={styles.margin_itens}>
            <Restaurant
                onClick={() => navigation.navigate('Detail')}
                img = {require('../src/images/person.png')}
                name = "Seu Pedro"
                time = "25 min"
                />
        </View>


        <View style ={styles.margin_itens}>
            <Restaurant
                onClick={() => navigation.navigate('Detail')}
                img = {require('../src/images/person.png')}
                name = "Seu Jõao"
                time = "15 min"
                />
        </View>
   </>
  );
}

const styles = StyleSheet.create({
    margin_itens : {
        marginBottom: '5%',
    },
})
