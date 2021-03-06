import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import reducer, { fetchMap } from './maps'

import mapsService from '../services/maps'

jest.mock('../services/maps')

const mockStore = configureMockStore([thunk])

const initialState = {
  data: {},
  isLoading: false,
  errorMessage: '',
}

describe('Maps reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      data: {},
      isLoading: false,
      errorMessage: '',
    })
  })

  it('should return the loading state when the request is made', () => {
    expect(reducer({}, { type: 'FETCH_MAP_START' })).toEqual({
      isLoading: true,
      errorMessage: '',
    })
  })

  it('should return loading state false when the request is over and success', () => {
    expect(reducer({}, { type: 'FETCH_MAP_SUCCESS', data: 'success' })).toEqual(
      {
        data: 'success',
        isLoading: false,
        errorMessage: '',
      },
    )
  })

  it('should return loading state false and error message when the request is over and fail', () => {
    expect(reducer({}, { type: 'FETCH_MAP_FAIL' })).toEqual({
      isLoading: false,
      errorMessage: 'Cannot load the map',
    })
  })
})

describe('Map reducer thunk', () => {
  it('creates both fetch start and fetch success action if the map exists', async () => {
    // Arrange
    const id = 12345
    const area = 'countries'
    const responsePayload = {
      name: 'portugal',
      id: '12345',
      latitude: '12.1234',
      longitude: '-9.0988',
    }
    const store = mockStore(initialState)
    mapsService.getMapsInfo.mockResolvedValueOnce(responsePayload)

    // Act
    await store.dispatch(fetchMap(id, area))

    // Assert
    const expectedActions = [
      { type: 'FETCH_MAP_START' },
      { type: 'FETCH_MAP_SUCCESS', data: responsePayload },
    ]
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('create both fetch start and fetch failed if the map does not exist', async () => {
    // Arrange
    const id = 'wrong'
    const area = 'wrongToo'
    const responseError = new Error('Map not found')
    const store = mockStore(initialState)

    mapsService.getMapsInfo.mockRejectedValueOnce(responseError)

    // Act
    await store.dispatch(fetchMap(id, area))

    // Assert
    const expectedActions = [
      { type: 'FETCH_MAP_START' },
      { type: 'FETCH_MAP_FAIL', error: responseError },
    ]
    expect(store.getActions()).toEqual(expectedActions)
  })
})
