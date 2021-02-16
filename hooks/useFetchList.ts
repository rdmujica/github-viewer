import { useEffect, useState } from 'react'
import axios from 'axios'

import { getUrl, transforRepoToCard } from '@helpers/index'
import { useDispatchApp, useStateApp } from '@context/appContext'

interface IReturnUseFetchList {
  loading: boolean
  itemList: ItemT[]
  handleOnClickSearch: any
  loadingMore: boolean
  handleOnClickMore: any
  error: string | null
}

export const useFetchList = (): IReturnUseFetchList => {
  const dispatch = useDispatchApp()
  const [loadingMore, setLoadingMore] = useState<boolean>(false)
  const [nextPage, setNextPage] = useState(1)
  const { currentSearch, loading, itemList, error } = useStateApp()

  const loadItems = async ({ text, page, findByUser }: CurrentSearchT) => {
    try {
      dispatch({ type: 'LOADING_ITEMS', params: {} })
      const url = getUrl(findByUser, text, page)
      const { data } = await axios(url)
      const itemList = findByUser ? data.items : transforRepoToCard(data.items)
      const action = page === 1 ? 'UPDATE_ITEMS' : 'ADD_ITEMS'
      dispatch({ type: action, params: { itemList } })
      setNextPage(page + 1)
    } catch {
      const error = 'Ha ocurrido un error por favor intente mas tarde'
      dispatch({ type: 'ERROR_ITEMS', params: { error } })
    }
    setLoadingMore(false)
  }

  useEffect(() => {
    const { text } = currentSearch
    if (text.length > 2) {
      loadItems(currentSearch)
    }
  }, [currentSearch])

  const handleOnClickMore = () => {
    setLoadingMore(true)
    dispatch({
      type: 'ADD_PAGE_CURRENT_SEARCH',
      params: { page: nextPage }
    })
  }

  const handleOnClickSearch = ({ text, findByUser, page }: CurrentSearchT) => {
    dispatch({
      type: 'UPDATE_CURRENT_SEARCH',
      params: { currentSearch: { text, findByUser, page } }
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
