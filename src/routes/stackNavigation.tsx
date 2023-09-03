import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import {SignIn} from '../screens/SignIn'
import TabNavigation from './tabNavigation'

const {Navigator, Screen} = createStackNavigator()

export function StackNavigation(){
  return(
    <Navigator>
      <Screen name='SignIn' component={SignIn}/>
      <Screen name='Navigation' component={TabNavigation}/>
    </Navigator>
  )
}