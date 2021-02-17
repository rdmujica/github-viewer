import { useEffect, useState } from 'react'
import axios from 'axios'

import { getUrl, transforRepoToCard } from '@helpers/index'
import { useDispatchApp, useStateApp } from '@context/appContext'

interface IReturnUseFetchList {
  loading: boolean
  itemList: ItemT[]
  handleOnClickSearch: (o: OptionsT) => void
  loadingMore: boolean
  handleOnClickMore: (e: React.MouseEvent<HTMLElement>) => void
  error: string | null
}

export const useFetchList = (): IReturnUseFetchList => {
  const { currentSearch, loading, itemList, error } = useStateApp()
  const dispatch = useDispatchApp()
  const [loadingMore, setLoadingMore] = useState<boolean>(false)
  const [nextPage, setNextPage] = useState<number>(1)

  const loadItems = async ({ text, page, findByUser }: CurrentSearchT) => {
    try {
      dispatch({ type: 'LOADING_ITEMS', params: { loading: true } })
      const url = getUrl(findByUser, text, page)
      const { data } = await axios(url)
      const itemList = findByUser ? data.items : transforRepoToCard(data.items)
      const action = page === 1 ? 'UPDATE_ITEMS' : 'ADD_ITEMS'
      dispatch({ type: action, params: { itemList } })
      if (data?.items?.length > 0) setNextPage(page + 1)
    } catch {
      const error = 'Ha ocurrido un error por favor intente mas tarde'
      dispatch({ type: 'ERROR_ITEMS', params: { error } })
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
    if (nextPage < page) {
      setNextPage(page + 1)
    }
  }, [currentSearch])

  const handleOnClickMore = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault
    setLoadingMore(true)
    dispatch({
      type: 'ADD_PAGE_CURRENT_SEARCH',
      params: { page: nextPage }
    })
  }

  const handleOnClickSearch = ({ text, findByUser }: OptionsT) => {
    dispatch({
      type: 'UPDATE_CURRENT_SEARCH',
      params: { currentSearch: { text, findByUser, page: 1 } }
    })
  }

  return {
    loading,
    itemList,
    handleOnClickSearch,
    loadingMore,
    handleOnClickMore,
    error
  }
}
