import React, { useState } from 'react'

import { RadioButtonGroup } from '@components/RadioButtonGroup'
import { SearchBox } from '@components/SearchBox'
import { OptionsWrapper } from './styles'


interface ISearchOptions {
  onClick: (o: OptionsT) => void
  loading?: boolean
}

export const SearchOptions = ({ onClick, loading = false }: ISearchOptions) => {
  const [radioValue, setRadioValue] = useState<boolean>(true)
  const [searchValue, setSearchValue] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(true)

  const handleOnClickSearch = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault
    onClick({ text: searchValue, findByUser: radioValue })
  }

  const handleOnChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault
    const { value } = event.target
    setSearchValue(value)
    value.length > 2 ? setDisabled(false) : setDisabled(true)
  }

  const handleOnKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault
    if (!disabled && event.key === 'Enter') {
      onClick({ text: searchValue, findByUser: radioValue })
    }
  }

  return (
    <>
      <OptionsWrapper>
        <SearchBox
          value={searchValue}
          onClick={handleOnClickSearch}
          onKeyPress={handleOnKeyPress}
          onChange={handleOnChangeSearch}
          disabled={disabled || loading}
        />
        <RadioButtonGroup
          radioValue={radioValue}
          setRadioValue={setRadioValue}
        />
      </OptionsWrapper>
    </>
  )
}
