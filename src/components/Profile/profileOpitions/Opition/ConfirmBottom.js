import React from 'react';
import { 
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ConfirmBottom(props) {

 return (
  <>
    <TouchableOpacity onPress={props.onClick} >
      <Image
        source={props.img}
        style={{width: 160, height:70, marginTop:"15%"}}
      />
    </TouchableOpacity>
  </>
  );
}