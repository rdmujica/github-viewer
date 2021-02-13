import styled, { keyframes } from 'styled-components'

export const Button = styled.button`
  padding: 10px;
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  display: block;
  width: 200px;
  height: 100%;
  text-align: center;
  margin-bottom: 10px;
  &[disabled] {
    opacity: 0.3;
  }
`

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  list-style: none;
  padding: 0;
`

export const Label = styled.span`
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
  color: #fff;
`
