import React from 'react'

import { ListOfUsers } from '@components/ListOfUsers'
import { SearchBox } from '@components/SearchBox'
import { useStateApp } from '@context/appContext'
import { Button } from '@components/Button'
import { Loader } from '@components/Loader'
import { useFetchList } from '@hooks/useFetchList'

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
      <SearchBox onClick={handleOnClickSearch} loading={loading} />
      <ListOfUsers itemList={itemList} loading={!loadingMore && loading} />
      {loadingMore && <Loader />}
      {!loading && !loadingMore && itemList?.length > 0 && (
        <Button onClick={handleOnClickMore} />
      )}
    </>
  )
}

export default HomePage
