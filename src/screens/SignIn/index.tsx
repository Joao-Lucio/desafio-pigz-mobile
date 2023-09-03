import {View, Text, Button} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import Logo from '../../../assets/pigz-logotipo.svg'

export function SignIn(){

  const navigation = useNavigation();

  function navegar(){
    console.log('Foi')
  }

  return (
    <View>
      <Logo/>
      <Text>SignIn</Text>
      <Button title='Login' onPress={navegar}/>
    </View>
  )
}