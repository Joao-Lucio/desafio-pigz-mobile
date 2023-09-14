import React from 'react'
import { Container } from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import theme from '../../theme/light'

export default function CircleGradient(){
  return(
    <Container>
      <LinearGradient colors={[theme.COLORS.SECONDARY, theme.COLORS.PRIMARY]} start={{x:0,y:0}} end={{x:1,y:0}} style={{borderRadius:16,width: 16,height: 16}}/>
    </Container>
  )
}