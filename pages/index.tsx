import React from 'react'

import { ListOfUsers } from '@components/ListOfUsers'
import { SearchOptions } from '@components/SearchOptions'
import { Button } from '@components/Button'
import { Loader } from '@components/Loader'
import { useFetchList } from '@hooks/useFetchList'
import { Header } from '@components/Header'
import styled, { keyframes } from 'styled-components'

const HomePage = () => {
  const {
    loading,
    itemList,
    handleOnClickSearch,
    loadingMore,
    handleOnClickMore
  } = useFetchList()

  return (
    <>
      <Header>
        <SearchOptions onClick={handleOnClickSearch} loading={loading} />
      </Header>
      <ListOfUsers itemList={itemList} loading={!loadingMore && loading} />
      {loadingMore && <Loader />}
      {!loading && !loadingMore && itemList?.length > 0 && (
        <Button onClick={handleOnClickMore}>Ver más resultaddos</Button>
      )}
    </>
  )
}

export const Label = styled.span`
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
  color: #fff;
`

export default HomePage
