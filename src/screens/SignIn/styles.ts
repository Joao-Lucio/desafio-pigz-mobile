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

export const Border = styled.View`
border-width: 1px;
border-radius:16px;
justify-content:center;
align-items:center;
margin-top:24px;
height: 48px;
border-color:${({theme}) => theme.COLORS.BORDER};
`
export const BorderSecundary = styled(Border)`
border-color:${({theme}) => theme.COLORS.SECONDARY};

`