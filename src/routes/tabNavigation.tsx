import React from 'react'
import {Button} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Report from '../../assets/report.svg'
import Profile from '../../assets/profile.svg'
import Overview from '../../assets/home.svg'
import Back from '../../assets/arrow-back.svg'
import styleGlobal from '../../globalStyle'

import {Home} from '../screens/Home'

const {Navigator, Screen} = createBottomTabNavigator()

export default function TabNavigation(){
  return (
    <Navigator 
    initialRouteName="Visão Geral"
    screenOptions={{
      tabBarActiveTintColor: "#FA641E",
      tabBarLabelStyle: {
        fontFamily: styleGlobal.fonts.medium,
      }
    }}>
      <Screen name='Relatorio' component={Home} options={{headerTitleAlign:'center',tabBarIcon: Report}}/>
      <Screen name='Visão Geral' component={Home} options={{headerTitleAlign:'center', headerTitleStyle:{fontFamily: styleGlobal.fonts.medium,fontSize:18,color:'#222222'},tabBarIcon: Overview, headerLeft: ()=>(
        <Back style={{marginLeft: 16, marginTop:4}}/>
      )}}/>
      <Screen name='Perfil' component={Home} options={{headerTitleAlign:'center',tabBarIcon: Profile}}/>
    </Navigator>
  )
}