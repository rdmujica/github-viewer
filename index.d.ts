type TUser = {
  id: number
  login: string
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
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
