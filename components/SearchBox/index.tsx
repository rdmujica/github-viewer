import React, { Dispatch, SetStateAction, useState } from 'react'

import { RadioButtonGroup } from '@components/RadioButtonGroup'
import { Navbar } from '@components/Navbar'

import { Input, Button, Search, Div, DivIcon, Container } from './styles'

interface ISearchBox {
  onClick: any
  loading?: boolean
}

export const SearchBox = ({ onClick, loading = false }: ISearchBox) => {
  const [radioValue, setRadioValue] = useState<boolean>(true)
  const [searchValue, setSearchValue] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(true)

  const handleOnClickSearch = async (event: any) => {
    event.preventDefault
    onClick({ text: searchValue, findByUser: radioValue, page: 1 })
  }

  const handleOnChangeSearch = (event: any) => {
    event.preventDefault
    const { value } = event.target
    setSearchValue(value)
    value.length > 2 ? setDisabled(false) : setDisabled(true)
  }

  const handleOnKeyPress = (event: any) => {
    if (!disabled && event.charCode === 13) {
      handleOnClickSearch(event)
    }
  }

  return (
    <>
      <Navbar>
        <Div>
          <Container>
            <Input
              value={searchValue}
              onChange={handleOnChangeSearch}
              onKeyPress={handleOnKeyPress}
            />
            <DivIcon>
              <Button
                onClick={handleOnClickSearch}
                disabled={disabled || loading}
              >
                <Search size='24' />
              </Button>
            </DivIcon>
          </Container>
          <RadioButtonGroup
            radioValue={radioValue}
            setRadioValue={setRadioValue}
          />
        </Div>
      </Navbar>
    </>
  )
}
