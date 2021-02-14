import React from 'react'

import { UserCard } from '@components/UserCard'
import { Loader } from '@components/Loader'
import { List, Item, Div } from './styles'

interface IListOfUsers {
  itemList?: TUser[]
  loading?: boolean
}

export const ListOfUsers = ({
  itemList = [],
  loading = true
}: IListOfUsers) => {
  const renderList = () => (
    <List>
      {itemList?.map(({ id, avatar_url, login, repository }) => (
        <Item key={id}>
          <UserCard name={login} cover={avatar_url} repository={repository} />
        </Item>
      ))}
    </List>
  )

  return <Div>{loading ? <Loader /> : renderList()}</Div>
}
