import React, {ReactNode} from 'react'
import { Container } from './styles'

type Props = {
  children: ReactNode
}

export function ContainerMain ({children} : Props) {
  return (
    <Container>
      {children}
    </Container>
  )
}