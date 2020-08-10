import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fetchSpot } from './spotDetail'

import surfspotService from '../services/surfspots'

jest.mock('../services/surfspots')

const mockStore = configureMockStore([thunk])

const initialState = {
  data: {},
  isLoading: false,
  errorMessage: '',
}

describe('Spot detail reducer', () => {
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
