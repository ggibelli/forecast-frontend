import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { render, fireEvent } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Breadcrumbs from './Breadcrumbs'
import mapsReducer from '../../reducers/maps'
import spotDetailReducer from '../../reducers/spotDetail'

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
    spotDetail: spotDetailReducer,
    mapToShow: mapsReducer,
  })
  const store = createStore(reducer)
  return renderWithRouter(<Provider store={store}>{ui}</Provider>)
}

describe('Breadcrumbs', () => {
  test('renders with redux defaults', () => {
    const { getByText } = renderWithProviders(<Breadcrumbs />)
    getByText(/home/i)
  })
})
