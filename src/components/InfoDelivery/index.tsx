import React from 'react'
import {Text} from 'react-native'
import { Container } from './styles'
import { TextDeliveryInfo, TextDeliveryValor } from '../Global/styles'

export default function InfoDelivery(props){
  return(
    <Container>
      <TextDeliveryInfo>{props.info}</TextDeliveryInfo>
      <TextDeliveryValor $type={props.type}>{props.valor}</TextDeliveryValor>
    </Container>
  )
}