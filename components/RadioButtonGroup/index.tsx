import React, { Dispatch, SetStateAction } from 'react'

import { RadioButton } from '@components/RadioButton'
import { Div } from './styles'

interface IRadioButtonGroup {
  radioValue: boolean
  setRadioValue: Dispatch<SetStateAction<boolean>>
}

export const RadioButtonGroup = ({
  radioValue,
  setRadioValue
}: IRadioButtonGroup) => {
  return (
    <Div>
      <RadioButton
        label='User'
        name='radio'
        value={radioValue}
        checked={radioValue}
        onChange={() => setRadioValue(true)}
      />
      <RadioButton
        label='Repo'
        name='radio'
        value={!radioValue}
        checked={!radioValue}
        onChange={() => setRadioValue(false)}
      />
    </Div>
  )
}
