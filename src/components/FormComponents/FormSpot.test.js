import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { render, fireEvent } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import FormSpot from './FormSpot'
import spotsReducer from '../../reducers/nestedSurfspots'
import loginReducer from '../../reducers/login'
import formHelper from '../../utils/formHelper'

jest.mock('../utils/formHelper')

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  formHelper.newSpot.mockClear()
})

function renderWithRouter(
  ui,
  {
    route = '/addspot',
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
    surfspots: spotsReducer,
    currentUser: loginReducer,
  })
  const store = createStore(reducer, reduxState, applyMiddleware(thunk))
  return renderWithRouter(<Provider store={store}>{ui}</Provider>)
}

describe('Form spot component', () => {
  test('renders without surfspot prop as a new spot creator and the submission fails if empty', () => {
    const { debug, getByText } = renderWithProviders(<FormSpot />, {
      reduxState: {
        currentUser: {
          token: '123abc',
          firstName: 'test',
          lastName: 'test1',
          email: 'test@test.it',
          id: '321',
        },
      },
    })

    const submit = getByText(/add spot/i)
    fireEvent.click(submit)
    expect(formHelper.newSpot).not.toHaveBeenCalled()
    debug()
  })

  test.only('renders without surfspot prop as a new spot creator and the submission succeeds if valid', () => {
    const { debug, getByText, getByLabelText } = renderWithProviders(
      <FormSpot />,
      {
        reduxState: {
          currentUser: {
            token: '123abc',
            firstName: 'test',
            lastName: 'test1',
            email: 'test@test.it',
            id: '321',
          },
        },
      },
    )
    const name = getByLabelText(/spot name/i)
    name.value = 'surf'
    const latitude = getByLabelText(/latitude/i)
    latitude.value = '12'
    const longitude = getByLabelText(/longitude/i)
    longitude.value = '21'
    const continent = getByLabelText(/continent/i)

    const country = getByLabelText(/country/i)
    const region = getByLabelText(/region/i)
    const submit = getByText(/add spot/i)
    fireEvent.click(submit)
    expect(formHelper.newSpot).not.toHaveBeenCalled()
    debug()
  })

  test('renders with spot data', () => {
    const { getByText } = renderWithProviders(<FormSpot />, {
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
