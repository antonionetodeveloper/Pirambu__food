import React from 'react';
import { 
  Text,
  View,
  StyleSheet,
  Image,

   } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ItemInProfile(props) {
 return (
  <>
    <TouchableOpacity onPress={props.onClick}>
      
        <View style={styes.restaurant_item_inlist}>
          <Image
            style={{width: 60, height:60}}
            source={props.img}
          />

          <View>
            <Text style={{fontSize:30}}>
              {props.name}
            </Text>

            <Text>
              {props.detail}
            </Text>
          </View>

        </View>
              
    </TouchableOpacity>
  </>
);
}

const styes = StyleSheet.create({
  /*Só copiei as funções/variáveis anteriores pq já estavam feitas*/

  restaurant_item_inlist:{
    borderTopColor: "#d8d8d8",
    borderTopWidth: 2,
    borderBottomColor: "#d8d8d8",
    borderBottomWidth: 2,
    flex: 1,
    flexDirection: 'row'
  },

})