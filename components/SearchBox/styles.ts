import styled from 'styled-components'
import { Search } from '@styled-icons/remix-line/Search'

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  vertical-align: center;
  justify-content: center;
  align-items: center;
`
export const BtnWrapper = styled.div`
  width: 33px;
  height: 33px;
  align-items: center;
`
export const SearchIcon = styled(Search)`
  color: #fff;
`

export const Input = styled.input`
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 6px 4px;
  display: block;
  width: 500px;
  &[disabled] {
    opacity: 0.3;
  }
`

export const Button = styled.button`
  padding: 0;
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  &[disabled] {
    opacity: 0.3;
  }
`
