import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import { render } from '@testing-library/react'

import ForecastChart from './ForecastChart'
import forecastReducer from '../reducers/forecastSpot'

jest.mock('./WindChart', () => () => <div>WindChart</div>)
jest.mock('./TideChart', () => () => <div>ChartTide</div>)
jest.mock('./PeriodChart', () => () => <div>PeriodChart</div>)
jest.mock('./HeightChart', () => () => <div>HeightChart</div>)
jest.mock('./WeatherTable', () => () => <div>WeatherTable</div>)

function renderWithProviders(ui, { reduxState } = {}) {
  const reducer = combineReducers({
    forecastSpot: forecastReducer,
  })
  const store = createStore(reducer, reduxState)
  return render(<Provider store={store}>{ui}</Provider>)
}

describe('ForecastChart component', () => {
  test.only('renders with redux defaults', () => {
    const { getByText, debug } = renderWithProviders(<ForecastChart />, {
      reduxState: {
        forecastSpot: {
          data: {
            forecast: [
              {
                time: '2020-09-26T00:00:00+00:00',
                data: [{}],
              },
              {
                time: '2020-09-26T04:00:00+00:00',
                data: [{}],
              },
              {
                time: '2020-09-26T08:00:00+00:00',
                data: [{}],
              },
              {
                time: '2020-09-26T12:00:00+00:00',
                data: [{}],
              },
              { time: '2020-09-26T16:00:00+00:00', data: [{}] },
            ],
            tides: {},
            surfspot: {},
          },
          isLoading: false,
          errorMessage: '',
        },
      },
    })
    debug()
  })

  test('renders with spot data', () => {
    const { getByText } = renderWithProviders(<ForecastChart />, {
      reduxState: {
        spotDetail: {
          data: {
            name: 'prova',
            isSecret: true,
            continent: { name: 'prova', id: '123' },
            country: { name: 'prova', id: '321' },
            region: { name: 'prova', id: '678' },
            latitude: '12',
            longitude: '12',
          },
          isLoading: false,
          errorMessage: '',
        },
      },
    })
    getByText(/form/i)
  })
})
