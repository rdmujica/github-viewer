import { Title, Subtitle, List, Item } from './styles'

interface IUser {
  login: string
  repositories: string[]
}

export const User = ({ login, repositories }: IUser) => {
  return (
    <>
      <Title>{login}</Title>
      <Subtitle>Repositories</Subtitle>
      <List>
        {repositories.map((repo) => (
          <Item>
            <a href={repo}>{repo}</a>
          </Item>
        ))}
      </List>
    </>
  )
}
