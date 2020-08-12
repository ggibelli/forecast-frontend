import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import renderer from 'react-test-renderer'

import Notification from './Notification'

const mockStore = configureMockStore([thunk])
let store
let component

describe('Notification', () => {
  beforeEach(() => {
    store = mockStore({
      notification: { message: 'ciao', type: 'success' },
    })
    component = renderer.create(
      <Provider store={store}>
        <Notification />
      </Provider>,
    )
  })
  test('renders Notification component', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})
