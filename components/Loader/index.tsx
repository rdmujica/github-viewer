import { List, Item, Spinner } from './styles'

export const Loader = () => (
  <List>
    <Item key='loading'>
      <Spinner />
    </Item>
  </List>
)
