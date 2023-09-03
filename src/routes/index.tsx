import React from 'react'
import { NavigationContainer } from "@react-navigation/native";

import {StackNavigation} from './stackNavigation'

export function Routes(){
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  )
}