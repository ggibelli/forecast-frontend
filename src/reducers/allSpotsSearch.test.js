import deepFreeze from 'deep-freeze'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import reducer, {
  initializeSearch,
  createSurfspot,
  updateSurfspot,
  removeSurfspot,
} from './allSpotsSearch'

import surfspotsService from '../services/surfspots'

jest.mock('../services/surfspots')

const mockStore = configureMockStore([thunk])

describe('allSpotsSearch reducer', () => {
  test('returns new state with action INIT_SEARCH', () => {
    const state = []
    const action = {
      type: 'INIT_SEARCH',
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

  test('returns new state with action NEW_SPOT_SEARCH and public spot', () => {
    const state = [
      {
        name: 'surfspot1',
        isSecret: false,
        id: 1,
      },
    ]
    const action = {
      type: 'NEW_SPOT_SEARCH',
      data: {
        name: 'surfspot2',
        isSecret: false,
        id: 2,
      },
    }
    deepFreeze(state)
    const newState = reducer(state, action)
    expect(newState).toHaveLength(2)
    expect(newState).toContainEqual(action.data)
  })

  test('returns old state with action NEW_SPOT_SEARCH and secret spot', () => {
    const state = [
      {
        name: 'surfspot1',
        isSecret: false,
        id: 1,
      },
    ]
    const action = {
      type: 'NEW_SPOT_SEARCH',
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

  test('returns new state with action UPDATE_SPOT_SEARCH and public spot', () => {
    const state = [
      {
        name: 'surfspot1',
        isSecret: false,
        id: 1,
      },
    ]
    const action = {
      type: 'UPDATE_SPOT_SEARCH',
      data: {
        name: 'surfspot2',
        isSecret: false,
        id: 2,
      },
    }
    deepFreeze(state)
    const newState = reducer(state, action)
    expect(newState).toHaveLength(2)
    expect(newState).toContainEqual(action.data)
  })

  test('returns new state with action UPDATE_SPOT_SEARCH and secret spot', () => {
    const state = [
      {
        name: 'surfspot1',
        isSecret: false,
        id: 1,
      },
      {
        name: 'surfspot2',
        isSecret: false,
        id: 2,
      },
    ]
    const action = {
      type: 'UPDATE_SPOT_SEARCH',
      data: {
        name: 'surfspot2',
        isSecret: true,
        id: 2,
      },
    }
    deepFreeze(state)
    const newState = reducer(state, action)
    expect(newState).toHaveLength(1)
    expect(newState).toContainEqual(state[0])
  })

  test('returns new state with action REMOVE_SPOT_SEARCH', () => {
    const state = [
      {
        name: 'surfspot1',
        isSecret: false,
        id: 1,
      },
      {
        name: 'surfspot2',
        isSecret: false,
        id: 2,
      },
    ]
    const action = {
      type: 'REMOVE_SPOT_SEARCH',
      data: 1,
    }
    deepFreeze(state)
    const newState = reducer(state, action)
    expect(newState).toHaveLength(1)
  })
})

describe('allSpotsSearch reducer thunk', () => {
  it('init action', async () => {
    // Arrange
    const responsePayload = {
      name: 'surfspot1',
      isSecret: false,
      id: 1,
    }
    const store = mockStore([])
    surfspotsService.getAllForSearch.mockResolvedValueOnce(responsePayload)

    // Act
    await store.dispatch(initializeSearch())

    // Assert
    const expectedActions = [
      {
        type: 'INIT_SEARCH',
        data: responsePayload,
      },
    ]
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('creates NEW_SPOT_SEARCH action when spot created', async () => {
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
    await store.dispatch(createSurfspot(responsePayload))

    // Assert
    const expectedActions = [{ type: 'NEW_SPOT_SEARCH', data: responsePayload }]
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('creates UPDATE_SPOT_SEARCH action when spot updated', async () => {
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
    await store.dispatch(updateSurfspot(responsePayload))

    // Assert
    const expectedActions = [
      { type: 'UPDATE_SPOT_SEARCH', data: responsePayload },
    ]
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('creates REMOVE_SPOT_SEARCH action when spot removed', async () => {
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
    await store.dispatch(removeSurfspot(responsePayload))

    // Assert
    const expectedActions = [
      { type: 'REMOVE_SPOT_SEARCH', data: responsePayload },
    ]
    expect(store.getActions()).toEqual(expectedActions)
  })
})
