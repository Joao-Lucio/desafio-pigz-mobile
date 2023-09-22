import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from '../../assets/'
import theme from '../theme/light'
import {Home} from '../screens/Home'

const {Navigator, Screen} = createBottomTabNavigator()

export default function TabNavigation(){
  return (
    <Navigator 
    initialRouteName="Visão Geral"
    screenOptions={{
      tabBarActiveTintColor: theme.COLORS.PRIMARY,
      tabBarLabelStyle: {
        fontFamily: theme.FONTS.POPPINS_MEDIUM,
      }
    }}>
      <Screen name='Relatorio' component={Home} options={{headerTitleAlign:'center',tabBarIcon: Icon.Report}}/>
      <Screen name='Visão Geral' component={Home} options={{headerTitleAlign:'center', headerTitleStyle:{fontFamily: theme.FONTS.POPPINS_MEDIUM,fontSize:18,color:theme.COLORS.HEADER_TEXT_COLOR},tabBarIcon: Icon.Home, headerLeft: ()=>(
        <Icon.ArrowBack style={{marginLeft: 16, marginTop:4}}/>
      )}}/>
      <Screen name='Perfil' component={Home} options={{headerTitleAlign:'center',tabBarIcon: Icon.Profile}}/>
    </Navigator>
  )
}