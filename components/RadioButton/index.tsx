import React from 'react'

import { Label, Input } from './styles'

interface IRadioButton {
  value: any
  onChange: any
  name: string
  id?: string
  label?: string
  disabled?: boolean
  checked?: boolean
}

export const RadioButton = ({
  value,
  onChange,
  name,
  id,
  label,
  disabled,
  checked
}: IRadioButton) => (
  <Label htmlFor={id}>
    <Input
      id={id}
      type='radio'
      role='radio'
      name={name}
      value={value}
      disabled={disabled}
      onChange={onChange}
      checked={checked}
    />
    {label}
  </Label>
)
