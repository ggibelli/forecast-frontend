import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { render, fireEvent } from '@testing-library/react'
import { forecast } from '../../utils/forecastDataTest'

import ForecastChart from './index'
import forecastReducer from '../../reducers/forecastSpot'

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
  test('renders with forecast data', () => {
    const { getByText } = renderWithProviders(<ForecastChart />, {
      reduxState: forecast,
    })
    // date hardcoded because is in my dummy test data
    getByText(/2020-09-27/i)
  })

  test('renders with wrong forecast data showing an error', () => {
    const { getByText } = renderWithProviders(<ForecastChart />, {
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
    getByText(/the coordinates of this spot are wrong/i)
  })

  test('the next and the previous button change the date', () => {
    const { getAllByRole, getByText } = renderWithProviders(<ForecastChart />, {
      reduxState: forecast,
    })
    // date hardcoded because is in my dummy test data
    getByText(/2020-09-27/i)
    const nextButtons = getAllByRole('button', { name: /next/i })
    const previousButtons = getAllByRole('button', { name: /previous/i })
    fireEvent.click(nextButtons[0])
    getByText(/2020-09-28/i)
    fireEvent.click(previousButtons[0])
    getByText(/2020-09-27/i)
  })
})
