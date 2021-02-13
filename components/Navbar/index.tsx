import { Nav } from './styles'

interface INavbar {
  children?: React.ReactElement<any>
}

export const Navbar = ({ children }: INavbar) => {
  return <Nav>{children}</Nav>
}
