import React from 'react'
import Link from 'next/link'

import { UserCard } from '@components/UserCard'
import { Loader } from '@components/Loader'
import { List, Item, Div, Anchor } from './styles'
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
          <Link
            href='/user/[login]'
            as={`/user/${login}`}
            passHref
            prefetch={true}
          >
            <Anchor>
              <UserCard
                name={login}
                cover={avatar_url}
                repository={repository}
              />
            </Anchor>
          </Link>
        </Item>
      ))}
    </List>
  )

  return <Div>{loading ? <Loader /> : renderList()}</Div>
}
