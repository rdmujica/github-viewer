import {
  Dispatch,
  ReactElement,
  ReactNode,
  useReducer,
  useContext,
  createContext
} from 'react'

import Reducer from '@reducers/appReducer'
import initialState from './initialState'

const AppDispatchContext = createContext((() => {}) as Dispatch<ActionT>)
const AppStateContext = createContext(initialState)

interface IProvider {
  children: ReactNode
}

const ConstextProvider = ({ children }: IProvider): ReactElement => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

export const useStateApp = (): any => useContext(AppStateContext)

export const useActionsDispatch = () => {
  const dispatch = useContext(AppDispatchContext)

  const setItems = (itemList: ItemT[]) =>
    dispatch({ type: 'UPDATE_ITEMS', params: { itemList } })

  const addItems = (itemList: ItemT[]) =>
    dispatch({ type: 'ADD_ITEMS', params: { itemList } })

  const setCurrentPage = (page: number) =>
    dispatch({
      type: 'ADD_PAGE_CURRENT_SEARCH',
      params: { page }
    })

  const setCurrentSearch = ({ text, findByUser }: OptionsT) =>
    dispatch({
      type: 'UPDATE_CURRENT_SEARCH',
      params: { currentSearch: { text, findByUser, page: 1 } }
    })

  const setLoading = (loading: boolean = true) =>
    dispatch({ type: 'LOADING_ITEMS', params: { loading } })

  const setError = (error: string) =>
    dispatch({ type: 'ERROR_ITEMS', params: { error } })

  return {
    setItems,
    addItems,
    setCurrentPage,
    setCurrentSearch,
    setLoading,
    setError
  }
}

export default ConstextProvider
