import styled from 'styled-components/native'

export const Container = styled.View`
margin-left: -4px;
width:10px;
height:10px;
border-width:1px;
border-radius:16px;
border-color:${({theme}) => theme.COLORS.PRIMARY};
`