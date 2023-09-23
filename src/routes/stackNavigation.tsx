import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import theme from '../theme/light'

import {SignIn} from '../screens/SignIn'
import TabNavigation from './tabNavigation'
import {NewDelivery} from '../screens/NewDelivery'
import SplashCreeen from '../screens/SplashScreen'

const {Navigator, Screen} = createStackNavigator()

export function StackNavigation(){
  return(
    <Navigator >
      <Screen name='Splash' component={SplashCreeen} options={{headerShown: false}}/>
      <Screen name='SignIn' component={SignIn} options={{headerShown: false}}/>
      <Screen name='Navigation' component={TabNavigation} options={{headerShown:false}}/>
      <Screen name='NewDelivery' component={NewDelivery} options={{headerTintColor:theme.COLORS.PRIMARY,headerTitleAlign:'center',headerTitle:'Nova entrega',headerTitleStyle:{fontFamily: theme.FONTS.POPPINS_MEDIUM,fontSize:18,color:'#222222'}}}/>
    </Navigator>
  )
}