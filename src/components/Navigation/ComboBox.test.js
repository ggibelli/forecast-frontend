import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { render, fireEvent } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import ComboBox from './ComboBox'
import spotsSearchreducer from '../../reducers/allSpotsSearch'

function renderWithRouter(
  ui,
  {
    route = '/profile/test',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) {
  const Wrapper = ({ children }) => (
    <Router history={history}>{children}</Router>
  )
  return {
    ...render(ui, { wrapper: Wrapper }),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}

function renderWithProviders(ui, { reduxState, history } = {}) {
  const reducer = combineReducers({
    spotsSearch: spotsSearchreducer,
  })
  const store = createStore(reducer, reduxState)
  return renderWithRouter(<Provider store={store}>{ui}</Provider>)
}

describe('ComboBox', () => {
  test.only('renders with redux defaults', () => {
    const { getByText, debug } = renderWithProviders(<ComboBox />, {
      reduxState: {
        spotsSearch: [
          {
            name: 'abc',
            continent: { name: 'cbd', id: '234' },
            country: { name: 'adf', id: '445' },
            region: { name: 'lol', id: '090' },
            id: '123',
          },
          {
            name: 'qwe',
            continent: { name: 'rty', id: '123' },
            country: { name: 'asd', id: '678' },
            region: { name: 'poi', id: '987' },
            id: '235',
          },
        ],
      },
    })
    debug()
    const searchField = getByText(/surf spot/i)
    fireEvent.click(searchField)
    debug()
  })
})
