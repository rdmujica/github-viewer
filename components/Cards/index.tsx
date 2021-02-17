import React from 'react'
import { useRouter } from 'next/router'

import { Card } from '@components/Card'
import { Loader } from '@components/Loader'
import { List, Item, WrapperList } from './styles'
interface ICards {
  itemList?: ItemT[]
  loading?: boolean
}

export const Cards = ({ itemList = [], loading = true }: ICards) => {
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
