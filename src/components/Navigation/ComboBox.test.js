import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import renderer from 'react-test-renderer'

import ComboBox from './ComboBox'

const mockStore = configureMockStore([thunk])
let store
let component

describe('ComboBox', () => {
  beforeEach(() => {
    store = mockStore({
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
    })
    component = renderer.create(
      <Provider store={store}>
        <ComboBox />
      </Provider>,
    )
  })
  test('renders ComboBox component', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})
