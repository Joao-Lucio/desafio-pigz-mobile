import styled from 'styled-components/native'

export const Container = styled.View`
margin:20px;
`

export const SubConteiner = styled.View<{$top?: string; $left?: string;}>`
flex-direction:row;
margin-top: ${props => props.$top || '0px'} ;
margin-left: ${props => props.$left || '0px'} ;
padding: 8px;
`

export const Box = styled.View<{$left?: string; $top?: string}>`
margin-left: ${props => props.$left || '20px'};
margin-top: ${props => props.$top || '0px'};
margin-right:20px;
`