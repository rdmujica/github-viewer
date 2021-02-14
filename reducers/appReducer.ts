const reducer = (state: StateT, action: ActionT): any => {
  const { params } = action

  switch (action.type) {
    case 'UPDATE_ITEMS': {
      const { itemList } = params
      return { ...state, itemList, loading: false, error: '' }
    }
    case 'ADD_ITEMS': {
      const { itemList: newItems } = params
      const { itemList: oldItems } = state
      const itemList = oldItems.concat(newItems)
      return { ...state, itemList, loading: false, error: '' }
    }
    case 'LOADING_ITEMS': {
      return { ...state, loading: true, error: '' }
    }
    case 'ERROR_ITEMS': {
      const { error } = params
      return { ...state, loading: false, error }
    }
    case 'ADD_PAGE_CURRENT_SEARCH': {
      const { page } = params
      const { currentSearch: oldCurrentSearch, ...rest } = state
      return { ...rest, currentSearch: { ...oldCurrentSearch, page } }
    }
    case 'UPDATE_CURRENT_SEARCH': {
      const { currentSearch } = params
      return { ...state, currentSearch }
    }
    default: {
      throw new Error(`Unknown action: ${action.type}`)
    }
  }
}

export default reducer
