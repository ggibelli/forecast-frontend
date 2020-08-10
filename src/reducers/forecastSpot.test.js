import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import reducer, { fetchForecast } from './forecastSpot'

import forecastService from '../services/forecasts'

jest.mock('../services/forecasts')

const mockStore = configureMockStore([thunk])

const initialState = {
  data: {},
  isLoading: false,
  errorMessage: '',
}

describe('Forecast reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      data: {},
      isLoading: false,
      errorMessage: '',
    })
  })

  it('should return the loading state when the request is made', () => {
    expect(reducer({}, { type: 'FETCH_FORECAST_START' })).toEqual({
      isLoading: true,
      errorMessage: '',
    })
  })

  it('should return loading state false when the request is over and success', () => {
    expect(
      reducer({}, { type: 'FETCH_FORECAST_SUCCESS', data: 'success' }),
    ).toEqual({
      data: 'success',
      isLoading: false,
      errorMessage: '',
    })
  })

  it('should return loading state false and error message when the request is over and fail', () => {
    expect(reducer({}, { type: 'FETCH_FORECAST_FAIL' })).toEqual({
      isLoading: false,
      errorMessage: 'Cannot load the forecast',
    })
  })
})

describe('Spot detail reducer thunk', () => {
  it('creates both fetch start and fetch success action if the spot exists', async () => {
    // Arrange
    const id = 12345
    const responsePayload = { name: 'supertubos', id: '12345', waves: 'big' }
    const store = mockStore(initialState)
    forecastService.getForecast.mockResolvedValueOnce(responsePayload)

    // Act
    await store.dispatch(fetchForecast(id))

    // Assert
    const expectedActions = [
      { type: 'FETCH_FORECAST_START' },
      { type: 'FETCH_FORECAST_SUCCESS', data: responsePayload },
    ]
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('create both fetch start and fetch failed if the spot does not exist', async () => {
    // Arrange
    const id = 'wrong'
    const responseError = new Error('Forecast not found')
    const store = mockStore(initialState)

    forecastService.getForecast.mockRejectedValueOnce(responseError)

    // Act
    await store.dispatch(fetchForecast(id))

    // Assert
    const expectedActions = [
      { type: 'FETCH_FORECAST_START' },
      { type: 'FETCH_FORECAST_FAIL', error: responseError },
    ]
    expect(store.getActions()).toEqual(expectedActions)
  })
})
