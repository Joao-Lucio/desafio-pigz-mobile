import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import styleGlobal from '../../globalStyle'

import {SignIn} from '../screens/SignIn'
import TabNavigation from './tabNavigation'
import {NewDelivery} from '../screens/NewDelivery'

const {Navigator, Screen} = createStackNavigator()

export function StackNavigation(){
  return(
    <Navigator >
      <Screen name='SignIn' component={SignIn} options={{headerShown: false}}/>
      <Screen name='Navigation' component={TabNavigation} options={{headerShown:false}}/>
      <Screen name='NewDelivery' component={NewDelivery} options={{headerTintColor:'#FA641F',headerTitleAlign:'center',headerTitle:'Nova entrega',headerTitleStyle:{fontFamily: styleGlobal.fonts.medium,fontSize:18,color:'#222222'}}}/>
    </Navigator>
  )
}