import React, {useEffect, useState} from 'react'
import theme from '../../theme/light'
import Icon from '../../../assets/'
import { useNavigation } from "@react-navigation/native";
import { ContainerMain } from '../../components/ContainerMain';
import { Conteiner, SubConteiner, EyeContainer, MiniContainer, ContainerInputButton, ContainerInput, ContainerButton, ContainerQrcodeButton, ContainerGradient, Box } from './styles';
import BackgroundGradient from '../../components/BackgroundGradient'
import {TextButton, TextDate, TextMoney, TextValor, TitleContainer, TitleMiniContainer} from '../../components/Global/styles'
import Eye from '../../components/Eye';
import ContainerShadow from '../../components/ContainerShadow';
import { EditText } from '../../components/EditText';
import ButtonPress from '../../components/ButtonPress';
import moment from 'moment';


export function Home(){

  const navigation = useNavigation();

  function navegar(){
    navigation.navigate('NewDelivery')
  }

  const [eye, setEye] = useState(true)
  const [currentDate, setCurrentDate] = useState('0')

  useEffect(()=>{
    let date = moment().format('DD/MM')
    setCurrentDate(date)
  },[])

  return (
    <ContainerMain>
      <Conteiner>
        <BackgroundGradient>
            <SubConteiner>
                <TextButton>Ganhos do Dia</TextButton>
                <TextDate>{currentDate}</TextDate>
              </SubConteiner>
              <Box>
                {eye ? (<TextMoney>R$ 150</TextMoney>) : (<TextMoney>R$ ***</TextMoney>)}
                <EyeContainer>
                  <Eye eye={eye} setEye={setEye} color={theme.COLORS.BACKGROUND}/>
                </EyeContainer>
              </Box>
        </BackgroundGradient>
        <ContainerShadow>
          <TitleContainer>Resumos das Entregas</TitleContainer>
          <SubConteiner>
            <MiniContainer>
            <TitleMiniContainer>Aceitas</TitleMiniContainer>
                <TextValor>15</TextValor>
            </MiniContainer>
            <MiniContainer>
            <TitleMiniContainer>Rejeitadas</TitleMiniContainer>
                <TextValor>5</TextValor>
            </MiniContainer>
            <MiniContainer>
            <TitleMiniContainer>Total</TitleMiniContainer>
                <TextValor>20</TextValor>
            </MiniContainer>
          </SubConteiner>
        </ContainerShadow>
        <ContainerShadow>
        <TitleContainer>Iniciar Nova Entrega</TitleContainer>
        <ContainerInputButton>
          <ContainerInput>
            <EditText title={'Número de Identificação'}/>
          </ContainerInput>
          <ContainerButton>
          <BackgroundGradient>
            <ButtonPress text={'OK'} color={theme.COLORS.TEXT_BUTTON} action={navegar}/>
          </BackgroundGradient>
          </ContainerButton>
        </ContainerInputButton>
        <ContainerGradient>
          <BackgroundGradient>
          <ContainerQrcodeButton>
              <Icon.Qrcode style={{marginRight:10}}/>
              <ButtonPress text={'Escanear Qrcode'} color={theme.COLORS.TEXT_BUTTON}/>
            </ContainerQrcodeButton>
          </BackgroundGradient>
        </ContainerGradient>
        </ContainerShadow>
      </Conteiner>
    </ContainerMain>
  )
}