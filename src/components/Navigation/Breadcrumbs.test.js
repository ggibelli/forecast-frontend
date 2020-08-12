import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import renderer from 'react-test-renderer'

import Breadcrumbs from './Breadcrumbs'

const mockStore = configureMockStore([thunk])
let store
let component

describe('Breadcrumbs', () => {
  beforeEach(() => {
    store = mockStore({
      mapToShow: { data: {}, isLoading: false, errorMessage: '' },
      spotDetail: { data: {}, isLoading: false, errorMessage: '' },
    })
    component = renderer.create(
      <Provider store={store}>
        <Breadcrumbs />
      </Provider>,
    )
  })
  test('renders Breadcrumbs component', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})
