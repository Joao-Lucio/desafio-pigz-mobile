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