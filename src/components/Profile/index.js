import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { Text, View, StyleSheet, Image } from 'react-native';

import Profilebutton from './Profilebutton';
import Searchbutton from '../Search/Searchbutton';
import GoBackbutton from '../../components/GoBackbutton';

import ItemInProfile from './profileOpitions/ItemInProfile';

import { ScrollView } from 'react-native-gesture-handler';

import {user} from './profileOpitions/Opition/Name.js'

export default function Profile() {
    const navigation = useNavigation();

 return (
     <> 

        <ScrollView>
            <View style={[styles.person, {flexDirection:"row"}]}>
                
                <Image source={require("../../images/person.png")}
                style={{width:130, height:130}}/>
                <View>
                    <Text style={{fontSize:40, marginTop:'5%'}}>
                        {user.name}
                    </Text>
                    <Text>Moradora da casa 420 da Rua Penedo</Text>
                    <Text>(79) 9 9866-8844</Text>
                </View>    
                
            </View>



            <View style={styles.margin_itens}>
                <ItemInProfile
                    onClick ={() => navigation.navigate("Name")}
                    img = {require('../../images/person.png')}
                    name = "Nome"
                    detail = "Altere seu nome"
                    />
            </View>

            <View style={styles.margin_itens}>
                <ItemInProfile
                    onClick ={() => navigation.navigate("Adress")}
                    img = {require('./profileOpitions/Images/endereco.png')}
                    name = "Endereço"
                    detail = "Defina seu endereço atual"
                    />
            </View>

            <View style={styles.margin_itens}>
                <ItemInProfile
                    onClick ={() => navigation.navigate("Number")}
                    img = {require('./profileOpitions/Images/telefone.png')}
                    name = "Número"
                    detail = "Mudou de telefone?"
                    />
            </View>

            <View style={styles.margin_itens}>
                <ItemInProfile
                    onClick ={() => navigation.navigate("Email")}
                    img = {require('./profileOpitions/Images/email.png')}
                    name = "E-mail"
                    detail = "Troque seu E-mail aqui"
                    />
            </View>

            <View style={styles.margin_itens}>
                <ItemInProfile
                    onClick ={() => alert('botao 1')}
                    img = {require('./profileOpitions/Images/doacao.png')}
                    name = "Doação"
                    detail = "Apoie nossa ideia"
                    />
            </View>



            <View style={[styles.margin_itens, {marginTop:'8%'}]}>
                <ItemInProfile
                    onClick ={() => alert('botao 1')}
                    img = {require('./profileOpitions/Images/settings.png')}
                    name = "Configurações"
                    detail = "lorem, ipsum, dame, ..."
                    />
            </View>

            <View style={styles.margin_itens}>
                <ItemInProfile
                    onClick ={() => alert('botao 1')}
                    img = {require('./profileOpitions/Images/interrogation.png')}
                    name = "Ajuda"
                    detail = "Proucure ajuda aqui."
                    />
            </View>

        </ScrollView>




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

    margin_itens:{
        marginBottom: '3%',
    },

    person:{
        marginTop: '6%',
        marginBottom: '5%',
    }
})