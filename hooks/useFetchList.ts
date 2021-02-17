import { useEffect, useState } from 'react'
import axios from 'axios'

import { getUrl, transforRepoToCard } from '@helpers/index'
import { useActionsDispatch, useStateApp } from '@context/appContext'

interface IReturnUseFetchList {
  loading: boolean
  itemList: ItemT[]
  handleOnClickSearch: (o: OptionsT) => void
  loadingMore: boolean
  handleOnClickMore: (e: React.MouseEvent<HTMLElement>) => void
  error: string
}

export const useFetchList = (): IReturnUseFetchList => {
  const { currentSearch, loading, itemList, error } = useStateApp()
  const [loadingMore, setLoadingMore] = useState<boolean>(false)
  const [nextPage, setNextPage] = useState<number>(1)
  const {
    setItems,
    addItems,
    setCurrentPage,
    setCurrentSearch,
    setLoading,
    setError
  } = useActionsDispatch()

  const loadItems = async ({ text, page, findByUser }: CurrentSearchT) => {
    try {
      setLoading()
      const url = getUrl(findByUser, text, page)
      const { data } = await axios(url)
      const itemList = findByUser ? data.items : transforRepoToCard(data.items)
      page === 1 ? setItems(itemList) : addItems(itemList)
      if (data?.items?.length > 0) setNextPage(page + 1)
    } catch {
      setError('Ha ocurrido un error por favor intente mas tarde')
    }
    setLoadingMore(false)
  }

  useEffect(() => {
    const { page, text } = currentSearch
    if (text.length > 2 && page <= nextPage) {
      page === 1 && nextPage === 1 && itemList.length > 0
        ? setNextPage(page + 1)
        : loadItems(currentSearch)
    }
    if (nextPage < page) setNextPage(page + 1)
  }, [currentSearch])

  const handleOnClickMore = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault
    setLoadingMore(true)
    setCurrentPage(nextPage)
  }

  const handleOnClickSearch = ({ text, findByUser }: OptionsT) =>
    setCurrentSearch({ text, findByUser })

  return {
    loading,
    itemList,
    handleOnClickSearch,
    loadingMore,
    handleOnClickMore,
    error
  }
}
