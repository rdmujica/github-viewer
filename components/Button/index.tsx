import React from 'react'

import { Div, ButtonStyle, Label } from './styles'

interface IButton {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode | string
}

export const Button = ({ onClick, children }: IButton) => (
  <Div>
    <ButtonStyle onClick={onClick}>
      <Label>{children}</Label>
    </ButtonStyle>
  </Div>
)
