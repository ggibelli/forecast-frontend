import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import EditSpot from './index'
import spotReducer from '../../reducers/spotDetail'

jest.mock('./FormSpot', () => () => <div>form</div>)

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: '1234',
  }),
}))

function renderWithRouter(
  ui,
  {
    route = '/edit/1234',
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

function renderWithProviders(ui, { reduxState } = {}) {
  const reducer = combineReducers({
    spotDetail: spotReducer,
  })
  const store = createStore(reducer, reduxState, applyMiddleware(thunk))
  return renderWithRouter(<Provider store={store}>{ui}</Provider>)
}

describe('EditSpot component', () => {
  test('renders with redux defaults', () => {
    renderWithProviders(<EditSpot />, {
      reduxState: {
        spotDetail: {
          data: {},
          isLoading: false,
          errorMessage: '',
        },
      },
    })
  })

  test('renders with spot data', () => {
    const { getByText } = renderWithProviders(<EditSpot />, {
      reduxState: {
        spotDetail: {
          data: {
            name: 'prova',
            isSecret: true,
            continent: { name: 'prova', id: '123' },
            country: { name: 'prova', id: '321' },
            region: { name: 'prova', id: '678' },
            latitude: '12',
            longitude: '12',
          },
          isLoading: false,
          errorMessage: '',
        },
      },
    })
    getByText(/form/i)
  })
})
