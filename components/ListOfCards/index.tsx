import React from 'react'
import { useRouter } from 'next/router'

import { Card } from '@components/Card'
import { Loader } from '@components/Loader'
import { List, Item, WrapperList } from './styles'
interface IListOfCards {
  itemList?: TUser[]
  loading?: boolean
}

export const ListOfCards = ({
  itemList = [],
  loading = true
}: IListOfCards) => {
  const router = useRouter()

  const handleOnClickCard = (login: string) => (
    e: React.MouseEvent<HTMLElement>
  ) => {
    e.preventDefault
    router.push('/user/[login]', `/user/${login}`)
  }

  const renderList = () => (
    <List>
      {itemList?.map(({ id, avatar_url, login, repository }) => (
        <Item key={id}>
          <Card
            name={login}
            cover={avatar_url}
            repository={repository}
            onClick={handleOnClickCard(login)}
          />
        </Item>
      ))}
    </List>
  )

  return <WrapperList>{loading ? <Loader /> : renderList()}</WrapperList>
}
