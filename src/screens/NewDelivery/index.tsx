import {View} from 'react-native'
import React from 'react'
import Icon from '../../../assets/'
import { Box, Container, SubConteiner } from './styles'
import { ContainerMain } from '../../components/ContainerMain'
import InfoDelivery from '../../components/InfoDelivery'
import { Line, LineVerticalBig, LineVerticalSmall, Percurso, TextDelivery, TextDeliveryInfo, TextDeliveryStatus } from '../../components/Global/styles'
import BackgroundGradient from '../../components/BackgroundGradient'
import CircleGradient from '../../components/CircleGradient'
import CircleBorder from '../../components/CircleBorder'
import ButtonPress from '../../components/ButtonPress'
import theme from '../../theme/light'
import { BorderSecundary } from '../SignIn/styles'

export function NewDelivery(){
  return (
    <ContainerMain>
      <Container>
        <SubConteiner>
        <InfoDelivery info={'Tempo Estimado'} valor={'30 Min'}/>
        <InfoDelivery info={'Número de ID'} valor={'#6789'}/>
        </SubConteiner>
        <Line/>
        <SubConteiner $top='20px'>
        <InfoDelivery info={'Valor da Entrega'} valor={'R$ 13,75'} type={'destaque'}/>
        </SubConteiner>
        <Box>
        <BackgroundGradient>
          <SubConteiner>
          <Icon.Delivery style={{marginLeft:20, marginTop:10}}/>
          <Box $left='10px'>
            <TextDelivery>Entrega</TextDelivery>
            <Percurso>Percurso Total: 8km</Percurso>
        </Box>
          </SubConteiner>
        </BackgroundGradient>
        <SubConteiner $left='32px'>
          <View>
          <LineVerticalBig/>
            <CircleGradient/>
            <LineVerticalSmall/>
            <CircleBorder/>
            <LineVerticalBig/>
            <CircleGradient/>
            <LineVerticalSmall/>
            <CircleBorder/>
          </View>
          <Box $left='12px' $top='34px'>
            <TextDeliveryStatus>Coleta</TextDeliveryStatus>  
            <TextDeliveryInfo>Restaurante Recanto da Peixada</TextDeliveryInfo>  
            <TextDeliveryInfo>Distancia: 2km</TextDeliveryInfo> 
            <TextDeliveryStatus>Entrega</TextDeliveryStatus>
            <TextDeliveryInfo>Av: Cabo dos Soldados - Caranã</TextDeliveryInfo>  
            <TextDeliveryInfo>Distancia: 6km</TextDeliveryInfo>          
          </Box>
        </SubConteiner>
        <BackgroundGradient>
          <ButtonPress text={'Aceitar'} color={theme.COLORS.TEXT_BUTTON}/>
          <Icon.Check style={{position:'absolute', left:110, top:10}}/>
        </BackgroundGradient>
        <BorderSecundary>
          <SubConteiner>
          <Icon.Close style={{marginTop: 11, marginRight:10}}/>
          <ButtonPress text={'Rejeitar'} color={theme.COLORS.TEXT_BUTTON_TERCEARIO}/>
          </SubConteiner>
        </BorderSecundary>
        </Box>
      </Container>
    </ContainerMain>
  )
}