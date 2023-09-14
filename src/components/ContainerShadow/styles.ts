import styled from 'styled-components/native'

export const Container = styled.View`
margin-top: 20px;
border-width:1px;
border-radius:16px; 
border-color: ${({theme}) => theme.COLORS.BORDER};
border-bottom-width:3px;
border-right-width:3px;
`