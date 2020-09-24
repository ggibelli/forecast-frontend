import deepFreeze from 'deep-freeze'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import reducer, {
  initializeSpots,
  createSurfspotMenu,
  updateSurfspotMenu,
  removeSurfspotMenu,
} from './nestedSurfspots'

import surfspotsService from '../services/surfspots'

jest.mock('../services/surfspots')

const mockStore = configureMockStore([thunk])

const initState = [
  {
    name: 'continent',
    countries: [
      {
        name: 'country',
        id: 12,
        regions: [
          {
            name: 'region',
            id: 123,
            surfSpots: [
              {
                name: 'surfspot',
                id: 1234,
                isSecret: false,
              },
            ],
          },
        ],
      },
    ],
    id: 1,
  },
]

describe('nestedSurfspots reducer', () => {
  test('returns new state with action INIT', () => {
    const state = []
    const action = {
      type: 'INIT',
      data: {
        name: 'surfspot1',
        isSecret: false,
        id: 1,
      },
    }
    deepFreeze(state)
    const newState = reducer(state, action)
    expect(newState).toHaveLength(1)
    expect(newState).toContainEqual(action.data)
  })

  test('returns new state with action NEW_SPOT_NESTED and public spot', () => {
    const state = initState
    const action = {
      type: 'NEW_SPOT_NESTED',
      data: {
        name: 'surfspot2',
        continent: { name: 'continent', id: 12 },
        country: { name: 'country', id: 123 },
        region: { name: 'region', id: 1234 },
        isSecret: false,
        id: 2,
      },
    }
    deepFreeze(state)
    const newState = reducer(state, action)
    expect(newState).toEqual([
      {
        countries: [
          {
            id: 12,
            name: 'country',
            regions: [
              {
                id: 123,
                name: 'region',
                surfSpots: [
                  { id: 1234, isSecret: false, name: 'surfspot' },
                  { id: 2, name: 'surfspot2' },
                ],
              },
            ],
          },
        ],
        id: 1,
        name: 'continent',
      },
    ])
  })

  test('returns old state with action NEW_SPOT_NESTED and secret spot', () => {
    const state = [
      {
        name: 'surfspot1',
        isSecret: false,
        id: 1,
      },
    ]
    const action = {
      type: 'NEW_SPOT_NESTED',
      data: {
        name: 'surfspot2',
        isSecret: true,
        id: 2,
      },
    }
    deepFreeze(state)
    const newState = reducer(state, action)
    expect(newState).toHaveLength(1)
  })

  test('returns new state with action UPDATE_SPOT_NESTED and public spot', () => {
    const state = initState
    const action = {
      type: 'UPDATE_SPOT_NESTED',
      data: {
        name: 'surfspot2',
        continent: { name: 'continent', id: 12 },
        country: { name: 'country', id: 123 },
        region: { name: 'region', id: 1234 },
        isSecret: false,
        id: 2,
      },
    }
    deepFreeze(state)
    const newState = reducer(state, action)
    expect(newState).toEqual([
      {
        countries: [
          {
            id: 12,
            name: 'country',
            regions: [
              {
                id: 123,
                name: 'region',
                surfSpots: [
                  { id: 1234, isSecret: false, name: 'surfspot' },
                  { id: 2, name: 'surfspot2' },
                ],
              },
            ],
          },
        ],
        id: 1,
        name: 'continent',
      },
    ])
  })

  test('returns new state with action UPDATE_SPOT_NESTED and secret spot', () => {
    const state = initState
    const action = {
      type: 'UPDATE_SPOT_NESTED',
      data: {
        name: 'surfspot1',
        continent: { name: 'continent', id: 12 },
        country: { name: 'country', id: 123 },
        region: { name: 'region', id: 1234 },
        isSecret: true,
        id: 1234,
      },
    }

    deepFreeze(state)
    const newState = reducer(state, action)
    expect(newState).toEqual([
      {
        name: 'continent',
        countries: [
          {
            name: 'country',
            id: 12,
            regions: [
              {
                name: 'region',
                id: 123,
                surfSpots: [],
              },
            ],
          },
        ],
        id: 1,
      },
    ])
  })

  test('returns new state with action REMOVE_SPOT_NESTED', () => {
    const state = initState
    const action = {
      type: 'REMOVE_SPOT_NESTED',
      data: {
        name: 'surfspot',
        continent: { name: 'continent', id: 12 },
        country: { name: 'country', id: 123 },
        region: { name: 'region', id: 1234 },
        isSecret: true,
        id: 1234,
      },
    }
    deepFreeze(state)
    const newState = reducer(state, action)
    expect(newState).toEqual([
      {
        name: 'continent',
        countries: [
          {
            name: 'country',
            id: 12,
            regions: [
              {
                name: 'region',
                id: 123,
                surfSpots: [],
              },
            ],
          },
        ],
        id: 1,
      },
    ])
  })
})

describe('allSpotsSearch reducer thunk', () => {
  it('init action', async () => {
    // Arrange
    const responsePayload = [
      {
        name: 'surfspot1',
        isSecret: false,
        id: 1,
      },
    ]
    const store = mockStore([])
    surfspotsService.getAll.mockResolvedValueOnce(responsePayload)

    // Act
    await store.dispatch(initializeSpots())

    // Assert
    const expectedActions = [
      {
        type: 'INIT',
        data: responsePayload,
      },
    ]
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('creates NEW_SPOT_NESTED action when spot created', async () => {
    // Arrange
    const store = mockStore([
      {
        name: 'surfspot1',
        isSecret: false,
        id: 1,
      },
    ])

    const responsePayload = {
      name: 'surfspot2',
      isSecret: false,
      id: 2,
    }

    // Act
    await store.dispatch(createSurfspotMenu(responsePayload))

    // Assert
    const expectedActions = [{ type: 'NEW_SPOT_NESTED', data: responsePayload }]
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('creates UPDATE_SPOT_NESTED action when spot updated', async () => {
    // Arrange
    const store = mockStore([
      {
        name: 'surfspot1',
        isSecret: false,
        id: 1,
      },
    ])

    const responsePayload = {
      name: 'surfspot2',
      isSecret: false,
      id: 2,
    }

    // Act
    await store.dispatch(updateSurfspotMenu(responsePayload))

    // Assert
    const expectedActions = [
      { type: 'UPDATE_SPOT_NESTED', data: responsePayload },
    ]
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('creates REMOVE_SPOT_NESTED action when spot removed', async () => {
    // Arrange
    const store = mockStore([
      {
        name: 'surfspot1',
        isSecret: false,
        id: 1,
      },
    ])

    const responsePayload = {
      name: 'surfspot1',
      isSecret: false,
      id: 1,
    }

    // Act
    await store.dispatch(removeSurfspotMenu(responsePayload))

    // Assert
    const expectedActions = [
      { type: 'REMOVE_SPOT_NESTED', data: responsePayload },
    ]
    expect(store.getActions()).toEqual(expectedActions)
  })
})
