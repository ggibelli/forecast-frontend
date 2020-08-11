import React from 'react'
import { Provider } from 'react-redux'

import { render } from '@testing-library/react'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import Breadcrumbs from './Breadcrumbs'

const mockStore = configureMockStore([thunk])
const store = mockStore({
  mapToShow: { data: {}, isLoading: false, errorMessage: '' },
  spotDetail: { data: {}, isLoading: false, errorMessage: '' },
})

describe('Breadcrumbs', () => {
  test('renders Breadcrumbs component', () => {
    render(
      <Provider store={store}>
        <Breadcrumbs />
      </Provider>,
    )
  })
})
