import React, {ReactNode} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../theme/light'

type Props = {
  children: ReactNode
}

export default function  BackgroundGradient({children} : Props){
  return (
    <LinearGradient colors={[theme.COLORS.SECONDARY, theme.COLORS.PRIMARY]} start={{x:0,y:0}} end={{x:1,y:0}} style={{borderRadius:16,  marginRight:24, marginTop: 28}}>
      {children}
    </LinearGradient>
  )
}