import React, {ReactNode} from 'react'
import {View} from 'react-native'

type Props = {
  children: ReactNode
}

export function Main ({children} : Props) {
  return (
    <View style={{flex:1}}>
      {children}
    </View>
  )
}