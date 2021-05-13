import React from 'react';
import { 
  Text,
  View,
  StyleSheet,
  Image,

   } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Restaurant(props) {
 return (
  <>
    <TouchableOpacity onPress={props.onClick}>
      
        <View style={styes.restaurant_item_inlist}>
          <Image
          style={{width: 90, height:90}}
          source={props.img}
          />

          <View>
            <Text style={{fontSize:30, marginTop:'8%'}}>
              {props.name}
            </Text>

            <Text style={{fontSize:18}}>
              {props.time}
            </Text>
          </View>

        </View>
              
    </TouchableOpacity>
  </>
);
}

const styes = StyleSheet.create({
  
  restaurant_item_inlist:{
    borderTopColor: "#d8d8d8",
    borderTopWidth: 2,
    borderBottomColor: "#d8d8d8",
    borderBottomWidth: 2,
    flex: 1,
    flexDirection: 'row'
  },

})