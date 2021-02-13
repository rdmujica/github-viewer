import React from 'react'

import { Div, Button as ButttonStyle, Label } from './styles'

interface IButton {
  onClick?: () => void
}

export const Button = ({ onClick }: IButton) => (
  <Div>
    <ButttonStyle onClick={onClick}>
      <Label>Mas resultados</Label>
    </ButttonStyle>
  </Div>
)
