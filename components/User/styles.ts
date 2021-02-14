import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #222;
  padding-bottom: 8px;
`

export const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  color: #333;
  padding-bottom: 4px;
`
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-gap: 1rem;
`
export const Item = styled.li`
  grid-template-columns: 0 1fr;
  grid-gap: 1.75em;
  align-items: start;
  line-height: 1.25;
`
