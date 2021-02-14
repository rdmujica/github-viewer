export const transforRepoToCard = (items: any[]) => {
  const data = items.map(({ id, owner, name: repository }) => ({
    ...owner,
    id,
    repository
  }))
  return data
}

export const getUrl = (byUser: boolean, text: string, page: number) => {
  const urlBase = 'https://api.github.com/search'
  const perPage = 2
  const paginationParameters = `&per_page=${perPage}&page=${page}`
  const entitySearch = byUser
    ? `/users?q=${text}+in:login`
    : `/repositories?q=${text}+in:name`
  return urlBase + entitySearch + paginationParameters
}
