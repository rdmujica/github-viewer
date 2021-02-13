import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  animation: ${rotate} 1s linear infinite;
  transform: translateZ(0);
  border-top: 1px solid rgb(141, 0, 255, 0.2);
  border-right: 2px solidrgb(141, 0, 255, 0.2);;
  border-bottom: 2px solid #8d00ff;
  border-left: 4px solid #8d00ff;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  list-style: none;
  padding: 0;
`

export const Item = styled.li`
  padding: 8px 8px;
`
