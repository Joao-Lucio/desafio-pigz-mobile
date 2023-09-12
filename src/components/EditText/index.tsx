import React, {useState} from 'react'
import {TextInputProps, View} from 'react-native'
import {InputData, Container} from './styles'
import {Text} from '../Global/styles'
import Eye from '../Eye'

type Props = TextInputProps & {
  title?: string
  type: string
  placeholder: string
}



export function EditText({title, placeholder, type, ...rest}: Props) {

  const [eye, setEye] = useState(true)
  
  return (
    <Container>
      <Text>{title}</Text>
      {type === 'pass' ? (
        <View style={{flexDirection: 'row'}}>
          <InputData placeholder={placeholder} $type={type} secureTextEntry={eye} style={{flex:1}}/>
          <Eye eye={eye} setEye={setEye}/>
          </View>
      ) : (<InputData placeholder={placeholder} $type={type}/>)}
    </Container>
  )
}