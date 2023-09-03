import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {Home} from '../screens/Home'

const {Navigator, Screen} = createBottomTabNavigator()

export default function TabNavigation(){
  return (
    <Navigator>
      <Screen name='Relatorio' component={Home}/>
      <Screen name='Visão Geral' component={Home}/>
      <Screen name='Perfil' component={Home}/>
    </Navigator>
  )
}