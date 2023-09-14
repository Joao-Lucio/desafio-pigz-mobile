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