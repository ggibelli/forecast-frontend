import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import renderer from 'react-test-renderer'

import DrawerLinkList from './DrawerLinkList'

const mockStore = configureMockStore([thunk])
let store
let component

describe('DrawerLinkList', () => {
  beforeEach(() => {
    store = mockStore({
      surfspots: [
        {
          name: 'Europe',
          latitude: '12.1234',
          longitude: '34.1234',
          countries: [
            {
              name: 'cbd',
              id: '234',
              regions: [
                {
                  name: 'lol',
                  id: '090',
                  surfSpots: [
                    {
                      name: 'foz',
                      id: '456',
                    },
                  ],
                },
              ],
            },
          ],
          id: '123',
        },
      ],
    })
    component = renderer.create(
      <Provider store={store}>
        <DrawerLinkList />
      </Provider>,
    )
  })
  test('renders DrawerLinkList component', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})
