import React, {useState} from 'react'
import { useNavigation } from "@react-navigation/native";
import Logo from '../../../assets/pigz-logotipo.svg'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Google from '../../../assets/logo-google.svg'
import {EditText} from '../../components/EditText'
import ButtonPress from '../../components/ButtonPress';
import { Conteiner, Link, Button, SubContainer, Border } from './styles';
import {TextButton,Title, SubTitle, Text, Line} from '../../components/Global/styles'
import { ContainerMain } from '../../components/ContainerMain';
import BackgroundGradient from '../../components/BackgroundGradient'
import theme from '../../theme/light'
import { View } from 'react-native';

export function SignIn(){

  const navigation = useNavigation();

  function navegar(){
    navigation.navigate('Navigation')
  }
  const [eye, setEye] = useState(true)

  const loginGoogle = ()=>{
    console.log('API GOOGLE')
  }

  return (
    <ContainerMain>
      <Conteiner style={{alignItems: 'center'}}>
        <Logo/>
        <Title>Para entregadores</Title>
      </Conteiner>
      <Conteiner>
          <SubTitle>Login</SubTitle>
          <EditText title='Email ou Telefone' type='email' placeholder='example@pigz.com.br'/>
          <EditText title='Senha' type='pass' placeholder='********'/>
          <TouchableOpacity>
            <Link>Esqueci minha senha</Link>
          </TouchableOpacity>
          <BackgroundGradient>
            <ButtonPress text={'Entrar'} action={navegar} color={theme.COLORS.TEXT_BUTTON}/>
          </BackgroundGradient>
          <SubContainer>
            <Text style={{paddingEnd: 8}}>Não tem uma Conta?</Text>
            <TouchableOpacity>
            <Text style={{color: theme.COLORS.PRIMARY}}>Criar agora!</Text>
            </TouchableOpacity>
          </SubContainer>
      </Conteiner>
      <Conteiner>
        <SubContainer style={{justifyContent:'flex-start'}}>
          <Title style={{fontSize: 13}}>Entrar com</Title>
          <Line style={{flex:1}}/>
        </SubContainer>
        <Border>
          <Google style={{position:'absolute', alignSelf:'flex-start', marginLeft: 16}}/>
          <ButtonPress text={'Continuar com o Google'} action={loginGoogle} color={theme.COLORS.TEXT_BUTTON_SECONDARY}/>
        </Border>
      </Conteiner>
    </ContainerMain>  
  )
}