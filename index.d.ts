type TUerId = number

type TUser = {
  id: TProductId
  login: string
  avatar_url: string
  repository?: string
}

type TAPIUserResponse = {
  lenght?: number
  data: TUser[]
  error?: string
}

type TypeActionT =
  | 'UPDATE_ITEMS'
  | 'LOADING_ITEMS'
  | 'ERROR_ITEMS'
  | 'ADD_ITEMS'
  | 'ADD_PAGE_CURRENT_SEARCH'
  | 'UPDATE_CURRENT_SEARCH'

type ActionT = {
  type: TypeActionT
  params?: any
}

type CurrentSearchT = {
  text: string
  findByUser: boolean
  page: number
}

type StateT = {
  itemList: TUser[]
  loading: boolean
  error: string | null
  currentSearch: CurrentSearchT
}

type Dispatch = (action: ActionT) => ActionT
