import { Polar, Bar, Line } from 'react-chartjs-2'
import forecast from './fore'

const tideTime = forecast.tides.map((hour) => hour.time)
const heightTide = forecast.tides.map((hour) => hour.height)
const typeTide = forecast.tides.map((hour) => hour.type)

const dataLine = {
  labels: tideTime,
  datasets: [
    {
      label: 'Tides',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,77,77,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: heightTide,
    },
  ],
}

const timeLabels = forecast.forecast.map((hour) => hour.time)
const waveHeight = forecast.forecast
  .map((hour) => hour.data)
  .map((wave) => wave[9].waveHeight)

const swellPeriod = forecast.forecast
  .map((hour) => hour.data)
  .map((swell) => swell[6].swellPeriod)

const secondaySwellPeriod = forecast.forecast
  .map((hour) => hour.data)
  .map((swell) => swell[3].secondarySwellPeriod)

console.log(heightTide)

const dataLine1 = {
  labels: timeLabels,
  datasets: [
    {
      label: 'Primary swell',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,77,77,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: swellPeriod,
    },
    {
      label: 'Secondary swell',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(255,192,192,0.4)',
      borderColor: 'rgba(255,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: secondaySwellPeriod,
    },
  ],
}

const dataBar = {
  labels: timeLabels,
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: waveHeight,
    },
  ],
}

const data = {
  datasets: [
    {
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 100, 0],
      backgroundColor: [
        '#FF6384',
        '#FF1084',
        '#4B10C0',
        '#FF1256',
        '#E7E1ED',
        '#36A0EB',
        '#4BC9C0',
        '#FFC756',
        '#E711ED',
        '#3634EB',
        '#FF3284',
        '#4BC0C0',
        '#FFCE56',
        '#E7E9ED',
        '#36A2EB',
        '#36A200',
      ],
      label: 'My dataset', // for legend
    },
  ],
  labels: [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW',
  ],
}
