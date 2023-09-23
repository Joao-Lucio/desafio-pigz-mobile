import React, {useEffect} from 'react'
import { Container, Splash} from './styles'
import { useNavigation } from "@react-navigation/native";

export default function SplashCreeen(){

  const navigation = useNavigation();

  function navegar(){
    navigation.navigate('SignIn')
  }

  useEffect(() => {
    setTimeout(() => {
      navegar()
   },2000);
  }, [])

  return(
    <Container>
      <Splash source={require('../../../assets/tela_splash.png')}/>
    </Container>
  )
}