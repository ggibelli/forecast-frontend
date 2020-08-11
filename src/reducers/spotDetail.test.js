import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import reducer, { fetchSpot } from './spotDetail'

import surfspotService from '../services/surfspots'

jest.mock('../services/surfspots')

const mockStore = configureMockStore([thunk])

const initialState = {
  data: {},
  isLoading: false,
  errorMessage: '',
}

describe('Spot detail reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      data: {},
      isLoading: false,
      errorMessage: '',
    })
  })

  it('should return the loading state when the request is made', () => {
    expect(reducer({}, { type: 'FETCH_SPOT_START' })).toEqual({
      isLoading: true,
      errorMessage: '',
    })
  })

  it('should return loading state false when the request is over and success', () => {
    expect(
      reducer({}, { type: 'FETCH_SPOT_SUCCESS', data: 'success' }),
    ).toEqual({
      data: 'success',
      isLoading: false,
      errorMessage: '',
    })
  })

  it('should return loading state false and error message when the request is over and fail', () => {
    expect(reducer({}, { type: 'FETCH_SPOT_FAIL' })).toEqual({
      isLoading: false,
      errorMessage: 'Cannot find the spot',
    })
  })
})

describe('Spot detail reducer thunk', () => {
  it('creates both fetch start and fetch success action if the spot exists', async () => {
    // Arrange
    const id = 12345
    const responsePayload = {
      name: 'supertubos',
      id: '12345',
      location: 'cool',
    }
    const store = mockStore(initialState)
    surfspotService.getSingleSpot.mockResolvedValueOnce(responsePayload)

    // Act
    await store.dispatch(fetchSpot(id))

    // Assert
    const expectedActions = [
      { type: 'FETCH_SPOT_START' },
      { type: 'FETCH_SPOT_SUCCESS', data: responsePayload },
    ]
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('create both fetch start and fetch failed if the spot does not exist', async () => {
    // Arrange
    const id = 'wrong'
    const responseError = new Error('Spot not found')
    const store = mockStore(initialState)

    surfspotService.getSingleSpot.mockRejectedValueOnce(responseError)

    // Act
    await store.dispatch(fetchSpot(id))

    // Assert
    const expectedActions = [
      { type: 'FETCH_SPOT_START' },
      { type: 'FETCH_SPOT_FAIL', error: responseError },
    ]
    expect(store.getActions()).toEqual(expectedActions)
  })
})
