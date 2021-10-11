import React from 'react'
import { render } from '@testing-library/react'
import WindChart from './WindChart'

const timeLabelsForecast = [
  '00:00',
  '04:00',
  '08:00',
  '12:00',
  '16:00',
  '20:00',
]

const forecastObject = [
  {
    airTemperature: 17.01,
    cloudCover: 89.33333333333333,
    gust: 4.156666666666666,
    precipitation: 0.04666666666666667,
    secondarySwellDirection: 236.36,
    secondarySwellHeight: 1.39,
    secondarySwellPeriod: 8.43,
    swellDirection: 256.392,
    swellHeight: 1.508,
    swellPeriod: 12.947999999999999,
    waterTemperature: 17.363333333333333,
    waveDirection: 264.22249999999997,
    waveHeight: 1.864,
    wavePeriod: 11.8975,
    windDirection: 338.98333333333335,
    windSpeed: 4.386666666666667,
    windWaveDirection: 298.2625,
    windWaveHeight: 0.515,
    windWavePeriod: 2.966,
  },
  {
    airTemperature: 17.01,
    cloudCover: 89.33333333333333,
    gust: 4.156666666666666,
    precipitation: 0.04666666666666667,
    secondarySwellDirection: 236.36,
    secondarySwellHeight: 1.39,
    secondarySwellPeriod: 8.43,
    swellDirection: 256.392,
    swellHeight: 1.508,
    swellPeriod: 12.947999999999999,
    waterTemperature: 17.363333333333333,
    waveDirection: 264.22249999999997,
    waveHeight: 1.864,
    wavePeriod: 11.8975,
    windDirection: 338.98333333333335,
    windSpeed: 4.386666666666667,
    windWaveDirection: 298.2625,
    windWaveHeight: 0.515,
    windWavePeriod: 2.966,
  },
  {
    airTemperature: 17.01,
    cloudCover: 89.33333333333333,
    gust: 4.156666666666666,
    precipitation: 0.04666666666666667,
    secondarySwellDirection: 236.36,
    secondarySwellHeight: 1.39,
    secondarySwellPeriod: 8.43,
    swellDirection: 256.392,
    swellHeight: 1.508,
    swellPeriod: 12.947999999999999,
    waterTemperature: 17.363333333333333,
    waveDirection: 264.22249999999997,
    waveHeight: 1.864,
    wavePeriod: 11.8975,
    windDirection: 338.98333333333335,
    windSpeed: 4.386666666666667,
    windWaveDirection: 298.2625,
    windWaveHeight: 0.515,
    windWavePeriod: 2.966,
  },
  {
    airTemperature: 17.01,
    cloudCover: 89.33333333333333,
    gust: 4.156666666666666,
    precipitation: 0.04666666666666667,
    secondarySwellDirection: 236.36,
    secondarySwellHeight: 1.39,
    secondarySwellPeriod: 8.43,
    swellDirection: 256.392,
    swellHeight: 1.508,
    swellPeriod: 12.947999999999999,
    waterTemperature: 17.363333333333333,
    waveDirection: 264.22249999999997,
    waveHeight: 1.864,
    wavePeriod: 11.8975,
    windDirection: 338.98333333333335,
    windSpeed: 4.386666666666667,
    windWaveDirection: 298.2625,
    windWaveHeight: 0.515,
    windWavePeriod: 2.966,
  },
  {
    airTemperature: 17.01,
    cloudCover: 89.33333333333333,
    gust: 4.156666666666666,
    precipitation: 0.04666666666666667,
    secondarySwellDirection: 236.36,
    secondarySwellHeight: 1.39,
    secondarySwellPeriod: 8.43,
    swellDirection: 256.392,
    swellHeight: 1.508,
    swellPeriod: 12.947999999999999,
    waterTemperature: 17.363333333333333,
    waveDirection: 264.22249999999997,
    waveHeight: 1.864,
    wavePeriod: 11.8975,
    windDirection: 338.98333333333335,
    windSpeed: 4.386666666666667,
    windWaveDirection: 298.2625,
    windWaveHeight: 0.515,
    windWavePeriod: 2.966,
  },
  {
    airTemperature: 17.01,
    cloudCover: 89.33333333333333,
    gust: 4.156666666666666,
    precipitation: 0.04666666666666667,
    secondarySwellDirection: 236.36,
    secondarySwellHeight: 1.39,
    secondarySwellPeriod: 8.43,
    swellDirection: 256.392,
    swellHeight: 1.508,
    swellPeriod: 12.947999999999999,
    waterTemperature: 17.363333333333333,
    waveDirection: 264.22249999999997,
    waveHeight: 1.864,
    wavePeriod: 11.8975,
    windDirection: 338.98333333333335,
    windSpeed: 4.386666666666667,
    windWaveDirection: 298.2625,
    windWaveHeight: 0.515,
    windWavePeriod: 2.966,
  },
]

const dataCharts = {
  timeLabelsForecast,
  forecastObject,
}

const day = '22-10-2020'

test('renders', () => {
  const { container } = render(<WindChart dataChart={dataCharts} day={day} />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <canvas
        height="150"
        width="300"
      />
    </div>
  `)
})

/**
 * @param {string} s
 * @return {boolean}
 */
