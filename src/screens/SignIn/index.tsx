import {View, Text, Button} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import Logo from '../../../assets/pigz-logotipo.svg'

export function SignIn(){

  const navigation = useNavigation();

  function navegar(){
    navigation.navigate('Navigation')
  }

  return (
    <View>
      <Logo/>
      <Text>SignIn</Text>
      <Button title='Login' onPress={navegar}/>
    </View>
  )
}