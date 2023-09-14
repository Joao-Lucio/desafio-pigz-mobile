import React from 'react'
import { Feather } from "@expo/vector-icons"
import { Container, ButtonEye } from './styles'

export default function Eye(props){
  return(
    <Container>
      <ButtonEye onPress={()=>{props.setEye(!props.eye)}}>
        <Feather
          name={props.eye ? "eye" : 'eye-off'}
          size={24}
          color={props.color}
          />
      </ButtonEye>
    </Container>
  )
}