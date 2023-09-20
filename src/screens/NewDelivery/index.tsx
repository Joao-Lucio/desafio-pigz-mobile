import {View} from 'react-native'
import React from 'react'
import Icon from '../../../assets/'
import { Container } from './styles'
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
        <View style={{flexDirection:'row'}}>
        <InfoDelivery info={'Tempo Estimado'} valor={'30 Min'}/>
        <InfoDelivery info={'Número de ID'} valor={'#6789'}/>
        </View>
        <Line/>
        <View style={{flexDirection:'row', marginTop:20}}>
        <InfoDelivery info={'Valor da Entrega'} valor={'R$ 13,75'} type={'destaque'}/>
        </View>
        <View style={{marginLeft:20, marginRight:20}}>
        <BackgroundGradient>
          <View style={{flexDirection: 'row', alignItems:'center'}}>
          <Icon.Delivery style={{marginLeft:20}}/>
          <View style={{padding:8, marginLeft:10}}>
            <TextDelivery>Entrega</TextDelivery>
            <Percurso>Percurso Total: 8km</Percurso>
        </View>
          </View>
        </BackgroundGradient>
        <View style={{flexDirection:'row',marginLeft: 32}}>
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
          <View style={{marginLeft:12, marginTop:34}}>
            <TextDeliveryStatus>Coleta</TextDeliveryStatus>  
            <TextDeliveryInfo style={{marginTop:6}}>Restaurante Recanto da Peixada</TextDeliveryInfo>  
            <TextDeliveryInfo>Distancia: 2km</TextDeliveryInfo> 
            <TextDeliveryStatus style={{marginTop:3}}>Entrega</TextDeliveryStatus>
            <TextDeliveryInfo style={{marginTop:5}}>Av: Cabo dos Soldados - Caranã</TextDeliveryInfo>  
            <TextDeliveryInfo>Distancia: 6km</TextDeliveryInfo>          
          </View>
        </View>
        <BackgroundGradient>
          <ButtonPress text={'Aceitar'} color={theme.COLORS.TEXT_BUTTON}/>
          <Icon.Check style={{position:'absolute', left:110, top:10}}/>
        </BackgroundGradient>
        <BorderSecundary>
          <View style={{flexDirection:'row'}}>
          <Icon.Close style={{marginTop: 11, marginRight:10}}/>
          <ButtonPress text={'Rejeitar'} color={theme.COLORS.TEXT_BUTTON_TERCEARIO}/>
          </View>
        </BorderSecundary>
        </View>
      </Container>
    </ContainerMain>
  )
}