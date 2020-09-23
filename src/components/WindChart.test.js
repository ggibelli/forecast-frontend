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
const validParTonda = (p1, p2) => {
  console.log(p1 === '(' && p2 === ')')
  return p1 === '(' && p2 === ')'
}
const validParQuadra = (p1, p2) => {
  console.log(p1 === '[' && p2 === ']')
  return p1 === '[' && p2 === ']'
}
const validParGraffa = (p1, p2) => {
  console.log('cazzo')
  console.log(p1, p2)
  console.log(p1 === '{' && p2 === '}')
  return p1 === '{' && p2 === '}'
}
const isValid = function (s) {
  let result = null
  let primo = false
  const secondo = false
  let tonda = 0
  let quadra = 0
  let graffa = 0
  const origLength = s.length
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === ')') tonda += 1
    if (s[i] === '[' || s[i] === ']') quadra += 1
    if (s[i] === '{' || s[i] === '}') graffa += 1
  }
  if (tonda % 2 !== 0 || quadra % 2 !== 0 || graffa % 2 !== 0) return false

  const recPar = (parentesi) => {
    if (primo && origLength === parentesi.length) {
      result = false
      return
    }
    console.log('chiamata')
    if (primo && secondo) {
      if (parentesi.length === 0) {
        result = true
        return
      }
      if (parentesi.length % 2 !== 0) {
        result = false
        return false
      }
      if (validParTonda(parentesi[0], parentesi[parentesi.length - 1])) {
        console.log('tonda')
        parentesi.pop()
        parentesi.shift()
        return
      }
      if (validParQuadra(parentesi[0], parentesi[parentesi.length - 1])) {
        console.log('quadra')
        parentesi.pop()
        parentesi.shift()
        return
      }
      if (validParGraffa(parentesi[0], parentesi[parentesi.length - 1])) {
        console.log('graffa')
        parentesi.pop()
        parentesi.shift()
        return
      }

      for (let i = 0; i < parentesi.length; i++) {
        console.log('boh')
        // if (i === parentesi.length - 1) break
        if (validParTonda(parentesi[i], parentesi[i + 1])) {
          console.log('ttonda')
          return parentesi.splice(i, 2)
        }
        if (validParQuadra(parentesi[i], parentesi[i + 1])) {
          console.log('qquadra')
          return parentesi.splice(i, 2)
        }
        if (validParQuadra(parentesi[i], parentesi[i + 1])) {
          console.log('ggraffa')
          return parentesi.splice(i, 2)
        }
        primo = true
        recPar(parentesi)
      }
    }
  }
  const parArr = s.split('')
  recPar(parArr)
  return result
}
