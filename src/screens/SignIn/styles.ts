import styled from 'styled-components/native'

export const Conteiner = styled.View`
flex: 1;
justify-content: center;
margin-left: 24px;
margin-right: 24px;
`

export const Link = styled.Text`
align-self:flex-start;
margin-top: 20px;
font-family: ${({theme}) => theme.FONTS.POPPINS_REGULAR};
color: ${({theme}) => theme.COLORS.TEXT_PRIMARY};
font-size:13px;
text-decoration: underline;
`

export const SubLink = styled.Text`
align-self:flex-start;
margin-top: 20px;
font-family: ${({theme}) => theme.FONTS.POPPINS_REGULAR};
color: ${({theme}) => theme.COLORS.TEXT_PRIMARY};
font-size:13px;
text-decoration: underline;
`

export const Button = styled.TouchableOpacity`
height:48px;
justify-content:center;
align-items:center
`

export const SubContainer = styled.View`
flex-direction:row;
justify-content:center;
margin:20px;
`

export const Line = styled.View`
flex: 1;
height: 1px;
background-color: ${({theme}) => theme.COLORS.LINE};
margin-top: 12px;
margin-left: 8px;
`