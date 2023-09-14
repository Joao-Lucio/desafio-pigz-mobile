import styled from 'styled-components/native'

export const Title = styled.Text`
font-size:18px; 
font-family: ${({theme}) => theme.FONTS.POPPINS_SEMI_BOLD};
color: ${({theme}) => theme.COLORS.TITLE};
`

export const SubTitle = styled(Title)`
font-size: 16px;
`
export const TextButton = styled(SubTitle)`
color: ${({theme}) => theme.COLORS.TEXT_BUTTON}; 
font-family: ${({theme}) => theme.FONTS.POPPINS_MEDIUM};
font-size:16px;
`

export const Text = styled.Text`
font-size: 13px;
font-family: ${({theme}) => theme.FONTS.POPPINS_MEDIUM};
color: ${({theme}) => theme.COLORS.TEXT_PRIMARY};
margin-top: 10px;
`

export const TextMoney = styled(TextButton)`
font-family: ${({theme}) => theme.FONTS.ROBOTO_BOLD};
font-size:30px;
`

export const TitleContainer = styled.Text`
font-family: ${({theme}) => theme.FONTS.POPPINS_BOLD};
font-size:16px;
color:${({theme}) => theme.COLORS.TITLE_CONTAINER};
margin-left:14px;
margin-top:10px;
`

export const TitleMiniContainer = styled.Text`
font-family: ${({theme}) => theme.FONTS.POPPINS_REGULAR};
font-size:11px;
color: ${({theme}) => theme.COLORS.TEXT_PRIMARY};
margin-top: 10px;
`

export const TextValor = styled.Text`
font-family: ${({theme}) => theme.FONTS.POPPINS_MEDIUM};
font-size:40px;
color: ${({theme}) => theme.COLORS.TITLE_CONTAINER};
align-self:center;
`

export const TextDeliveryInfo = styled.Text`
font-family: ${({theme}) => theme.FONTS.POPPINS_REGULAR};
font-size: 14px;
color: ${({theme}) => theme.COLORS.DELIVERY_INFO};
`

export const TextDeliveryValor = styled.Text<{$type?: string}>`
font-family: ${({theme}) => theme.FONTS.POPPINS_BOLD};
font-size: ${props => props.$type ? '35px' : '20px'};
color: ${({theme}) => theme.COLORS.PRIMARY};
`

export const Line = styled.View`
height: 1px;
background-color: ${({theme}) => theme.COLORS.LINE};
margin-top: 12px;
margin-left: 8px;
`

export const LineVerticalSmall = styled.View`
width: 2px;
height: 20px;
background-color: ${({theme}) => theme.COLORS.LINE};
`

export const LineVerticalBig = styled(LineVerticalSmall)`
height: 40px;
`

export const Percurso = styled.Text`
font-family: ${({theme}) => theme.FONTS.ROBOTO_REGULAR};
font-size: 12px;
color: ${({theme}) => theme.COLORS.TEXT_BUTTON};
`

export const TextDelivery = styled(Percurso)`
font-family: ${({theme}) => theme.FONTS.ROBOTO_MEDIUM};
font-size: 18px;
`

export const TextDeliveryStatus = styled.Text`
font-family:${({theme}) => theme.FONTS.POPPINS_MEDIUM};
font-size:18px;
color:${({theme}) => theme.COLORS.PRIMARY};
`