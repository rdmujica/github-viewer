import { Nav } from './styles'

interface IHeader {
  children?: React.ReactElement<any>
}

export const Header = ({ children }: IHeader) => {
  return <Nav>{children}</Nav>
}
