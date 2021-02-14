const initialState: StateT = {
  itemList: [],
  loading: false,
  error: '',
  currentSearch: {
    text: '',
    findByUser: true,
    page: 0
  }
}

export default initialState
