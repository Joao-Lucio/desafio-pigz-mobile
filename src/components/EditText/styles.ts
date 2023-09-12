import styled from 'styled-components/native'

export const Container = styled.View`
`

export const InputData = styled.TextInput<{$type?: string}>`
border-width:1px;
height: 50px;
border-radius: 16px;
border-color: ${({theme}) => theme.COLORS.PRIMARY};
padding: 10px;
font-size: 14px;
`