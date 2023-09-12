import React from 'react'
import {Button} from './styles'
import { TextButton } from '../Global/styles'

export default function ButtonPress(props){
  return(
      <Button onPress={()=>{props.action()}}>
        <TextButton style={{color: props.color}}>{props.text}</TextButton>
      </Button>
  )
}