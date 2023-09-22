import React, {useState} from 'react'
import { useNavigation } from "@react-navigation/native";
import Icon from '../../../assets/'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {EditText} from '../../components/EditText'
import ButtonPress from '../../components/ButtonPress';
import { Conteiner, Link, SubContainer, Border, Header } from './styles';
import {Title, Text, Line, TextDestaque} from '../../components/Global/styles'
import { ContainerMain } from '../../components/ContainerMain';
import BackgroundGradient from '../../components/BackgroundGradient'
import theme from '../../theme/light'

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
      <Header>
        <Icon.LogoPigz/>
        <Title>Para entregadores</Title>
      </Header>
      <Conteiner>
          <Title $size='16px'>Login</Title>
          <EditText title='Email ou Telefone' type='email' placeholder='example@pigz.com.br'/>
          <EditText title='Senha' type='pass' placeholder='********'/>
          <TouchableOpacity>
            <Link>Esqueci minha senha</Link>
          </TouchableOpacity>
          <BackgroundGradient>
            <ButtonPress text={'Entrar'} action={navegar} color={theme.COLORS.TEXT_BUTTON}/>
          </BackgroundGradient>
          <SubContainer>
            <Text>Não tem uma Conta?</Text>
            <TouchableOpacity>
            <TextDestaque>Criar agora!</TextDestaque>
            </TouchableOpacity>
          </SubContainer>
      </Conteiner>
      <Conteiner>
        <SubContainer>
          <Title $size='13px'>Entrar com</Title>
          <Line/>
        </SubContainer>
        <Border>
          <Icon.LogoGoogle style={{position:'absolute', alignSelf:'flex-start', marginLeft: 16}}/>
          <ButtonPress text={'Continuar com o Google'} action={loginGoogle} color={theme.COLORS.TEXT_BUTTON_SECONDARY}/>
        </Border>
      </Conteiner>
    </ContainerMain>  
  )
}