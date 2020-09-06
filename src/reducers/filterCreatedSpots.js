const initialState = {
  countries: null,
  isSecret: null,
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER_IS_SECRET':
      return { ...state, isSecret: action.filter }
    case 'SET_FILTER_COUNTRIES':
      return { ...state, countries: action.filter }
    default:
      return state
  }
}

export const filterChangeBool = (filter) => ({
  type: 'SET_FILTER_IS_SECRET',
  filter,
})

export const filterChangeCountries = (filter) => ({
  type: 'SET_FILTER_COUNTRIES',
  filter,
})

export default filterReducer
