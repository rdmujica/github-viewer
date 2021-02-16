import React from 'react'
import { Box, Input, Button, BtnWrapper, SearchIcon } from './styles'

interface ISearchBox {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

export const SearchBox = ({
  value,
  onChange,
  onKeyPress,
  onClick,
  disabled = false
}: ISearchBox) => {
  return (
    <Box>
      <Input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <BtnWrapper>
        <Button onClick={onClick} disabled={disabled}>
          <SearchIcon size='24' />
        </Button>
      </BtnWrapper>
    </Box>
  )
}
