import styled from 'styled-components/native'

export const Conteiner = styled.View`
flex: 1;
justify-content: center;
margin-left: 35px;
margin-right: 35px;
`

export const SubConteiner = styled.View`
flex-direction:row;
margin: 20px;
`

export const EyeContainer = styled.View`
align-items:flex-end;
flex:1;
justify-content:center;
margin-right:-16px;
`

export const MiniContainer = styled.View`
flex:1;
border-width:1px;
border-radius:16px;
border-color:${({theme}) => theme.COLORS.BORDER};
margin-left:8px;
align-items:center;
`

export const ContainerInputButton = styled.View`
flex-direction:row;
margin-left:14px;
margin-right:14px;
`

export const ContainerInput = styled.View`
flex:1;
margin-right: 14px;
`

export const ContainerButton = styled.View`
width:46px;
height:70px;
align-self:center;
`

export const ContainerGradient = styled.View`
margin-top:-10px;
margin-left:14px; 
margin-right:14px;
margin-bottom:24px;
`

export const ContainerQrcodeButton = styled.View`
flex-direction:row;
height:46px;
align-items:center;
justify-content:center;
`